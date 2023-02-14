import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current:  JSON.parse(localStorage.getItem('user') || '{}'),
        settings: false
    },
    reducers: {
        signin(state, action) {
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout(state) {
            localStorage.removeItem('user')
            state.current = {}
        },
    },
})

export default userSlice