// this file basically makes a connector that connects to the backend

import axios from 'axios'
import store from '@/store/store'
// below function returns the connector to the backend api
export default ()=>{
    return axios.create({
        baseURL: `http://localhost:3000/`,
        headers: {
            'Authorization':`Bearer ${store.state.token}`, 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}