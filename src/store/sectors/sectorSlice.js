import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sectors: [
        {
            title: 'Engineering'
        },
        'Finance & accounting',
        'Construction',
        'Agriculture & food production',
        'Production & supply chain',
        'Veterinary services',
        'Mining and gemstone industry',
        'Global Market Agency & trade Management',
        'Education'
    ],
    currentSelector: '',
}
export const sectorSlice = createSlice({
    name: 'sectorSlice',
    initialState,
    reducers: {
        setRegistrationStage: (state, action) => {
            state.registration_stage = action.payload
        }
    }
})
export const { setRegistrationStage } = sectorSlice.actions
export default sectorSlice.reducer