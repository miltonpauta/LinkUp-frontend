<template>
    <div>
       <button type="submit" class="request-b">
			<font-awesome-icon icon="paper-plane" />
		</button>
        200 requests
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

.request-b{
    padding: 0 10px; 
    font-size: 25px; 
    color: white;
    cursor: pointer;

}

.request-b:hover,
.request-b:active{
    color: rgb(24, 200, 231);
}

</style>