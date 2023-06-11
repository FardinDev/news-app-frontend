import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Carousel, Col, Divider, Row, Typography } from 'antd'
import Meta from 'antd/es/card/Meta';
import React from 'react'
import HomeFeedCard from '../components/cards/HomeFeedCard';
import InfiniteList from '../components/list/InfiniteList';

const { Title } = Typography;
function Home() {

    const contentStyle = {
        height: '260px',
        color: '#fff',
        lineHeight: '260px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div>
            <Title level={2}>Top News</Title>
            <Carousel autoplay effect="fade">
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>

            <Divider />

            <Title level={2}>Feed</Title>

            <Row gutter={{ xs: 32, sm: 32, md: 24, lg: 32 }}>
                <Col xs={24} sm={12} md={12} lg={18} xl={18}>
                    <InfiniteList />
                </Col>
                <Col className="gutter-row" xs={24} sm={12} md={12} lg={6} xl={6}>
                    <HomeFeedCard />
                </Col>

            </Row>


        </div>
    )
}

export default Home