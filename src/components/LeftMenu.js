import React from "react";
import { Menu } from "antd";
import { useNavigate, useNavigation } from "react-router-dom";

const LeftMenu = ({ mode, location }) => {

    const navigate = useNavigate();

    return (
        <Menu mode={mode} defaultSelectedKeys={[location]} >
            <Menu.Item key="/" onClick={() => navigate('/')}>Feed</Menu.Item>
            {/* <Menu.Item key="/details" onClick={() => navigate('/details')}>Details</Menu.Item> */}
            <Menu.Item key="/category/entertainment" onClick={() => navigate('/category/entertainment')}>Entertainment</Menu.Item>
            <Menu.Item key="/category/sports" onClick={() => navigate('/category/sports')}>Sports</Menu.Item>
            <Menu.Item key="/category/business" onClick={() => navigate('/category/business')}>Business</Menu.Item>



        </Menu>
    );
};

export default LeftMenu;