import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Drawer, List, Row, Skeleton, Space, Tag, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


const { Text } = Typography;
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const InfiniteList = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        // setSelectedItem(null)
    };


    let news = {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Chris Mason: The ghost of Boris Johnson haunts Rishi Sunak",
        "description": "The ex-PM, with a life-long knack for throwing stones and grabbing attention, is doing just that.",
        "url": "http://www.bbc.co.uk/news/uk-politics-65864011",
        "imageUrl": "https://ichef.bbci.co.uk/news/1024/branded_news/17BF3/production/_128676279_5f33b9a56bbbb9e2e63542da0cd8cf5eb5cd88890_0_5310_37961000x715.jpg",
        "publishedAt": "2023-06-10T07:37:18.8449898Z",
        "body": "Chaos, uncorked. Again.\r\nIn his seven months as prime minister, the most notable characteristic Rishi Sunak has brought to government is - relatively speaking at least - stability.\r\nBut 2022 - or muc… [+2472 chars]"
    }


    useEffect(() => {

        console.log('================selectedItem====================');
        console.log(selectedItem);
        console.log('================selectedItem====================');
        if (selectedItem !== null) {
            showDrawer();
        } else {
            onClose();
        }
    }, [selectedItem])

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);
    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
    };
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;
    return (

        <>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        onClick={() => { setSelectedItem(item); showDrawer() }}
                        actions={[<Tag color={'green'}>New</Tag>, <a href='test' key="list-loadmore-more">more</a>]}
                        style={{ padding: 14, cursor: 'pointer' }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>

                            <List.Item.Meta

                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name?.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />


                        </Skeleton>
                    </List.Item>

                )
                }
            />
            <Drawer
                title={news?.title}
                placement={'bottom'}
                closable={true}
                onClose={onClose}
                open={open}
                key={'bottom'}
                height={'70%'}
            >

                <Row justify={'space-between'} align={'middle'}>
                    <Col xs={24} lg={16}>
                        <Card

                            cover={
                                <img
                                    alt="example"
                                    src={news?.imageUrl}
                                />}
                            actions={[
                                <a href={news?.url} target='_blank'>

                                    Read on site
                                </a>
                            ]}
                        >
                            <Meta

                                // avatar={<Avatar src={news.imageUrl} />}
                                title={<Title level={5}>{news?.title}</Title>}

                            />

                            <Paragraph
                                ellipsis={{
                                    rows: 3,
                                    expandable: true,
                                    suffix: '-' + news?.source?.name,
                                    onEllipsis: (ellipsis) => {
                                        console.log('Ellipsis changed:', ellipsis);
                                    },
                                }}
                                title={`${news?.body}--William Shakespeare`}
                            >
                                {news?.body}
                            </Paragraph>

                        </Card>
                    </Col>
                    <Col xs={24} lg={8}>
                        <img
                            width={300}
                            class="hide-on-mobile"
                            alt="logo"
                            src={news.imageUrl}
                        />
                    </Col>
                </Row>


                {/* <List
                    itemLayout="vertical"
                    size="large"

                    dataSource={[selectedItem]}

                    renderItem={(item) => (
                        <List.Item
                            key={news?.title}
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src={news.imageUrl}
                                />
                            }
                        >
                            <List.Item.Meta

                                avatar={<Avatar src={news.imageUrl} />}
                                title={<a href={news?.url}>{news?.title}</a>}
                                description={news?.description}
                            />
                            {news?.body}
                  
                        </List.Item>
                    )}
                /> */}
            </Drawer >
        </>
    );
};
export default InfiniteList;