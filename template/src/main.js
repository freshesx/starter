import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import human from './human'
import app from './app'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  human
  render: h => h(app)
})
