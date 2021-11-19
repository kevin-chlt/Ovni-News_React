import { useEffect, useState } from 'react';
import axios from 'axios';

const GetArticlesList = ({ category }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://192.168.1.145:8000/articles/${category}`)
        .then((res) => {
        setData(res.data);
        })
    }, [category])


    return (
        <>
        {data.map((article) => (
            <article key={article.id} className="container-list">
                <img src={article.urlToImage} alt="image article" />
                <a className="article-title" href="#">{article.title}</a>
            </article>
        ))}
        </>
    )
    
}

export default GetArticlesList;


  