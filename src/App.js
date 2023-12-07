import React, {useEffect, useState} from 'react'

import '../src/styles/app.css'
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        //Проверяем состояние авторизации, вошли ли мы
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, []);

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
