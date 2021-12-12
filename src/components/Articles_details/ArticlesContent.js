import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../../styles/articles_details/articles_content.css';
import axios from 'axios';

const ArticlesContent = ({ data, user, handleRequestState }) => {

    const deleteArticle = (articleId) => {
        axios.delete(`https://127.0.0.1:8000/api/articles/${articleId}`)
        .then(() => handleRequestState('Article supprimé avec succès', 'darkgreen'))
        .catch(() => handleRequestState('Une erreur lors de la suppression de l\'article est apparue, veuillez rééssayez.', '#D83A56'))
    }

    return (
        <div className="articles-wrapper">
            <div className="article-title_container">
                <h1> {data.title} </h1>
                {user && user.roles.includes('ROLE_ADMIN') ? <Link to="/" className="remove-button" onClick={() => deleteArticle(data.id)}> Supprimer</Link> : null}
            </div>
            <div className="article-releaseDate_container">
                <span>Publié le {new Date(data.publishedAt).toLocaleString('fr-FR')} </span>
            </div>
            <div className="article-describe_container">
                <h2> {data.description} </h2>
            </div>
            <div className="article-img_container">
                <img className="article-img_item" src={data.urlToImage} alt="image_article" />
            </div>
            <div className="article-btn-container">
                <Link to={`/articles/${data.category[0].slug}`}>
                    Retour
                </Link>
                <Link to={`/articles/details/${data.id -1}`} >
                    Precedent
                </Link>
                <Link to={`/articles/details/${data.id +1}`} >
                    Suivant
                </Link>
                <a href={data.externalLink} target="_blank" rel="noreferrer noopener">
                    Source
                </a>
            </div>
        </div>
    )
}

export default ArticlesContent
