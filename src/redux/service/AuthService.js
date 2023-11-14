import { API, API_HEADER, BASE_URL_UnAuth } from "../Constants"


export const loginService = async(user) => {
    try{
        const response = await API.post(`${BASE_URL_UnAuth}/auth/login`,user);
        return response;
    }catch(e){
        return e;
    }
}
export const change_password = async(user) => {
    try{
        const response = await API_HEADER.put(`${BASE_URL_UnAuth}/auth/change-password`, user);
        return response;
    }catch(e){
        return e;
    }
}