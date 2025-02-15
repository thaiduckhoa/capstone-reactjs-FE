import { apiInstance } from "../Constants/";

const api = apiInstance({
    baseURL: 'https://fiverrnew.cybersoft.edu.vn/api/auth/',
});

export const authServices = {
    Register: async (payload) => {
        try {
            const response = await api.post('/signup', payload);
            return response;
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    },
    Login: async (payload) => {
        try {
            const response = await api.post('/signin', payload);
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
};
