export default [
  {
    name: 'sign-in',
    path: 'in',
    component: resolve => { require(['../components/sign/in'], resolve) }
  },
  {
    name: 'sign-up',
    path: 'up',
    component: resolve => { require(['../components/sign/up'], resolve) }
  }
]
