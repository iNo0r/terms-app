import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Document from '../views/Document.vue'
import _Document from '../views/_Document.vue'
import List from '../views/Document/List.vue'
import Experiment from '../views/experiment.vue'


import Learn from '../views/Learn.vue'
import LearningMethod from '../views/Learn/Learning-method.vue'
// learning methods
import MeaningTerm from '../views/Learn/LearningMethods/Meaning-term.vue'




import documentList from '../components/Document/List.vue'

import Signup from '../views/Home/Sign-up.vue'
import Signin from '../views/Home/Sign-in.vue'





const routes = [
  {
    path: '/exp',
    component: Experiment,
  },
  {
    path: '/signup',
    component: Signup,
    name: "signup"
  },
  {
    path: '/signin',
    component: Signin,
    name: "signin"
  },
  {
    path: '/',
    component: Home,
    name: "Home"
  },
  {
    path: '/document',
    // name: 'Document',
    component: Document,
    children: [
      {
        path: ':listIndex',
        component: documentList,
        name: "documentList",
        props: true
      }
    ]

  },
  {
    path: "/_document",
    component: _Document,
    name: 'document'
  },
  {
    path: '/_document/list',
    component: List,
    name: 'list',
    props: true
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
  },
  {
    path: '/learn/method',
    name: 'learning-method',
    component: LearningMethod,
    props: true
  },
  {
    path: '/learn/method/meaning-term',
    name: 'meaningTerm',
    component: MeaningTerm,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
