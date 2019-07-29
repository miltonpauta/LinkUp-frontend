import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/FeedPage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CreatePost from '@/components/CreatePost'

Vue.use(Router)

const router =  new Router({
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
      component: CreatePost,
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
