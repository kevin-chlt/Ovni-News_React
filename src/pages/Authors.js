import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetArticlesList from '../components/Articles_list/GetArticlesList';
import Loading from '../components/Loading';
import styled from 'styled-components'; 
import FiltersByAuthors from '../components/Articles_list/FiltersByAuthors';
import Footer from '../components/Footer';
import { useParams } from 'react-router';
import ItemsPerPage from '../components/Articles_list/ItemsPerPage';


const Authors = ({ handleRequestState }) => {
    const [data,setData] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    let  params = useParams(); 


    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/authors/${params.authorId}`)
        .then(res => {
            setData(res.data); 
            setMounted(true); 
        })
        .catch(() => handleRequestState('Une erreur est apparue, veuillez rafraichir la page.', '#D83A56'))
        return () => setMounted(false); 
        
    }, [params.authorId, handleRequestState])

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
                    <ItemsPerPage handleItemPerPage={handleItemPerPage} itemsPerPage={itemsPerPage}/>
                </div>
                <div>
                    <FiltersByAuthors />
                </div>
            </FiltersWrapper>

            { mounted ? <GetArticlesList data={data} itemsPerPage={parseInt(itemsPerPage)} /> : <Loading /> }
        </Main>
        <Footer />
    </>
    )
}

export default Authors

const Main = styled.main`
    background: #FFF; 
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 75vh;
    position: relative;
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