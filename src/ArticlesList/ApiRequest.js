import axios from 'axios'
import { useState } from 'react';

export const  Articles = ({ category }) => {
    const [data, setData] = useState();

    axios.get(`http://127.0.0.1:8000/articles/${category}`)
    .then((res) => {
        setData(res.data);
    })

    return data;
}
