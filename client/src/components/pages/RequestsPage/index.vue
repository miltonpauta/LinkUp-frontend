<template>
    <div class="container">
        <div class="card">
            <div class="card-block">
                <h4 class="card-title"> request made at : 3.23.19 @ 2:33am  -   </h4>
                <h6 class="card-subtitle mb-2 text-muted"> 
                    <a href="#" class="card-link profile-link">
                        Max Danger 
                    </a>
                </h6>
                <a href="#" class="card-link post-link"> See Post </a>
                <a href="#" class="card-link message-link"> Message Max! </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.card{
    background-color: rgb(255,127,80); 
    border-radius: 3px; 
    padding: 20px; 
    margin: 5px; 
}

.post-link,
.card-title, 
.card-subtitle,
.message-link{
    display: inline-block; 
}

.card-subtitle{
    font-size:10px; 
    margin: 4px; 
}

.post-link,
.message-link{
    font-size: 17px; 
    position: relative;
    left: 400px; 
}

.post-link{
    margin:20px;
}

.message-link{
    margin-right: 0; 
}

.card-subtitle{
    font-size: 15px; 
}

.profile-link{
    color: white; 
    font-size: 17px; 
}

a:hover,
a:active{
    text-decoration: none; 
    font-weight: bolder; 
}
</style>