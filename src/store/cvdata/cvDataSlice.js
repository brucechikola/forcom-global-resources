import { createSlice } from "@reduxjs/toolkit";
import { cvData as cv } from "mock/data";
const initialState = {
    cvData: cv,
}
export const cvData = createSlice({
    name: 'cvData',
    initialState,
    reducers: {
        setCVData: (state, action) => {
            state.cvData = action.payload
        }
    }
})
export const { setCVData } = cvData.actions
export default cvData.reducer