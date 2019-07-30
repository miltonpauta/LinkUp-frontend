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
				<div class="post-user">
					<div class="post-user__email">
                        {{post.creatorName}}
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
</template>

<script>

export default {
    props: ['posts'],
    data(){
        return {
			fullName: ''
        }
	},
	computed: {
		fullName(){
			return this.posts.firstName + ' ' + this.posts.lastName
		}
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