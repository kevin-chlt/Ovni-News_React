import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../styles/articles_list/article_list.css'; 
import '../styles/articles_list/filters.css'; 
import GetArticlesList from '../components/Articles_list/GetArticlesList'
import styled from 'styled-components'; 
import Footer from '../components/Footer';
import FiltersByAuthors from '../components/Articles_list/FiltersByAuthors';
import Loading from '../components/Loading';


const Articles = ({ categoryId }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(20); 

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/articles/${categoryId}`)
        .then(res => {
            setData(res.data);
            setMounted(true);
        });
        return () => {
            setMounted(false) 
        }
    }, [categoryId])


    const handleItemPerPage = (value) => {
        setItemsPerPage(value)
        
        if(value === '0') {
            setItemsPerPage(20); 
        }
    }

    return (
    <>
    <Main>
        <FiltersWrapper>
            <div className="container-filter_nbrPerPage">
                <select value={itemsPerPage} onChange={(e) => handleItemPerPage(e.target.value)}>
                    <option value="0">Nombre d'articles</option>
                    <option value="5"> 5 </option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
           <div>
               <select className="authors_selector">
                    <FiltersByAuthors />
               </select>
           </div>
        </FiltersWrapper>
        
        { mounted ? <GetArticlesList data={data} itemsPerPage={parseInt(itemsPerPage)} /> : <Loading /> }

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