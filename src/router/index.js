import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: () => import('@/components/home/AppIndex'),
      meta: {
        requireAuth: true
      }
    }
  ]
})
