import axios, {AxiosInterceptorManager, InternalAxiosRequestConfig}  from "axios";

const axiosInstance = axios.create()
const TOKEN_CYBERSOFT ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNDgiLCJIZXRIYW5TdHJpbmciOiIxNi8wOC8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NTUzMDI0MDAwMDAiLCJuYmYiOjE3MzU5MjM2MDAsImV4cCI6MTc1NTQ1MDAwMH0.qhz1imNFTn5VsERO5GZAfbkm944w0Vguuy5WQFo_d0Y'


export const apiInstance = (setting) => {
    //apiInstance
    axiosInstance.interceptors.request((config)=>{
        return{
            ...config,
            ...setting,
            tokenCybersoft: TOKEN_CYBERSOFT

        }


    })
    return axiosInstance

}