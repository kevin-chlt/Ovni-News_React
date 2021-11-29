import React from 'react';
import Footer from '../components/Footer';
import '../styles/accueil.css';
import logo from '../images/logo.svg';
import general from '../images/general.jpg';
import health from '../images/health.jpg';
import technology from '../images/technology.jpg'
import business from '../images/business.jpg'
import entertainment from '../images/entertainment.jpg'
import science from '../images/science.jpg'
import sports from '../images/sports.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Accueil = () => {
    return (
        <>
<Main>
    <div className="site-title_container">
        <img src={logo} alt="logo"/>
        <div className="site-title_text">
            <h1>L'OVNI</h1>
            <h2>L'information à chaud !</h2>
        </div>
    </div>
    
    <div className="category-container">

        <div className="category-list_container">
            <Link to="/articles/general" >
                 <img className="category-list_img" alt="image_category" src={general}/>
                <span className="category-list_link">Général</span>
            </Link>    
            <Link to="/articles/business" >
                <img className="category-list_img" alt="image_category" src={business}/>
                <span className="category-list_link">Economie</span>
            </Link>    
            <Link to="/articles/sports" >
                <img className="category-list_img" alt="image_category" src={sports}/>
                <span className="category-list_link">Sport</span>
            </Link> 
        </div> 

        <div className="category-list_container">
            <Link to="/articles/entertainment" >
                <img className="category-list_img" alt="image_category" src={entertainment}/>
                <span className="category-list_link">People</span>
            </Link>    
            <Link to="/articles/health" >
                <img className="category-list_img" alt="image_category" src={health}/>
               <span className="category-list_link">Santé</span>
            </Link>    
            <Link to="/articles/science" >
                <img className="category-list_img" alt="image_category" src={science}/>
                <span className="category-list_link">Science</span>
            </Link>    
            <Link to="/articles/technology" >
                <img className="category-list_img" alt="image_category" src={technology}/>
                <span className="category-list_link">Technologie</span>
            </Link> 
        </div>  
    </div>

</Main>
<Footer />
</>
    )
}

export default Accueil;

const Main = styled.main`
    @media (max-width: 850px) {
        padding: 15px 0;
    }
`