import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    registration_stage: 1,
}
export const careerSlice = createSlice({
    name: 'careerSlice',
    initialState,
    reducers: {
        setRegistrationStage: (state, action) => {
            state.registration_stage = action.payload
        }
    }
})
export const { setRegistrationStage } = careerSlice.actions
export default careerSlice.reducer