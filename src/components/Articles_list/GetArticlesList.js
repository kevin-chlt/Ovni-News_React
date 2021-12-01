import React, { useCallback, useState } from 'react'; 
import { Link } from "react-router-dom";
import Pagination from './Pagination';

const GetArticlesList = ({ data, itemsPerPage }) => {
    const [currentItems, setCurrentItems] = useState(data);

    const getCurrentItems = useCallback((datas) => {
        setCurrentItems(datas)
    }, [])

    const articlesList = currentItems.map(article => (
        <article key={article.id} className="container-list">
            <img src={article.urlToImage} alt="image_article" />
            <Link className="article-title" to={`../articles/details/${article.id}`}>{article.title}</Link>
        </article>
    ))

    return (
        <>
            {articlesList}
            
            <Pagination getCurrentItems={getCurrentItems} itemsPerPage={itemsPerPage} data={data} /> 
            
            <Link to="/" className="btn-retour_text"> Retour à l'accueil</Link>
        </>
    )
}

export default GetArticlesList;


  