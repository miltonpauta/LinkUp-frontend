<template>
    <div class="form-control"> 
        <h1 class="form-title">Register</h1> 
        <div class="form-control__inputs">
            <input type="email" name="email" v-model="email" placeholder="email"> 
            <input type="password" name="password" v-model="password" placeholder="password"> 
        </div>
        <div class="form-control__actions">
            <button @click="register" type="submit">Register Now!</button> 
        </div>
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

.form-control{
    background: rgb(255,127,80); 
    padding: 20px 40px; 
}

.form-title{
    font-size: 40px; 
    color: white; 
}

.form-control__inputs input{
    font-size: 15px; 
    width: 300px; 
    height: 30px;
    display: block; 
    margin: 15px auto; 
    border-radius: 3px; 
}

.form-control__actions button{
    margin-top: 10px; 
    background-color: white; 
    cursor: pointer; 
    padding: 8px; 
    font: inherit;
}

.form-control__actions button:hover,
.form-control__actions button:active{
	background-color: rgb(255,127,80); 
	color: white; 
}
</style>
