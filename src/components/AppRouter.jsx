import React from 'react';
import {Route, Routes} from "react-router-dom";
import Training from "./pages/Training/training";
import Users from "./pages/Users/users";
import Login from "./pages/login";

import Text from "./pages/Text/Text"


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Text />} />

            <Route path="/Text" element={<Text />} />
            <Route path="/training" element={<Training />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRouter;