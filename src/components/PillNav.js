import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



function RenderButton({ path, title }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return <Button size='small' key={path} shape={'round'} type={pathname === path ? 'primary' : null} onClick={() => navigate(path)}>{title}</Button>
}
function PillNav() {

    const [size] = useState(20)

    return (
        <div className='pill-nav'>
            <Space size={size}>
                <RenderButton path={'/'} title={'Feed'} />
                <RenderButton path={'/category/favorites'} title={'Entertainment'} />
                <RenderButton path={'/category/sports'} title={'Sports'} />
                <RenderButton path={'/category/business'} title={'Business'} />
            </Space>
        </div>
    )
}

export default PillNav