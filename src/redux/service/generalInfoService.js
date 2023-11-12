import { API, API_HEADER } from "../Constants"

export const get_footer = async () => {
    try {
        const response = await API.get(`/footer`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const get_generalinfo = async () => {
    try {
        const response = await API.get(`/generalinfo`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const get_desciptionInfo = async () => {
    try {
        const response = await API.get(`/description`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const update_FooterInfo = async (req) => {
    try {
        const response = await API_HEADER.put(`/updatefooter`,req)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const update_descriptionInfo = async (req) => {
    try {
        const response = await API_HEADER.put(`/updatedescription`,req)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const update_generalInfo = async (req, fileImg) => {
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('timeWork ', req.timeWork );
        formData.append('description ', req.description );

        const response = await API_HEADER.put(`/updateInfo`,formData)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

