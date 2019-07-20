import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: Feed 
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
