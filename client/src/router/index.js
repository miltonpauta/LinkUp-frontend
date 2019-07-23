import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/Feed'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CreatePost from '@/components/CreatePost'

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
    },
    {
      path:'/create',
      name: 'create-post',
      component: CreatePost
    }
  ]
})
