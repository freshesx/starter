import Vue from 'vue'
import App from './app'
import human from './human'
import env from './env'
import store from './store'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: 'app',
  env,
  human,
  store,
  router,
  render: h => h(App)
})
