import { createSlice } from '@reduxjs/toolkit'
import { cvData } from 'mock/data'

export const initialState = {
    userData: {
        first_name: cvData.first_name,
        last_name: cvData.last_name,
        email: cvData.email,
        dp: cvData.dp,
        profession: cvData.profession
    }
}

export const userSlice = createSlice({
    name: 'auth/user',
    initialState,
    reducers: {
        setUserData: (state, action) => action.payload,
        userLoggedOut: () => initialState,
    },
})
export const { setUserData } = userSlice.actions
export default userSlice.reducer