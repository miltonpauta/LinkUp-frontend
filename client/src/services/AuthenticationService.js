//This will hit the **** '/register', '/login' **** endpoint. 

//import connection to the backend 
import Api from '@/services/Api'


//export an object that has couple of methods. CREDENTIALS will have the info like..
export default{
    register(credentials){
        // basically ---> axios.post('http://localhost:3000/register)
        return Api().post('register', credentials)
    },
    login(credentials){
        return Api().post('login', credentials)
    }
}