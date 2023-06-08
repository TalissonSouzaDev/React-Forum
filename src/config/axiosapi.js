import axios from 'axios'


const axiosapi = axios.create({
    baseURL:"http://localhost:8000/api"
});

axiosapi.interceptors.request.use((config)=>{
   const token = localStorage.getItem('Acess_token')

   if(token){
   
    config.headers.Authorization = `Bearer ${token}`;

   }
   config.headers.Accept = 'application/json'

    return config
})


export default axiosapi

