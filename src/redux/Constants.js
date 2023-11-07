import axios from "axios"
import { toast } from "react-hot-toast"
import { Navigate } from "react-router-dom";

//export const BASE_URL = `http://16.170.232.28:8080`
export const BASE_URL = `http://localhost:8080/api/v1`
export const BASE_URL_UnAuth = `http://localhost:8080`

export const token = localStorage.getItem("token");

export const API_HEADER = axios.create({
    baseURL: BASE_URL,
})

API_HEADER.interceptors.request.use(
    config => {
        var token = localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

API_HEADER.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("error", error.response.status)
        if (error.response && error.response.status === 401) {
            alert("Token has expire Please Login again.")
            localStorage.removeItem("token");
            window.location.pathname = "/login"
            return Promise.resolve({ ...error.response, status: 401 })
        }
        return Promise.reject(error);
    }
)

export const API = axios.create({
    baseURL: BASE_URL,
})

export const notifySuccess = (e) => {
    toast.success(e);
}
export const notifyError = (e) => {
    toast.error(e);
}