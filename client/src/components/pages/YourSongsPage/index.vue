<template>
    <div id="feedPage">

        <!-- work on this form later, make a panel that displays all shit using data in mongodb  -->
        <div v-if="$store.state.isUserLoggedIn" class="link-to-create-post">
            <button @click="$router.push('create')">
                Click to Create Post
                <font-awesome-icon icon="plus" style="color:rgb(255,127,80)"/>
            </button>
        </div>

        <div class="feed-section">
			<div class="feed-section__title"></div>
            <!-- note: if data u passing down u plan to modify,etc make sure its primitive(like a string, look into it more) -->
            <DisplayPosts v-bind:posts="posts"></DisplayPosts>
		</div>
    </div>
</template>

<script>
import PostService from '../../../services/PostService' 
import DisplayPosts from '../../shared/utils/DisplayPosts'

export default {
    name: 'YourSongsPage',
    data(){
        return {
            // this will be posts returned from backend (in a array)
            posts: null,
            // isAdmin: null
        }
    }, 
    async created(){

        //do a request to the backend for posts belong to session user
        const response = await PostService.MyPosts()
        this.posts = response.data.posts; 
    },
    components: {
        DisplayPosts
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.link-to-create-post{
    text-align: center;
}

.link-to-create-post button{
    color: rgb(255,127,80); 
    border-radius: 3px;
    padding: 4px;
    font: inherit;
}

.feed-section{
	font-family: 'Questrial', sans-serif;
	width: 100%; 
	background-color: white; 
	color: white; 
	margin-top: 50px;
}

.feed-section__title{
	margin: 40px 40px;
	background-color: orange;
	text-align: center; 
}

</style>