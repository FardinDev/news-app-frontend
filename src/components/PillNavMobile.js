import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function PillNavMobile() {

    const { pathname } = useLocation();
    const [currentNav, setCurrentNav] = useState(null)
    const navigate = useNavigate();
    const [size] = useState(20)

    const navItems = [
        {
            key: '/',
            label: 'Feed',
        },
        {
            key: '/category/entertainment',
            label: 'Entertainment',
        },
        {
            key: '/category/sports',
            label: 'Sports',
        },
        {
            key: '/category/business',
            label: 'Business',
        },
    ];

    useEffect(() => {

        setCurrentNav(navItems.filter(item => item.key === pathname))
    }, [pathname])




    return (
        <div className='pill-nav'>
            <Dropdown
                arrow
                menu={{
                    items: navItems,
                    selectable: true,
                    defaultSelectedKeys: [pathname],
                    onClick: ({ keyPath }) => {
                        console.log('================key====================');
                        console.log(keyPath);
                        console.log('================key====================');
                    }
                }}
            >
                <Button size={'small'} shape={'round'} type="primary">
                    <Space>
                        {currentNav?.label}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    )
}

export default PillNavMobile