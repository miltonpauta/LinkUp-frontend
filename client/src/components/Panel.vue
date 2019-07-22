<template>
    <div class="feed-section">
			<div class="feed-section__title">
				{{sectionTitle}}
			</div>
			<article class="feed-post">
				<div class="post-title">
					<label for="title">this is title of post?</label>
				</div>
				<div class="post-audio">
					<label for="audio">this is where audio is displayed</label>
				</div>
				<div class="post-user">
					<div class="post-user__email">thiswillsoonbeusername@gmail.com</div>
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
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</label>
				</div>
			</article>
		</div>
</template>

<script>

export default {
    props: [
        'sectionTitle'
    ]
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
	background-color: gray;
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