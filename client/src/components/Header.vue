<template>
    <header class="main-header">
		<div class="main-header__brand">
			<router-link to="/feed" class="button">LinkUp</router-link>
		</div>
		<nav class="main-nav">
			<ul class="main-nav__items">
				<li class="main-nav__item">
                    <router-link to="feed" class="button">feed</router-link>
				</li>
				<li class="main-nav__item">
                    <router-link to="requests" class="button">requests</router-link>
				</li>
				<li class="main-nav__item">
                    <router-link to="songs" class="button">your songs</router-link>
				</li>
				<li class="main-nav__item">
                    <router-link to="messages" class="button">messages</router-link>
				</li> 
                <li class="main-nav__item">
                    <router-link to="login" class="button">login</router-link>
				</li> 
                 <li class="main-nav__item">
                     <!-- will go to router page and find a router NAMED "register" which u did make -->
                    <router-link to="register" class="button">sign up</router-link>
				</li> 
			</ul>
		</nav>
	</header>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header{
    width:100%; 
    margin-bottom: 60px; 
	font-family: 'Questrial', sans-serif;
	background-color: rgb(255,127,80); 
	padding: 35px 0 0 0; 
	height: 100px; 
}

.main-header__brand{
	color: white; 
	font-size: 40px; 
	display: inline-block;
	margin-right: 5px; 
	margin-left: 30px; 
}

.main-header__brand a{
	text-decoration: none; 
    color: white;
    font-weight: bolder; 
}
.main-nav{
	margin-left:500px; 
	/*padding-top: 25px; */
	display: inline-block;
}

.main-nav__items{
	margin-left: 0; 
	padding: 0; 
} 

.main-nav__item{
	display: inline-block; 
	margin: 0 1rem 0 1rem; 
	font-size: 25px; 
}

.main-nav__item a{
    padding: 3px; 
	text-decoration: none; 
	color: white;
}

</style>