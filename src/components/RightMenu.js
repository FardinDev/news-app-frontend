import React, { useContext } from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { UserContext } from "../context/UserContext";
import SubMenu from "antd/es/menu/SubMenu";
import { useNavigate } from "react-router-dom";
import userActions from "../helpers/userActions";

const RightMenu = ({ mode }) => {
    const { authenticated, token, setToken, setAuthenticated, authLoading, user } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <Menu mode={mode}>
            {authLoading ? <></> : <>
                {authenticated ? <SubMenu
                    key={'first-submenu'}
                    title={
                        <>
                            <Avatar icon={<UserOutlined />} />
                            <span className="username">{user?.fullName}</span>
                        </>
                    }
                >
                    <Menu.Item key="log-out" onClick={() => {
                        userActions.logOut(token).then(res => {
                            if (res) {
                                setToken(null);
                                setAuthenticated(false);
                            }
                        })
                    }}>
                        <LogoutOutlined /> Logout
                    </Menu.Item>
                </SubMenu>
                    :

                    <Menu.Item key="log-out">
                        <Menu.Item key="/sign-in" onClick={() => navigate('/sign-in')}>Sign in</Menu.Item>
                    </Menu.Item>
                }
            </>}


        </Menu>
    );
};

export default RightMenu;