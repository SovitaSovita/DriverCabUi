import { API, API_HEADER } from "../Constants"

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const get_slider = async () => {
    try {
        const response = await API.get(`/sliders`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const add_slider = async (newRow, fileImg) => {
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('title', newRow.title);

        const response = await API_HEADER.post(`/slider`, formData, config)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const update_slider = async (updateRow, fileImg, id) => {
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('id', id);
        formData.append('title', updateRow.title);

        const response = await API_HEADER.put(`/updateSlider`, formData, config)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const delete_slider= async (id) => {
    try {
        const response = await API_HEADER.delete(`/deleteSlider/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}