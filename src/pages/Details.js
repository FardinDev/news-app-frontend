import React from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    let params = useParams();
    let { newsId } = params;
    return (
        <div>{newsId}</div>
    )
}

export default Details