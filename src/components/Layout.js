import { Outlet, Link, useLocation } from "react-router-dom";
import { Layout as AntLayout, Button, Drawer } from "antd";
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Content, Header } from "antd/es/layout/layout";

const Layout = () => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    let { pathname: location } = useLocation();
    useEffect(() => {
        setVisible(false);
    }, [location]);
    return (
        <>
            <nav className="navbar">
                <AntLayout>
                    <Header className="nav-header">
                        <div className="logo">
                            <label style={{ color: 'black', fontSize: 18 }}>My News App</label>
                        </div>
                        <div className="navbar-menu">
                            <div className="leftMenu">
                                <LeftMenu mode={"horizontal"} location={location} />
                            </div>
                            <Button className="menuButton" type="text" onClick={showDrawer}>
                                <MenuOutlined />
                            </Button>
                            <div className="rightMenu">
                                <RightMenu mode={"horizontal"} location={location} />
                            </div>

                            <Drawer
                                title={"Brand Here"}
                                placement="right"
                                closable={true}
                                open={visible}
                                onClose={showDrawer}
                                style={{ zIndex: 99999 }}
                            >
                                <LeftMenu mode={"inline"} location={location} />
                                <RightMenu mode={"inline"} location={location} />
                            </Drawer>
                        </div>
                    </Header>
                </AntLayout>
            </nav>
            <Content className="site-layout" >
                <Outlet />
            </Content>

        </>
    )
};

export default Layout;