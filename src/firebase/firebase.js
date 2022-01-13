import './firebaseinit'
import { initializeFirestore, CACHE_SIZE_UNLIMITED, getFirestore, query, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
console.log(auth.currentUser)
let firestore = getFirestore()
const myCollection = 'lists'
let collectionRef = collection(firestore, myCollection)

//GetAllData
async function getAllDocs() {
    let targetedCollection = collection(firestore, "lists")
    let myQuery = query(targetedCollection)
    let myDocs = (await getDocs(myQuery)).docs.map(doc => {
        // return { listIndex: doc.id, ...doc.data() }
        return doc.data()
    })

    return myDocs
}
// --- Under Development


async function addList(newlist) {
    let docRef = doc(collectionRef)
    // i added return because i felt it is right, no rational reason at the moment
    return await setDoc(docRef, {
        ...newlist,
        _listId: docRef.id
    })
}

async function deleteList(listId) {
    let docRef = doc(firestore, myCollection + "/" + listId)
    return await deleteDoc(docRef)
}

async function editList(listId, editedList) {
    let docRef = doc(firestore, myCollection + "/" + listId)
    return await updateDoc(docRef, editedList)
}

// since terms are stored as an array in terms Filed, there is no direct way to add or delete or edit 
//  thats why i am going to make a method that updates the whole document, and will handle the add/edit/delete manullly at store.js
// actually i am just going to use editList Function 
// async function updateTerms(listId, editedList) {
//     let docRef = doc(firestore, myCollection + "/" + listId)
//     return await updateDoc(docRef, editedList)
// }



export default {
    getAllDocs,
    addList,
    deleteList,
    editList,
}
