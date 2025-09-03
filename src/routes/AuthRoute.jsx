import React from 'react';
import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const AuthRoute = ({children}) => {
    const isAuth = useAuth();
    return isAuth ? children : <Navigate to="/login" />;
}

export default AuthRoute;
