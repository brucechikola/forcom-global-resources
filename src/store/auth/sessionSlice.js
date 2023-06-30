import { createSlice } from '@reduxjs/toolkit'
export const sessionSlice = createSlice({
    name: 'auth/session',
    initialState: {
        token: '',
        signedIn: false,
        roles: ['admin', 'manager', 'accountant'],
    },
    reducers: {
        onSignInSuccess: (state, action) => {
            state.signedIn = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        onSignOutSuccess: (state) => {
            state.signedIn = false
            state.token = ''
            state.roles = []
        },
        setToken: (state, action) => {
            state.token = action.payload.token
        },
        setRoles: (state, action) => {
            state.user = action.payload
        }
    },
})

export const {
    onSignInSuccess,
    onSignOutSuccess,
    setToken,
    setRoles
} = sessionSlice.actions

export default sessionSlice.reducer