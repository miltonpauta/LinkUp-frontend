<template>
    <div id="feedPage">
        <!-- work on this form later, make a panel that displays all shit using data in mongodb  -->
        <!-- <PostForm></PostForm> -->
        <div class="feed-section">
			<div class="feed-section__title">
				<!-- Feed Page!  -->
			</div>
			<article v-for="post in posts" v-bind:key="post._id" class="feed-post">
				<div class="post-title">
					<label for="title">
                        {{post.title}}
                    </label>
				</div>
				<div class="post-audio">
					<label for="audio">Link to song is......     
                         {{post.audioSrc}}
                    </label>
				</div>
				<div class="post-user">
					<div class="post-user__email">
                        thiswillsoonbeusername@gmail.com
                    </div>
				</div>
				<!-- will add functionality to post comments! -->
				<div class="post-actions">
					<div class="post-buttons">
						<!-- also add "button" class to button! (thats already made in the app)-->
						<button class="like-b">like post</button>
						<button class="request-b">send request</button>
						<button class="comments-b">see comments</button>
					</div>
				</div>
				<div class="post-caption">
					<label for="caption">
						{{post.caption}}
					</label>
				</div>
			</article>
		</div>
    </div>
</template>

<script>
import PostService from '../services/PostService' 

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
        // PostForm
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.feed-post {
	margin: 100px 300px;
	border: 15px solid rgb(255,127,80); 
	border-radius: 5px;
}

.post-title{
	padding: 20px;
	text-align: center;
	color: black;
	border-bottom: 10px solid rgb(255,127,80);
	background-color: rgb(255,127,80); 
}

.post-title label{
	padding: 20px;
	background-color: white;
	border-radius: 2px;
}

.post-audio{
	height: 200px;
	padding: 20px;
	color: black; 
	border-bottom: 15px solid rgb(255,127,80);
}

.post-user{
	padding: 15px 20px; 
	background-color: rgb(255,127,80); 
	color:white;
}

.post-user__email{
	width: 300px;
	color: black;
	font-weight: bold;
}

.post-actions{
	background-color: rgb(255,127,80); 
}

.post-buttons{
	padding: 10px 20px;
	/*margin-left: 1px; */
	/*background-color: rgb(255,127,80);*/
	background-color: rgb(169,169,169);
	border-top-right-radius: 2px;
	border-top-left-radius: 2px;
	display: inline-block;
}

.post-buttons button{
	/*display: inline-block;*/
	margin: 0 25px;
	font: inherit;
	font-size: 12px;
}

.post-caption{
	/*background-color: rgb(255,127,80); */
	background-color: white; 
	padding: 20px; 
	color: black;
	border-radius: 3px;
}

</style>