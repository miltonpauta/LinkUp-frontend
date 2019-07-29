<template>
    <div class="form-control"> 
        <!-- <div v-if="withError" class="error" v-html="error"/> -->
        <p v-if="withError">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="e in error" v-bind:key="e._id">{{ e }}</li>
            </ul>
        </p>


        <h1 class="form-title">post what you're working on</h1> 
        <div class="form-control__inputs">
            <input type="text" name="title" v-model="title" placeholder="add a title to your post"> 
            <input type="file" ref="file" @change="handleSelectedFile">
            <textarea name="caption" v-model="caption" placeholder="..and a caption" rows="5" cols="45"></textarea>
        </div>
        <div class="form-control__actions">
            <button @click="checkForm" type="submit">post</button> 
        </div>
    </div>
</template>

<script>
import PostService from '../services/PostService'
import axios from 'axios'

export default {
    data(){
        return {
            title: '',
            file: '', 
            caption: '',
            error: null,
            withError: false
        }
    },
    methods: {
        //add validation here! 
        handleSelectedFile(){

            //format = this.$refs <= all refs made on html 
                //              .file <= name of ref 
                        //            .files[0] <= get the first one 
            this.file = this.$refs.file.files[0]; 
        },
        checkForm(event){
            //check validation for title and caption 
            if(this.title && this.caption){
                //call createPost function
                this.createPost();
            }
            console.log(this.title); 
            this.withError = true; 
            this.error = [];
            if(!this.title){
                this.error.push('Title required')
            }
            if(!this.caption){
                this.error.push('Caption required')
            }
        },
        async createPost(){
            //initialze form data
            const formData = new FormData();
            formData.set('title', this.title); 
            formData.set('caption', this.caption); 
            formData.append('audio', this.file); 

            try{
                await axios.post('http://localhost:3000/posts/create', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )  
                this.withError = false; 
                this.$router.push("/feed");
            }catch(error){
                this.error = error.response.data.error; 
                this.withError = true; 
                // console.log('error with post request', error.response.data.error); 
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

.form-control{
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