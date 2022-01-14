import './firebaseinit'
import { initializeFirestore, CACHE_SIZE_UNLIMITED, getFirestore, query, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
console.log(auth.currentUser)
let firestore = getFirestore()
const myCollection = 'lists'


let userUid = auth.currentUser ? auth.currentUser.uid : 'a'
let mainDoc = doc(firestore, 'users/' + userUid)
let collectionRef = collection(mainDoc, myCollection)


function getUserUid() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
            if (user) {
                resolve(user.uid)
            }
        })
    })
}
//GetAllData
async function getAllDocs() {
    let mainDoc = doc(firestore, 'users/' + await getUserUid())
    let targetedCollection = collection(mainDoc, "lists")
    let myQuery = query(targetedCollection)
    let myDocs = (await getDocs(myQuery)).docs.map(doc => {
        // return { listIndex: doc.id, ...doc.data() }
        return doc.data()
    })

    return myDocs
}
// --- Under Development


async function addList(newlist) {
    let mainDoc = doc(firestore, 'users/' + await getUserUid())
    let targetedCollection = collection(mainDoc, "lists")
    let docRef = doc(targetedCollection)
    // i added return because i felt it is right, no rational reason at the moment
    return await setDoc(docRef, {
        ...newlist,
        _listId: docRef.id
    })
}

async function deleteList(listId) {
    let mainDoc = doc(firestore, 'users/' + await getUserUid())
    let docRef = doc(mainDoc, myCollection + "/" + listId)
    return await deleteDoc(docRef)
}

async function editList(listId, editedList) {
    let mainDoc = doc(firestore, 'users/' + await getUserUid())
    let docRef = doc(mainDoc, myCollection + "/" + listId)
    await updateDoc(docRef, editedList)
    console.log('firebase list edited')
}

// since terms are stored as an array in terms Filed, there is no direct way to add or delete or edit 
//  thats why i am going to make a method that updates the whole document, and will handle the add/edit/delete manullly at store.js
// actually i am just going to use editList Function 
// async function updateTerms(listId, editedList) {
//     let docRef = doc(mainDoc, myCollection + "/" + listId)
//     return await updateDoc(docRef, editedList)
// }

// auth methods - under dev 

async function SignUp(userEmail, userPassword) {
    console.log('reached')
    return createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(async (userCredential) => {
            // Signed in 
            // console.log(auth)
            const user = userCredential.user;
            // UserUid = user.uid
            setDoc(doc(mainDoc, `users/${await getUserUid()}`), {}, { merge: true })
            // addDoc(collection(mainDoc, 'lists'), { creator: userUid })
            // console.log('signed')
            return userCredential
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log("Sign up Error : ", errorMessage)
            return error
            // ..
        });
}
async function SignIn(userEmail, userPassword) {
    await signInWithEmailAndPassword(auth, userEmail, userPassword)

}
let getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        }, reject);
    })
};

async function LogOut() {
    await signOut(auth).then(() => {
        console.log('signed out successfully')
    }).catch((error) => {
        console.log('could not sign out')
        // An error happened.
    });
}

export default {
    getAllDocs,
    addList,
    deleteList,
    editList,
    SignUp,
    SignIn,
    getCurrentUser,
    LogOut
}

