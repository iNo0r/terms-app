import { createApp } from 'vue'
import App from './App.vue'
// firebase should be called before router, becuase we need the initiation happened in store 
import firebase from './firebase/firebase.js'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')
