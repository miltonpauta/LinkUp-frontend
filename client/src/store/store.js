//this file gets access to store, the store will therefore be avaliable to all of application
import Vue from 'vue'
import Vuex from 'vuex'

//alows u to access store in all of view components 
Vue.use(Vuex); 

export default new Vuex.Store({
    strict: true, 
    state:{
        token: null,
        userId: null, 
        isUserLoggedIn: false
    },
    mutations:{
        setToken(state, token){
            state.token = token; 
            //if token is defined (not null)
            if(token){
                state.isUserLoggedIn = true; 
            }else{
                state.isUserLoggedIn=false; 
            }
        },
        setUser(state, userId){
            state.userId = userId; 
        }
    }, 
    actions:{
        setToken({commit}, token){
            commit('setToken', token); 
        },
        setUser({commit}, userId){
            commit('setUser', userId)
        }
    }
})
