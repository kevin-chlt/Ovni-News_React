import axios from 'axios';
import React, { useCallback, useState } from 'react'; 
import { Link } from "react-router-dom";
import Pagination from './Pagination';

const GetArticlesList = ({ data, itemsPerPage, user, handleRequestState, handleData }) => {
    const [currentItems, setCurrentItems] = useState(data);

    const getCurrentItems = useCallback((datas) => {
        setCurrentItems(datas)
    }, [])

    const deleteArticle = (articleId) => {
        axios.delete(`https://127.0.0.1:8000/api/articles/${articleId}`)
        .then(() => {
           handleRequestState('Article supprimé avec succès', 'darkgreen'); 
           let newData = data.filter(data => data.id !== articleId)
           handleData(newData);
        })
        .catch(() => handleRequestState('Une erreur lors de la suppression de l\'article est apparue, veuillez rééssayez.', '#D83A56'))
    }

    const articlesList = currentItems.map(article => (
        <article key={article.id} className="container-list">
            <img src={article.urlToImage} alt="image_article" />
            <Link className="article-title" to={`../articles/details/${article.id}`}>{article.title}</Link>
            {user && user.roles.includes('ROLE_ADMIN') ? <button className="remove-link" onClick={() => deleteArticle(article.id)}  >Supprimer</button> : null}
        </article>
    ))

    return (
        <>
            {articlesList.length === 0 ? 'Aucun article à affiché.' : articlesList}
            
            <Pagination getCurrentItems={getCurrentItems} itemsPerPage={itemsPerPage} data={data} /> 
            
            <Link to="/" className="btn-retour_text"> Retour à l'accueil</Link>
        </>
    )
}

export default GetArticlesList;


  