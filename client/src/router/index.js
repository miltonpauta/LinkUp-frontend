import Vue from 'vue'
import Router from 'vue-router'
import FeedPage from '@/components/pages/FeedPage/index'
import YourSongsPage from '@/components/pages/YourSongsPage/index'
import RequestsPage from '@/components/pages/RequestsPage/index'
import MessagesPage from '@/components/pages/MessagesPage/index'
import Register from '@/components/shared/utils/Register'
import Login from '@/components/shared/utils/Login'
import CreatePost from '@/components/shared/user-input/CreatePost'
import store from '../store/store';

Vue.use(Router)

//turn this into its own component 
const Error = {
  template: '<h1>This is Error Component</h1>'
}

const router =  new Router({
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: FeedPage 
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
      component: CreatePost,
      meta: {
        requiresAuth: true 
      }
    },
    {
      path: '/your-songs',
      name: 'your-songs',
      component: YourSongsPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests',
      name: 'your-requests',
      component: RequestsPage,
      meta: {
        requiresAuth: true
      }
    }, 
    {
      path: '/messages',
      name: 'your-messages',
      component: MessagesPage,
      meta: {
        requiresAuth: true
      }
    }, 
    {
      path: '/*',
      name: 'error',
      component: Error
    }
  ]
})

// Gaurds for Auth Routes 
router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth){
    if(!store.state.isUserLoggedIn){
      next('/login')
    }else{
      next()
    }
  }else{
    next(); 
  }
})


export default router; 
