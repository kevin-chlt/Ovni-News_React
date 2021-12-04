import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../../styles/articles_details/articles_content.css';

const ArticlesContent = ({ data }) => {
    return (
        <div className="articles-wrapper">
            <div className="article-title_container">
                <h1> {data.title} </h1>
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
