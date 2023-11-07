import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listPopular: [],
    listTourType: [],
    listSlide: [],
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
        // console.log("action.payload", action.payload)
           state.listTourType = action.payload
        },
        setListSlide : (state, action) => {
        // console.log("action.payload", action.payload)
           state.listSlide = action.payload
        },
        setIsGet : (state, action) => {
           state.isGet = action.payload
        },
    },
})

export const {setListPopular, setListTourType, setListSlide, setIsGet} = ListSlice.actions
export default ListSlice.reducer