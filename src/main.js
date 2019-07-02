import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './registerServiceWorker'
import NProgress from 'nprogress'

import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBtBcevL0ds4R112eUX_0FvbcFvDeBWCb0",
  authDomain: "to-do-list-92ef3.firebaseapp.com",
  databaseURL: "https://to-do-list-92ef3.firebaseio.com",
  projectId: "to-do-list-92ef3",
  storageBucket: "",
  messagingSenderId: "693940923686",
  appId: "1:693940923686:web:3a533d99e6154c63"
};

firebase.initializeApp(config)

export const db = firebase.firestore()

// eslint-disable-next-line
router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

// eslint-disable-next-line
router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
