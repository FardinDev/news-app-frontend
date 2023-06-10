import React from "react";
import { Menu } from "antd";
import { useNavigate, useNavigation } from "react-router-dom";

const LeftMenu = ({ mode, location }) => {

    const navigate = useNavigate();

    return (
        <Menu mode={mode} defaultSelectedKeys={[location]} >
            <Menu.Item key="/" onClick={() => navigate('/')}>Home</Menu.Item>
            {/* <Menu.Item key="/details" onClick={() => navigate('/details')}>Details</Menu.Item> */}
            <Menu.Item key="/favorites" onClick={() => navigate('/favorites')}>Favorites</Menu.Item>

        </Menu>
    );
};

export default LeftMenu;