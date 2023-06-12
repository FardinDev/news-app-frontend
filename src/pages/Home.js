
import { Col, Row, Typography } from 'antd'
import React from 'react'
import HomeFeedCard from '../components/cards/HomeFeedCard';
import InfiniteList from '../components/list/InfiniteList';

const { Title } = Typography;
function Home() {


    return (
        <div style={{ marginBottom: 40 }}>
            {/* <Title level={2}>Top News</Title>
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

            <Divider /> */}

            <Title level={2}>Feed</Title>

            <Row gutter={{ xs: 32, sm: 32, md: 24, lg: 32 }}>
                <Col xs={24} sm={12} md={12} lg={18} xl={18}>
                    <InfiniteList />
                </Col>
                <Col className="gutter-row hide-on-mobile" xs={0} sm={0} md={12} lg={6} xl={6}>
                    <HomeFeedCard />
                </Col>

            </Row>


        </div>
    )
}

export default Home