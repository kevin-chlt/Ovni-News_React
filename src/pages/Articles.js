import React from 'react'
import '../styles/articleList.css'
import GetArticlesList from '../components/GetArticlesList'
import styled from 'styled-components'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Footer from '../components/Footer';


const Articles = ({ category }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/articles/${category}`)
        .then((res) => {
        setData(res.data);
        setMounted(true)
        })      
        return () => setMounted(false) 
    }, [category])

    return (
    <>
    <Main>
        <FiltersWrapper>
            <div className="container-filter_nbrPerPage">
                <select name="limit" id="numberPerPage">
                    <option value="0">Nombre d'articles</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
           <div>
               <select name="author" id="authorLink">
                   <option value="0">Choissisez une source</option>
               </select>
           </div>
        </FiltersWrapper>
              {mounted ? <GetArticlesList data={data} /> : <Loading /> }
    </Main>
    <Footer />
    </>
    )
}

export default Articles

const Main = styled.main`
    background: #FFF; 
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
`

const FiltersWrapper = styled.aside`
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: flex-start;
    @media (max-width: 950px) {
        justify-content: space-between;
        padding: 10px 0;
    }
    @media  (max-width: 720px){    
        width: 100%;
    }
    @media (max-width: 550px) {
        justify-content: space-around;
        width: 100%;
    }
`