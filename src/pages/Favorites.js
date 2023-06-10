import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react'

function Favorites() {
    const [width, setWidth] = useState(window.innerWidth);

    const [tabPosition, setTabPosition] = useState('left');
    const [tabItems, setTabItems] = useState([
        {
            key: 'all',
            label: 'All'
        },
        {
            key: 'authors',
            label: 'Authors'
        },
        {
            key: 'categories',
            label: 'Categories'
        },
        {
            key: 'channels',
            label: 'Channels'
        },
    ]);

    const isMobile = width <= 768;

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }


    const changeTab = (key) => {
        console.log('================key====================');
        console.log(key);
        console.log('================key====================');
    }

    return (
        <Tabs
            tabPosition={isMobile ? 'top' : 'left'}
            onChange={changeTab}
            centered
            items={tabItems.map((item) => {

                return {
                    label: `${item.label}`,
                    key: `${item.key}`,
                    children: `Content of Tab ${item.label}`,
                };
            })}
        />
    )
}

export default Favorites