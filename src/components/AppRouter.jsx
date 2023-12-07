import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import {publicRoutes, privateRoutes} from "../router/index";
import "../router/index"
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        isAuth
            ?   <Routes>
                    <Route path="/*" element={<ErrorPage/>} />
                    {privateRoutes.map((route) => (
                        <Route element={route.component} path={route.path} exact={route.exact} key={route.id}/>))}
                </Routes>
            : <Routes>
                <Route path="/*" element={<Login/>} />
                {publicRoutes.map((route) => (
                    <Route element={route.component} path={route.path} exact={route.exact} key={route.id}/>))}
                )
            </Routes>

    );
};

export default AppRouter;
