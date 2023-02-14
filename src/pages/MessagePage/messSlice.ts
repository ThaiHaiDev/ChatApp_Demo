import { createSlice } from '@reduxjs/toolkit'

const messSlice = createSlice({
    name: 'mess',
    initialState: {
        current:  JSON.parse(localStorage.getItem('mess') || '[]'),
        settings: false
    },
    reducers: {
        addMess(state, action) {
            console.log('action.payload')
            localStorage.setItem('mess', JSON.stringify(action.payload))
        },
    },
})

export default messSlice