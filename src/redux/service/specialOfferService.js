import { API, API_HEADER } from "../Constants"

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const get_specialOffer = async () => {
    try {
        const response = await API.get(`/specialOffers`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}
export const get_specialOfferById = async () => {
    try {
        const response = await API.get(`/specialOffers`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const delete_specialOffer = async (id) => {
    try {
        const response = await API_HEADER.delete(`/deleteOffer/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const add_specialOffer = async (values, descriptions, fileImg) => {
    console.log(fileImg)
    try {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('duration', values.duration);
        formData.append('price', values.price);

        // Handle descriptions array
        formData.append('description', descriptions);

        // Handle imgList array
        fileImg.forEach((element, index) => {
            formData.append('imgList', element);
        });

        const response = await API_HEADER.post(`/specialOffer`, formData, config)
        return response
    }
    catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response Data:', error.response.data);
            console.error('Response Status:', error.response.status);
            console.error('Response Headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error during request setup:', error.message);
        }
    }
}


export const update_specialOffer = async (values, id) => {
    try {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', values.title);
        formData.append('duration', values.duration);
        formData.append('price', values.price);

        const response = await API_HEADER.put(`/updateOffer`, formData)
        return response
    }
    catch (error) {
        console.log(error)
    }
}