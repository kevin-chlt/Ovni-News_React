import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetArticlesList from '../components/Articles_list/GetArticlesList';
import Loading from '../components/Loading';
import styled from 'styled-components'; 
import FiltersByAuthors from '../components/Articles_list/FiltersByAuthors';
import Footer from '../components/Footer';


const Authors = ({ authorId }) => {
    const [data,setData] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [offset, setOffset] = useState(20);


    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/authors/${authorId}`)
        .then(res => {
            setData(res.data); 
            setMounted(true); 
        })
        return () => {
            setMounted(false); 
        }
    }, [authorId])


    return (
        <>
        <Main>
            <FiltersWrapper>
                <div className="container-filter_nbrPerPage">
                    <select onChange={(e => setOffset(e.target.value))}>
                        <option value="0">Nombre d'articles</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div>
                    <select>
                        <FiltersByAuthors />
                    </select>
                </div>
            </FiltersWrapper>

            { mounted ? <GetArticlesList data={data.slice(0, offset)} /> : <Loading /> }
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