import React, { useEffect, useState } from 'react'
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

    const handleComment = (comment) => {
        console.log(comment);
        //setData(...data, comment)
    }

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/articles/details/${params.articleId}`)
        .then(res =>{
            setData(res.data); 
            setMounted(true); 
        })
        return () => setMounted(false)
    }, [params.articleId])

    
    return (
    mounted ?     
<>
    <Main>
        <ArticlesContent data={data} />
        
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





