import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../pages/SigninPage/userSlice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>