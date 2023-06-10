import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function ProtectedRoutes() {
    const { authenticated } = useContext(UserContext);


    return authenticated ? <Outlet /> : <Navigate to={'/sign-in'} />

}

export default ProtectedRoutes