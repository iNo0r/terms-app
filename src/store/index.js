import { createStore } from 'vuex'

//firebase 
import firebase from '../firebase.js'

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
    // --- suspended
    // async addTerm(context, data) {
    //   // i could not inhert the current list object from state because it has listIndex which is used as a pointer to the  but not existed real the format of list 
    //   // i could change the way but it is going to take time 
    //   let term = new Term(data.term, data.meaning, data.synonyms, data.antonyms, data.examples, data.examplesTrans);
    //   let listId = data._listId;

    //   let mainData = [...context.getters["termsLists"]];

    //   mainData[listIndex].terms.push(term)
    //   await firebase.editList(listIndex, list)
    //   await context.dispatch('loadData')
    //   // context.dispatch("setData", mainData)
    //   // console.log(context.state.termsLists)
    // },
    // addTerm(context, data) {
    //   let term = new Term(data.term, data.meaning, data.synonyms, data.antonyms, data.examples, data.examplesTrans);
    //   let listIndex = data.listIndex;
    //   let mainData = [...context.getters["termsLists"]];

    //   mainData[listIndex].terms.push(term)
    //   context.dispatch("setData", mainData)
    //   // console.log(context.state.termsLists)
    // },
    // deleteTerm(context, data) {
    //   let termIndex = data.termIndex;
    //   let listIndex = data.listIndex;
    //   let mainData = [...context.getters["termsLists"]];
    //   mainData[listIndex].terms.splice(termIndex, 1)
    //   context.dispatch("setData", mainData)

    // },
    // editTerm(context, data) {
    //   let termIndex = data.termIndex
    //   let term = new Term(data.term, data.meaning, data.synonyms, data.antonyms, data.examples);
    //   let listIndex = data.listIndex;
    //   let mainData = [...context.getters["termsLists"]];
    //   mainData[listIndex].terms[termIndex] = term
    //   context.dispatch("setData", mainData)
    //   // console.log("reached")
    //   // console.log(context.state.termsLists)
    // },
    // -- to get the data from the local storage and update the state 
    // loadData_Old(context) {
    //   let localStorageData = localStorage.getItem("termsLists")
    //   let parsed = JSON.parse(localStorageData)
    //   context.commit("updateState", parsed)
    // },
    // addList(context, data) {
    //   let newListName = data.listName;
    //   let newListDiscription = data.listDescription;
    //   let list = new List(newListName, newListDiscription);
    //   let termsLists = context.getters['termsLists'];
    //   termsLists.push(list);
    //   context.dispatch("setData", termsLists)
    // },
    // deleteList(context, data) {
    //   let listIndex = data
    //   let termsLists = [...context.getters["termsLists"]]
    //   termsLists.splice(listIndex, 1)
    //   context.dispatch("setData", termsLists)
    // },
    // editList(context, data) {
    //   let listIndex = data.listIndex
    //   let listName = data.listName
    //   let listDescription = data.listDescription
    //   let termsLists = [...context.getters["termsLists"]]
    //   termsLists[listIndex].listName = listName
    //   termsLists[listIndex].listDescription = listDescription
    //   context.dispatch("setData", termsLists)

    // },

  },
  modules: {
  }
})
