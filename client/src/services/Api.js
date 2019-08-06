// this file basically makes a connector that connects to the backend

import axios from 'axios'

// below function returns the connector to the backend api
export default ()=>{
    return axios.create({
        baseURL: `http://localhost:3000/`,
        headers: {
            // 'Authorization': '1234', <=== add this header to specific routes soon 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } 
    })
}