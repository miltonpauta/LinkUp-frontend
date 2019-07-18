<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" v-model="email" placeholder="email"> 
        <input type="password" name="password" v-model="password" placeholder="password"> 
        <button @click="register" type="submit">Register Now</button>
    </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService' 
import { setTimeout } from 'timers';
export default {
  data () {
    return {
        email: '',
        password: '' 
    }
  }, 
  methods: {
      async register(){
        //   wait for response back from server 
          const response = await AuthenticationService.register({
              email: this.email, 
              password: this.password
          })
          console.log(response.data); 
      }
  },
  mounted(){
     
  },
  watch:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
