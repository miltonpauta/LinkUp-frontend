<template>
    <div class="formControl"> 
        <div v-if="withError" class="error" v-html="error"/>
        <h1 class="form-title">login</h1> 
        <div class="form-control__inputs">
            <input type="email" name="email" v-model="email" placeholder="email"> 
            <input type="password" name="password" v-model="password" placeholder="password"> 
        </div>
        <div class="form-control__actions">
            <button @click="login" type="submit">login</button> 
        </div>
    </div>
</template>

<script>
import AuthenticationService from '../../../services/AuthenticationService' 
import { setTimeout } from 'timers';
export default {
  data () {
    return {
        email: '',
        password: '',
        error: null,
        withError: false
    }
  }, 
  methods: {
    async login(){
        try{
            const response = await AuthenticationService.login({
                email: this.email,
                password: this.password
            })
            //login is successful, response is retrieved
            //add data to the vuex store 

            this.$store.dispatch('setToken', response.data.token); //calls setToken action method from store 
            this.$store.dispatch('setUserId', response.data.userId); 
            this.$store.dispatch('setUser', response.data.user); 

            this.withError = false; 

            //redirect to feed page!
            this.$router.push("/feed");
        }catch(error){
            this.error = error.response.data.error; 
            this.withError = true; 
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error{
    color: red; 
    background: white; 
    border-radius: 3px; 
    padding: 5px 0;
}

.formControl{
    text-align: center;
    margin: auto; 
    width: 500px; 
    background: rgb(255,127,80); 
    padding: 20px 40px; 
    border-radius: 5px; 
}

.form-title{
    font-size: 40px; 
    font-weight: 400; 
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
    font: inherit;
    margin-top: 10px; 
    background-color: white; 
    border-radius: 3px; 
    cursor: pointer; 
    padding: 8px; 
}

.form-control__actions button:hover,
.form-control__actions button:active{
	background-color: rgb(255,127,80); 
	color: white; 
    font-weight: bold; 
}
</style>