// this file basically makes a connector that connects to the backend

import axios from 'axios'

// below function returns the connector to the backend api
export default ()=>{
    return axios.create({
        baseURL: `http://localhost:3000/`,
        headers: {
            'Authorization': '1234',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } 
    })
}

//we can hit different endpoints with this 