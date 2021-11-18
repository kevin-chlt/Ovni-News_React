import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetArticlesList = ({ category }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/articles/${category}`)
        .then((res) => {
        setData(res.data);
        })
    }, [category])

    console.log(category)
    return (
        <ul>
            {category}
        </ul> 
    )
    
}

export default GetArticlesList;
