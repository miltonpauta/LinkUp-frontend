// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'     

Vue.config.productionTip = false; 

//sync store to the router, u can access store data from router (its components/endpoints)
sync(store,router); 

//Add store into this app! along with everything else below that it needs 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}); 
