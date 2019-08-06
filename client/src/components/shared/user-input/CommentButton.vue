<template>
    <div>
       <button type="submit" class="comment-b">
			<font-awesome-icon icon="comments" />
		</button>
        39 comments
    </div>
</template>

<script>


export default {
    data(){
        return {
			
        }
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
    margin: 0 10px; 
    display:inline-block; 
}

button{
    background-color:  rgb(255,127,80);
    border: none; 
}

.comment-b{
    padding: 0 10px; 
    font-size: 25px; 
    color: white;
    cursor: pointer;

}

.comment-b:hover,
.comment-b:active{
    color: rgb(22, 238, 22); 
}

</style>