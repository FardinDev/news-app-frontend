
import { Avatar, Button, Card, Col, Drawer, List, Row, Skeleton } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import { useSearchParams } from 'react-router-dom';

const InfiniteList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { loading,
        page,
        setPage,
        list,
        initLoading,
        open,
        setOpen,
        selectedItem,
        setSelectedItem,
        onLoadMore } = useContext(DataContext)


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        // setSelectedItem(null)
    };


    useEffect(() => {


        if (selectedItem !== null) {
            showDrawer();
        } else {
            onClose();
        }

        return () => console.log('my effect is destroying');

    }, [selectedItem])

    useEffect(() => {
        setSearchParams({ page: page })
        if (page > 1) {
            onLoadMore()
        }
    }, [page]);



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
                <Button onClick={() => setPage(page + 1)} shape={'round'}>Load more articles</Button>
            </div>
        ) : null;
    return (

        <>

            {list.length && <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        onClick={() => { setSelectedItem(item); }}
                        style={{ padding: 14, cursor: 'pointer' }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>

                            <List.Item.Meta

                                avatar={<Avatar src={`https://ui-avatars.com/api/?background=000000&color=ffffff&length=1&name=${item?.author}`} />}
                                title={<a target='_blank'>{item?.title}</a>}
                                description={item?.description}
                            />


                        </Skeleton>
                    </List.Item>

                )
                }
            />}

            <Drawer
                title={selectedItem?.title}
                placement={'bottom'}
                closable={true}
                onClose={onClose}
                open={open}
                key={'bottom'}
                height={'90%'}
            >


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

                            <Paragraph
                                ellipsis={{
                                    rows: 3,
                                    expandable: true,
                                    suffix: '-' + selectedItem?.source?.name,
                                    onEllipsis: (ellipsis) => {
                                        console.log('Ellipsis changed:', ellipsis);
                                    },
                                }}
                                title={`${selectedItem?.body}`}
                            >
                                {selectedItem?.body}
                            </Paragraph>

                        </Card>
                    </Col>
                </Row>



            </Drawer >
        </>
    );
};
export default InfiniteList;