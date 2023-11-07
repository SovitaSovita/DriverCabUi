import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    footerInfo: {},
    generalInfo: {},
    decripInfo: {},
};


export const LoadingSlice = createSlice({
  name: "LoadingSlice",
  initialState,
  reducers: {
    setLoading: (state,action) => {
        state.value = action.payload;
    },
    setFooterInfo: (state, action) => {
      state.footerInfo = action.payload
    },
    setGeneralInfo: (state, action) => {
      state.generalInfo = action.payload
    },
    setDescripInfo: (state, action) => {
      state.decripInfo = action.payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { setLoading, setFooterInfo, setGeneralInfo, setDescripInfo} = LoadingSlice.actions

export default LoadingSlice.reducer;