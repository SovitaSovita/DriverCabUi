import { Navigate, Route } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const Protected = ({children}) => {
    // const islogin = useSelector((state) => state.auth.isLogin)

    // if (!islogin) {
    //     return <Navigate replace to="/login" />;
    // } else {
    //     return children;
    // }
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                // Token has expired, redirect to login
                console.log("date expire")
                return <Navigate to="/login" />;
            }
        } catch (error) {
            console.log("date error")
            // Invalid token, redirect to login
            return <Navigate to="/login" />;
        }
    } else {
        // No token found, redirect to login
        console.log("toke not found")

        return <Navigate to="/login" />;
    }

    // Token is valid, render the protected route
    console.log("children")
    return children;
}

export default Protected;
