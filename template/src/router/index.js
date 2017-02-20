import Vue from 'vue'
import VueRouter from 'vue-router'
import sign from './sign'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: resolve => { require(['../components/home'], resolve) }
    },
    {
      path: '/sign',
      component: resolve => { require(['../components/sign'], resolve) },
      children: sign
    }
  ]
})

export default router
