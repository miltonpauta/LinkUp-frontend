// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'     

// fortawesome icons imported below 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faTrash, faPaperPlane, faComments, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThumbsUp, faTrash, faPaperPlane, faComments, faPlus); 

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false; 

//sync store to the router, u can access store data from router (its components/endpoints)
sync(store,router); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}); 
