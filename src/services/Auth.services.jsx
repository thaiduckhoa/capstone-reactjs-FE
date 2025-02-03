import { apiInstance } from "../Constants/"

const api = apiInstance({
    baseURL: 'https://fiverrnew.cybersoft.edu.vn/api/auth/',
})
export const authServices= ()=>{
    signup: (payload)=>{
        return api.post('/signup', payload)
    }

}