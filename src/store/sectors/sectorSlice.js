import { createSlice } from "@reduxjs/toolkit";
import sectors from 'constants/sectors.json';
const initialState = {
    sectors: sectors,
    selected_sector: sectors[3],
}
export const sectorSlice = createSlice({
    name: 'sectorSlice',
    initialState,
    reducers: {
        setSelectedSector: (state, action) => {
            state.selected_sector = action.payload
        }
    }
})
export const { setSelectedSector } = sectorSlice.actions
export default sectorSlice.reducer