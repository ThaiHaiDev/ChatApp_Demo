// Library
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MessagePage from '../pages/MessagePage/MessagePage';
import SigninPage from '../pages/SigninPage/SigninPage';

const SetupRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense>
                        <MessagePage />
                    </React.Suspense>
                }
            />
             <Route
                path="/:idMess"
                element={
                    <React.Suspense>
                        <MessagePage />
                    </React.Suspense>
                }
            />
            <Route
                path="/signin"
                element={
                    <React.Suspense>
                        <SigninPage />
                    </React.Suspense>
                }
            />
        </Routes>
    );
};

export default SetupRouter;
