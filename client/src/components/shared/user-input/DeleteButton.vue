<template>
    <div>
       <button type="submit" class="delete-b">
			<font-awesome-icon icon="trash" />
		</button>
    </div>
</template>

<script>

// pass down a delete function as a prop! 
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

.delete-b{
    padding: 0 10px; 
    font-size: 25px; 
    color: white;
    cursor: pointer;

}

.delete-b:hover,
.delete-b:active{
    color: red;
}

</style>