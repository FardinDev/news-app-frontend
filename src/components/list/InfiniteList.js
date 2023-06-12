
import { Avatar, Button, Card, Col, Drawer, List, Row, Skeleton, Tag } from 'antd';
import Meta from 'antd/es/card/Meta';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';

import { data as fakeData } from '../../fakedata/main'
const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;




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
                setData(fakeData?.data);
                setList(fakeData?.data);
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
                const newData = data.concat(fakeData?.data);
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
                <Button onClick={onLoadMore} shape={'round'}>Load more articles</Button>
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
                        // actions={[<Tag color={'green'}>New</Tag>]}
                        style={{ padding: 14, cursor: 'pointer' }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>

                            <List.Item.Meta

                                avatar={<Avatar src={`https://ui-avatars.com/api/?background=000000&color=ffffff&length=3&font-size=0.33&name=${item?.author}`} />}
                                title={<a target='_blank'>{item?.title}</a>}
                                description={item?.description}
                            />


                        </Skeleton>
                    </List.Item>

                )
                }
            />
            <Drawer
                title={selectedItem?.title}
                placement={'bottom'}
                closable={true}
                onClose={onClose}
                open={open}
                key={'bottom'}
                height={'90%'}
            >
                {/* 
<Col xs={24} lg={8}>
                        <img
                            width={300}
                            class="hide-on-mobile"
                            alt="logo"
                            src={selectedItem?.imageUrl}
                        />
                    </Col> */}

                <Row justify={'space-between'} align={'middle'}>
                    <Col xs={24} lg={16}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={selectedItem?.imageUrl}
                                />}
                            actions={[
                                <a href={selectedItem?.url} target='_blank' rel="noreferrer">

                                    Read on site
                                </a>
                            ]}
                        >
                            <Meta

                            // avatar={<Avatar src={selectedItem.imageUrl} />}
                            // title={<Title level={5}>{selectedItem?.title}</Title>}

                            />

                            <Paragraph
                                ellipsis={{
                                    rows: 3,
                                    expandable: true,
                                    suffix: '-' + selectedItem?.source?.name,
                                    onEllipsis: (ellipsis) => {
                                        console.log('Ellipsis changed:', ellipsis);
                                    },
                                }}
                                title={`${selectedItem?.body}--William Shakespeare`}
                            >
                                {selectedItem?.body}
                            </Paragraph>

                        </Card>
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