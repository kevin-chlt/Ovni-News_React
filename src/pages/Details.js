import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/showArticle.css';
import submitCommentImage from '../images/arrow-circle-right_pageArticle.svg';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'


const Details = ({ categoryId, articleId }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        axios.get(`https://localhost:8000/articles/${categoryId}/${articleId}`)
        .then(res =>{
            setData(res.data); 
            setMounted(true); 
        })
        return () => setMounted(false)
    }, [categoryId, articleId])

    
    return (
<>
    {mounted ?     
<>
<Main>
    <ArticleWrapper>
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
            <Link to={`/${data.category[0].slug}`}>
                Retour
            </Link>
            <Link to={`/${data.id -1}`} >
                Precedent
            </Link>
            <Link to={`/${data.id +1}`} >
                Suivant
            </Link>
            <a href={data.externalLink} target="_blank" rel="noreferrer noopener">
                Source
            </a>
        </div>
    </ArticleWrapper>
    <CommentWrapper className="CommentWrapper">
        <h3>Espace commentaires</h3>

        <form method="POST" id="comment-form">
            <label htmlFor="message">Ecrivez votre commentaire</label>
            <div className="form-sendbox">
                <textarea name="message" rows="3" id="message"></textarea>
                <img role="button" src={submitCommentImage} id="comment-btn" alt="bouton_envoi_commentaire" />
            </div>
            <span className="help-text_comment" id="help-text_comment"></span>
        </form>

        <h4>Les derniers commentaires :</h4>

        <span className="no-comment-text">Il n'y a pas de commentaire, soyez le premier à l'écrire !</span>'
        
        <div className="user-comments_box">
                <span className="username"> John Doe</span>
                <span> comment content </span>
                <span className="createdAt"> 02/02/2021 </span>
        </div>
    </CommentWrapper>
</Main>
<Footer />
</>
: <Loading /> }
</>
    )
}

export default Details;

const Main = styled.main`
    display: grid;
    grid-template-columns: 70% 30%;
    justify-items: center;
    @media (max-width: 1450px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
`
const ArticleWrapper = styled.article`
    @media (max-width: 1450px) {
        width: 70%;
    }
    @media (max-width: 1100px) {
        width: 100%;
    }
`

const CommentWrapper = styled.aside`
    height: 100vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media (max-width: 1450px) {
        width: 50%;
        height: auto;
        overflow-y: inherit;
        margin: 30px 0;
    }
    @media (max-width: 900px) {
        width: 70%;
    }
    @media (max-width: 650px) {
        margin-top: 10px;
        width: 90%;
        border: none;
    }
    @media (max-width: 500px) {
        width: 90%;
        border-top: #D83A56 1px solid;
        border-radius: inherit;
    }
`


