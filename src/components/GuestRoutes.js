import { Content } from 'antd/es/layout/layout';
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function GuestRoutes() {
    const { authenticated } = useContext(UserContext);


    return authenticated ? <Navigate to={'/'} /> : <Content className="site-layout" ><Outlet /></Content>

}

export default GuestRoutes