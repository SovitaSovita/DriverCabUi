import { API } from "../Constants"

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