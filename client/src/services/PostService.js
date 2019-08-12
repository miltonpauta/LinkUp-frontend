//This will hit the all the endpoints relating to posts, e.g ' / ' (homepage=>get all routes)

//import connection to the backend 
import Api from '@/services/Api'


//export an object that has couple of methods. CREDENTIALS will have the info like..
export default{
    // index = get all posts 
    index(){
        //make sure this hit backend at route: "localhost:3000/posts/"
        return Api().get('posts'); 
    }, 
    MyPosts(){
        return Api().get('posts/myPosts');    
    },
    deletePost(postId){
        // ?postId=${postId}
        return Api().delete(`posts/post/${postId}`);  
    }
}