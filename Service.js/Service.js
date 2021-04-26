// import React from 'react';
import axios from 'axios'
const baseUrl="https://jsonplaceholder.typicode.com/posts"

 class BlogService {

    static postApi(method,data,endPoint){
        return fetch(baseUrl+endPoint, {
            method: method || 'GET',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }) 
    }

    static getApi(url){
        return axios.get(baseUrl + url);   
    }

    static deleteApi(id){
       return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        })
    }
}

export default BlogService
