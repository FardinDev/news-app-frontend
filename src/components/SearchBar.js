import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd'
import React, { useState } from 'react'
import NotFoundPage from '../pages/NotFoundPage';

function SearchBar() {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [anotherOptions, setAnotherOptions] = useState([]);



    const getPanelValue = (searchText) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data) => {
        console.log('onSelect', data);
    };

    const onChange = (data) => {
        setValue(data);
    };

    const mockVal = (str, repeat = 1) => ({
        value: str.repeat(repeat),
    });

    return (
        <AutoComplete
            value={value}
            options={anotherOptions}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={(text) => setAnotherOptions(getPanelValue(text))}
            onChange={onChange}
        // placeholder="Search Articles"



        >

            <Input.Search size="medium" placeholder="Search Articles" />

        </AutoComplete>
    )
}

export default SearchBar