import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../styles/articles_list/article_list.css'; 
import '../styles/articles_list/filters.css'; 
import GetArticlesList from '../components/Articles_list/GetArticlesList'
import styled from 'styled-components'; 
import Footer from '../components/Footer';
import FiltersByAuthors from '../components/Articles_list/FiltersByAuthors';
import Loading from '../components/Loading';
import { useParams } from 'react-router';
import ItemsPerPage from '../components/Articles_list/ItemsPerPage';


const Articles = ({ handleRequestState, user }) => {
    const [data, setData] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(20); 
    let params = useParams(); 

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/articles/category/${params.categoryId}`)
        .then(res => {
            setData(res.data);
            setMounted(true);
        })
        .catch(() => handleRequestState('Une erreur est apparue, veuillez rafraichir la page.', '#D83A56'));
        return () => setMounted(false);
        
    }, [params.categoryId, handleRequestState])


    const handleItemPerPage = (value) => {
        setItemsPerPage(value)
        
        if(value === '0') {
            setItemsPerPage(20); 
        }
    }

    const handleData = (data) => {
        setData(data)
    }

    return (
    <>
    <Main>
        <FiltersWrapper>
            <div className="container-filter_nbrPerPage">
                <ItemsPerPage handleItemPerPage={handleItemPerPage} itemsPerPage={itemsPerPage}/>
            </div>
           <div>
                <FiltersByAuthors handleRequestState={handleRequestState} />
           </div>
        </FiltersWrapper>
        
        { mounted ? <GetArticlesList data={data} itemsPerPage={parseInt(itemsPerPage)} user={user} handleRequestState={handleRequestState} handleData={handleData} /> : <Loading /> }

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
    min-height: 72vh;
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