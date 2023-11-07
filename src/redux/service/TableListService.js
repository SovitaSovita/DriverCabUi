import { API, API_HEADER } from "../Constants"

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const get_popular = async () => {
    try {
        const response = await API.get(`/populartours`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const get_popularById = async (id) => {
    try {
        const response = await API.get(`/populartours/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const add_popular = async (newRow, fileImg) => {
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('title', newRow.title);
        formData.append('duration', newRow.duration);
        formData.append('price', newRow.price);

        const response = await API_HEADER.post(`/populartours`, formData, config)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const update_popular = async (updateRow, fileImg, id) => {
    console.log(updateRow)
    console.log(fileImg)
    console.log(id)
    try {
        const formData = new FormData();
        formData.append('imageFile', fileImg);
        formData.append('id', id);
        formData.append('title', updateRow.title);
        formData.append('duration', updateRow.duration);
        formData.append('price', updateRow.price);

        const response = await API_HEADER.put(`/updatepopulartours`, formData, config)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const delete_popular = async (id) => {
    try {
        const response = await API_HEADER.delete(`/deletepopulartours/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const upload_excel = async (formData) => {
    try {
        const response = await API_HEADER.post(`/info/file-upload`, formData)
        return response
    }
    catch (e){
        console.log(e)
    }
}

export const insert_winner = async (formData) => {
    try {
        const response = await API_HEADER.post(`/info/insert-winner-information`, formData)
        return response
    }
    catch (e){
        console.log(e)
    }
}

export const reset_customer = async () => {
    try {
        const response = await API_HEADER.delete(`/api/v1/info/reset-customer-imformation`)
        return response
    }
    catch (e){
        console.log(e)
    }
}

export const get_fake_winner = async () => {
    try {
        const response = await API_HEADER.get(`/api/v1/info/getFakeWinner`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const insert_fake_winner = async (fake) => {
    try {
        const response = await API_HEADER.post(`/api/v1/info/FakeWinner`, fake)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const delete_fake_winner = async () => {
    try {
        const response = await API_HEADER.delete(`/api/v1/info/reset-fake-winner`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
