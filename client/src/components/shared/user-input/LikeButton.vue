<template>
    <div>
        <button class="like-b" @click="addLike">
            <i slot="icon" class="fa fa-thumbs-up" :class="{liked:isLiked}"></i>
        </button>
        <!-- amount of likes for this post will be passed down by props -->
        <div class="allLikes">
            1000 likes 
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            isLiked: false
        }
    },
    methods: {
        addLike(){
            this.isLiked = !this.isLiked; 
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
    display:inline-block; 
}

.allLikes{

}

.like-b{
    background-color: rgb(255,127,80); 
    border: none; 
    font-size: 25px; 
    color: white;
    cursor: pointer;
}

button:focus,
button:active{
    outline: none !important; 
    box-shadow: none !important; 
}

.liked{
    color: yellow; 
}


</style>