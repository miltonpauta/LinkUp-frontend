<template>
    <div id="feedPage">
        <!-- work on this form later, make a panel that displays all shit using data in mongodb  -->
        <div class="link-to-create-post">
            <button @click="$router.push('create')">Click to Create Post</button>
        </div>

        <div class="feed-section">
			<div class="feed-section__title">
				<!-- Feed Page!  -->
			</div>
            <!-- call component to display posts, passdown posts! -->
            <DisplayPosts v-bind:posts="posts"></DisplayPosts>
		</div>
    </div>
</template>

<script>
import PostService from '../services/PostService' 
import DisplayPosts from '../components/DisplayPosts'

export default {
    name: 'feedPage',
    data(){
        return {
            // this will be posts returned from backend (in a array)
            posts: null
        }
    }, 
    async mounted(){
        //do a request to the backend for ALL the posts
        const response = await PostService.index()
        this.posts = response.data.allPosts
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