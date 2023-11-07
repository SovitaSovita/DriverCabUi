import { API, API_HEADER } from "../Constants"

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const get_tourType = async () => {
    try {
        const response = await API.get(`/tours`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const add_tourType = async (newRow, fileImg) => {
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('title', newRow.title);
        formData.append('description', newRow.description);

        const response = await API_HEADER.post(`/tour`, formData, config)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const update_tourType = async (updateRow, fileImg, id) => {
    console.log(updateRow)
    console.log(fileImg)
    console.log(id)
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('id', id);
        formData.append('title', updateRow.title);
        formData.append('description', updateRow.description);

        const response = await API_HEADER.put(`/updatetour`, formData, config)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const delete_tourType = async (id) => {
    try {
        const response = await API_HEADER.delete(`/deletetour/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}