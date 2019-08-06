<template>
    <div>
        <button type="submit" class="like-b">
			<font-awesome-icon icon="thumbs-up" />
		</button>
        <!-- will be passed down by props -->
        1000 likes 
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

.like-b{
    padding: 0 10px; 
    font-size: 25px; 
    color: white;
    cursor: pointer;

}

.like-b:hover,
.like-b:active{
    color: yellow;
}

</style>