import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import '../../styles/articles_details/articles_content.css';


const ArticlesContent = ({ data, user, handleRequestState }) => {
    const [ids, setIds] = useState('');

    const deleteArticle = (articleId) => {
        axios.delete(`https://127.0.0.1:8000/api/articles/${articleId}`)
        .then(() => handleRequestState('Article supprimé avec succès', 'darkgreen'))
        .catch(() => handleRequestState('Une erreur lors de la suppression de l\'article est apparue, veuillez rééssayez.', '#D83A56'))
    }
    
    useEffect(() => {
        axios.get('https://127.0.0.1:8000/articles/ids')
        .then (res => {
            let idsMap = res.data.map(obj => obj.id)
            setIds(idsMap);
        })
        .catch(() => handleRequestState('Une erreur est survenu lors du chargement. Veuillez réessayez plus tard.', '#D83A56'))
    }, [handleRequestState])
    

    const setIdInBtn = (id, operande) => {
        if (ids.includes(id)) {
            return id;
        }

        if(operande === 'more') {
            if (id > ids.at(-1)) {
                return ids.at(0);
            }
        } 

        if (operande === 'less') {
            console.log(ids.at(0))
            if (id < ids.at(0)) {
                return ids.at(-1);
            }
        }
        
        for(let i = 0; i < ids.length; i++) {
            operande === 'more' ? id+=1 : id -=1
            if(ids.includes(id)) {
                return id
            }
        }
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
                <Link to={`/articles/details/${setIdInBtn(data.id -1, 'less')}`} >
                    Precedent
                </Link>
                <Link to={`/articles/details/${setIdInBtn(data.id +1, 'more')} `} >
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
