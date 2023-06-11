import { Outlet, Link, useLocation } from "react-router-dom";
import { Layout as AntLayout, Button, Col, Divider, Drawer, Dropdown, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Content, Header } from "antd/es/layout/layout";
import DateTime from "./DateTime";
import SearchBar from "./SearchBar";
import PillNav from "./PillNav";

const Layout = () => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };

    let { pathname: location } = useLocation();
    useEffect(() => {
        setVisible(false);
    }, [location]);

    const items = [
        {
            key: '1',
            label: 'Item 1',
        },
        {
            key: '2',
            label: 'Item 2',
        },
        {
            key: '3',
            label: 'Item 3',
        },
    ];
    return (
        <Content>

            <AntLayout>
                <Header className="nav-header" >
                    <div className="logo">
                        <label style={{ color: 'black', fontSize: 18, fontWeight: '900', fontFamily: 'sans-serif' }}>My News App</label>
                    </div>
                    <div className="navbar-menu">
                        <div className="leftMenu">
                            <DateTime />
                            {/* <LeftMenu mode={"horizontal"} location={location} /> */}
                        </div>
                        <Button className="menuButton" type="text" onClick={showDrawer}>
                            <MenuOutlined />
                        </Button>
                        <div className="rightMenu hide-on-mobile">
                            <SearchBar />
                            <RightMenu mode={"horizontal"} location={location} />
                        </div>

                        <Drawer

                            placement="right"
                            closable={true}
                            open={visible}
                            onClose={showDrawer}
                            style={{ zIndex: 99999 }}
                            extra={
                                <Space>
                                    <SearchBar />
                                </Space>
                            }

                        >

                            <LeftMenu mode={"inline"} location={location} />
                            <RightMenu mode={"inline"} location={location} />

                        </Drawer>
                    </div>
                </Header>
            </AntLayout>
            <Content className="site-layout" >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}

                >

                    <div className="hide-on-mobile"><PillNav /></div>
                    <div>  <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['3'],
                        }}
                    >
                        <Button size={'small'} shape={'round'} type="primary">
                            <Space>
                                Filter Feed
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown></div>

                </div>


            </Content>
            <Content className="site-layout" >
                {/* <Divider style={{ margin: 0 }} /> */}
                <Outlet />
            </Content>

        </Content>
    )
};

export default Layout;