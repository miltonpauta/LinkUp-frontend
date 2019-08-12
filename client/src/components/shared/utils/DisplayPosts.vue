<template>
    <div id="postDisplay">
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
				<div class="post-middle-section">
					<div class="post-user">
						<div class="post-username">
							Created By : {{post.creatorName}}
						</div>
					</div>
					<div class="post-actions">
						<div class="post-buttons">
							<!-- also add "button" class to button! (thats already made in the app)-->
							<Like-Button></Like-Button>
							<Request-Button></Request-Button>
							<Comment-Button></Comment-Button>
							<!-- There may be times when you want to listen directly to a native event on the root element of a component.  -->
							<Delete-Button @click.native="deletePost(post._id)"></Delete-Button>
						</div>
					</div>
				</div>
				<div class="post-caption">
					<label for="caption">
						{{post.caption}}
					</label>
				</div>
		</article>
    </div>
</template>

<script>
import PostService from '../../../services/PostService'
import DeleteButton from '../user-input/DeleteButton'
import LikeButton from '../user-input/LikeButton'
import RequestButton from '../user-input/RequestButton'
import CommentButton from '../user-input/CommentButton'

export default {
    props: ['posts'],
    data(){
        return {
			
        }
	},
	computed: {
		
	},
	methods:{
		async deletePost(postId){
			//sends delete request to backend! 
			const response = await PostService.deletePost(postId); 
		} 
	},
	components: {
		DeleteButton,
		LikeButton,
		RequestButton,
		CommentButton
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

.post-middle-section{
	background-color: rgb(255,127,80); 
}

.post-user{
	padding: 20px 0;
	margin-left: 20px; 
	display: inline-block;
	color:white;
}

.post-username{
	color: white;
	font-weight: bold;
}

.post-actions{
	padding: 20px 0;
	margin: 0 25px;
	display: inline-block;
}

.post-buttons{
	border-top-right-radius: 2px;
	border-top-left-radius: 2px;
	display: inline-block;
}

.post-caption{
	border-top: 15px solid rgb(255,127,80); 
	/*background-color: rgb(255,127,80); */
	background-color: white; 
	padding: 20px; 
	color: black;
	border-radius: 3px;
}

</style>