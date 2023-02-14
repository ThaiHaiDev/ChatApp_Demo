import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../pages/SigninPage/userSlice';
import messSlice from '../pages/MessagePage/messSlice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        mess: messSlice.reducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>