import { Collapse } from 'antd'
import React from 'react'

function FilterContents({ ghost }) {

    const filterItems = [
        {
            key: 'source',
            label: 'Filter Feed by Source',
            children: <p>{'text'}</p>,
        },
        {
            key: 'author',
            label: 'Filter Feed by Author',
            children: <p>{'text'}</p>,
        },
        {
            key: 'category',
            label: 'Filter Feed by Category',
            children: <p>{'text'}</p>,
        },
        {
            key: 'date',
            label: 'Filter Feed by Date',
            children: <p>{'text'}</p>,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Collapse items={filterItems} bordered={false} ghost={ghost} onChange={onChange} />
    )
}

export default FilterContents