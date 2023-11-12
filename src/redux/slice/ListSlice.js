import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listPopular: [],
    listTourType: [],
    listSlide: [],
    listOffer: [],
    isGet: false,
}

export const ListSlice = createSlice({
    name : 'customerList',
    initialState,
    reducers : {
        setListPopular : (state, action) => {
        // console.log("action.payload", action.payload)
           state.listPopular = action.payload
        },
        setListTourType : (state, action) => {
           state.listTourType = action.payload
        },
        setListSlide : (state, action) => {
           state.listSlide = action.payload
        },
        setListOffer : (state, action) => {
           state.listOffer = action.payload
        },
        setIsGet : (state, action) => {
           state.isGet = action.payload
        },
    },
})

export const {setListPopular, setListTourType, setListSlide, setListOffer, setIsGet} = ListSlice.actions
export default ListSlice.reducer