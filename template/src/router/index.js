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

// When you need set auth
// router.beforeEach((to, from, next) => {
//   const token = lodash.get(store, 'state.user.token', {})
//
//   to.matched.some(record => record.meta.auth) && lodash.size(token) <= 0
//     ? next({ name: 'sign-in', query: { redirect: to.fullPath } })
//     : next()
// })

// When you need save scroll
// router.beforeEach((to, from, next) => {
//   saveScroll(from)
//   next()
// })
//
// router.afterEach((to, from, next) => {
//   setScroll(to)
// })

export default router
