import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://178.128.52.39:8080'
})

instance.interceptors.request.use(
    config => {
        var token = localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
            config.headers['Content-Type'] = 'application/json';
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)