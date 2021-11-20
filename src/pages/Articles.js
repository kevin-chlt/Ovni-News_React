import React from 'react'
import '../styles/articleList.css'
import { Link } from 'react-router-dom'
import GetArticlesList from '../components/GetArticlesList'
import styled from 'styled-components'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';


const Articles = ({ category }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        axios.get(`https://localhost:8000/articles/${category}`)
        .then((res) => {
        setData(res.data);
        setMounted(true)
        })      
        return () => setMounted(false) 
    }, [category])

    return (
    <Main>
        <aside>
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
        </aside>
              {mounted ? <GetArticlesList data={data} /> : <Loading /> }
            
        <div className="pagination-container" id="pagination">
        </div>
        <Link to="/" className="btn-retour_text"> Retour à l'accueil</Link>
    </Main>
    )
}

export default Articles

const Main = styled.main`
    background: white; 
`