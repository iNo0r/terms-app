import { createStore } from 'vuex'

//firebase 
import firebase from '../firebase/firebase.js'

//router views 
import List from '../Constructors/List.js'
import Term from '../Constructors/Term'

export default createStore({
  state: {
    termsLists: []
  },
  getters: {
    termsLists(state) {
      return state.termsLists
    },
    hasData(state) {

      // this.termsLists.length > 0;

    }
  },
  mutations: {
    // initData() {

    // },
    // to update the data in the localStorage (virtual server)
    setData(state, data) {
      // console.log(data)
      let stringified = JSON.stringify(data)
      localStorage.setItem("termsLists", stringified)
    },
    // to update data in state
    updateState(state, data) {
      state.termsLists = data
    },


  },
  actions: {

    // to get the data from the Firestore and update the state 
    async loadData(context) {
      // console.log("loading...")
      let data = await firebase.getAllDocs()
      context.commit("updateState", data)
    },
    // will take care of updating both state and loclaStorage 
    setData(context, data) {
      context.commit("setData", data)
      context.dispatch("loadData")
    },
    async addList(context, data) {
      let newListName = data.listName;
      let newListDiscription = data.listDescription;
      let list = { ...(new List(newListName, newListDiscription)) };
      // console.log(list)
      await firebase.addList(list)
      await context.dispatch('loadData')
    },
    async deleteList(context, listId) {
      await firebase.deleteList(listId)
      await context.dispatch('loadData')

    },
    async editList(context, data) {

      let listId = data._listId
      // let list = data.list
      await firebase.editList(listId, data)
      // console.log("done")
      await context.dispatch('loadData')

    },
    //under development
    signUp(context, data) {
      let email = data.email
      let password = data.password
      firebase.SignUp(email, password)
    },
    signIn(context, data) {
      let email = data.email
      let password = data.password
      firebase.SignIn(email, password)
    },

  },
  modules: {
  }
})
