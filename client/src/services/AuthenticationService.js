//This will hit the '/register' endpoint. 

//import connection to the backend 
import Api from '@/services/Api'


//export an object that has couple of methods. CREDENTIALS will have the info like..
export default{
    register(credentials){
        // basically ---> axios.post('http://localhost:3000/register)
        return Api().post('register', credentials)
    }
}

//we will call this route with something like..
//          AuthenticationService.register({
//              email: 'testing@gmail.com', <--- CREDENTIALS
//              password: '123456'          <---
//          })