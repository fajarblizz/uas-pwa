import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as firebase from 'firebase'

Vue.use(BootstrapVue, IconsPlugin)

Vue.config.productionTip = false
// Your web app's Firebase configuration

const configOptions = {
  apiKey: 'AIzaSyAdRwfpHmuQn2DNOqDwESD77tUjhtNOsRQ',
  authDomain: 'vue-firebase-auth-5dda0.firebaseapp.com',
  databaseURL: 'https://vue-firebase-auth-5dda0.firebaseio.com',
  projectId: 'vue-firebase-auth-5dda0',
  storageBucket: 'vue-firebase-auth-5dda0.appspot.com',
  messagingSenderId: '504397383749',
  appId: '1:504397383749:web:4a9b73da28b687f61afb2c'
}
// Initialize Firebase
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
