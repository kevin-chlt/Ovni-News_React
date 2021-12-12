import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios";
import styled from 'styled-components';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import ArticlesComments from '../components/Articles_details/ArticlesComments';
import ArticlesContent from '../components/Articles_details/ArticlesContent';

const Details = ({ handleRequestState, user }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);
    let  params = useParams(); 

   const handleComment = comment => {
       Object.assign(...data.comments, comment)
       getArticle();
   }

   const getArticle = useCallback(() => {
        axios.get(`https://127.0.0.1:8000/api/articles/${params.articleId}`)
        .then(res =>{
            setData(res.data); 
            setMounted(true); 
        })
        .catch((errors) => {
            let error = errors.response.status === 404 ? 'Article introuvable !' : 'Une erreur est apparue lors de la récupération de l\'article !' 
            handleRequestState(error, '#D83A56')
        })
   }, [params.articleId, handleRequestState])

    useEffect(() => {
        getArticle()
        return () => setMounted(false)
    }, [getArticle])

    
    return (
    mounted ?     
<>
    <Main>
        <ArticlesContent data={data} user={user} handleRequestState={handleRequestState} />
        
        <ArticlesComments data={data} handleRequestState={handleRequestState} user={user} handleComment={handleComment} />
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





