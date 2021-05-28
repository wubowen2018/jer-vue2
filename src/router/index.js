/*eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/Home'),
      redirect: '/index',
      children:[
        {
          path: '/index',
          name: 'AppIndex',
          component: () => import('@/components/home/AppIndex'),
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: () => import('../components/library/LibraryIndex'),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    }
  ]
})
