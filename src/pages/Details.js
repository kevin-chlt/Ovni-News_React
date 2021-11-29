import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/articles_details/showArticle.css';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'
import ArticlesComments from '../components/Articles_details/ArticlesComments';


const Details = ({ articleId }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/articles/details/${articleId}`)
        .then(res =>{
            setData(res.data); 
            setMounted(true); 
        })
        return () => setMounted(false)
    }, [articleId])

    
    return (
    mounted ?     
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
                <Link to={`/articles/${data.category[0].slug}`}>
                    Retour
                </Link>
                <Link to={`/articles/${data.category[0].slug}/${data.id -1}`} >
                    Precedent
                </Link>
                <Link to={`/articles/${data.category[0].slug}/${data.id +1}`} >
                    Suivant
                </Link>
                <a href={data.externalLink} target="_blank" rel="noreferrer noopener">
                    Source
                </a>
            </div>
        </ArticleWrapper>
        
        <ArticlesComments />
    </Main>

    <Footer />
</>

: <Loading /> 

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




