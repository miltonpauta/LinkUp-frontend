import Vue from 'vue'
import Router from 'vue-router'
import FeedPage from '@/components/pages/FeedPage/index'
import YourSongsPage from '@/components/pages/YourSongsPage/index'
import Register from '@/components/shared/utils/Register'
import Login from '@/components/shared/utils/Login'
import CreatePost from '@/components/shared/user-input/CreatePost'

Vue.use(Router)

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
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if ($store.state.isUserLoggedIn) {
//       next()
//       return 
//     }
//     next('/login') 
//   } else {
//     // next()
//     router.push('/login')
//   }
// })

export default router; 
