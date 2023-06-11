import React from 'react'
import { useParams } from 'react-router-dom';

function Category() {
    let params = useParams();
    let { topic } = params;
    return (
        <div>{topic}</div>
    )
}

export default Category