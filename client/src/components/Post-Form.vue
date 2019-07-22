<template>
    <div class="form-control"> 
        <div v-if="withError" class="error" v-html="error"/>
        <h1 class="form-title">post what you're working on</h1> 
        <div class="form-control__inputs">
            <input type="text" name="title" v-model="title" placeholder="add a title to your post"> 
            <input type="file" name="audio">
            <!-- <input type="text" name="caption" v-model="caption" placeholder="..and a caption">  -->
            <textarea name="caption" v-model="caption" placeholder="..and a caption" rows="5" cols="45"></textarea>
        </div>
        <div class="form-control__actions">
            <button @click="createPost" type="submit">post</button> 
        </div>
    </div>
</template>

<script>

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