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



//to check auth -- under dev
import firebase from '../firebase/firebase'



const routes = [
  {
    path: '/exp',
    component: Experiment,
    meta: {
      requiresAuth: true
    }
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
    name: "Home",
    meta: {
      requiresAuth: true
    }

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
    ],
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/_document",
    component: _Document,
    name: 'document',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/_document/list',
    component: List,
    name: 'list',
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/learn/method',
    name: 'learning-method',
    component: LearningMethod,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/learn/method/meaning-term',
    name: 'meaningTerm',
    component: MeaningTerm,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = await firebase.getCurrentUser();
  if (requiresAuth) {
    if (currentUser) {
      return next()
    } else {
      return next('/signin')
    }

  }
  next()
})

export default router
