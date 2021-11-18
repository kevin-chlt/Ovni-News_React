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
import sports from '../images/sports.jpg'
import { Link } from 'react-router-dom';

const Accueil = () => {
    return (
        <>
<main>
    <div className="site-title_container">
        <img src={logo} />
        <div className="site-title_text">
            <h1>L'OVNI</h1>
            <h2>L'information à chaud !</h2>
        </div>
    </div>
    
    <div className="category-container">

        <div className="category-list_container">
            <Link to="/general" >
                 <img className="category-list_img" src={general}/>
                <span className="category-list_link">Général</span>
            </Link>    
            <Link to="/business" >
                <img className="category-list_img" src={business}/>
                <span className="category-list_link">Economie</span>
            </Link>    
            <Link to="/sports" >
                <img className="category-list_img" src={sports}/>
                <span className="category-list_link">Sport</span>
            </Link> 
        </div> 

        <div className="category-list_container">
            <Link to="/entertainment" >
                <img className="category-list_img" src={entertainment}/>
                <span className="category-list_link">People</span>
            </Link>    
            <Link to="/health" >
                <img className="category-list_img" src={health}/>
               <span className="category-list_link">Santé</span>
            </Link>    
            <Link to="/science" >
                <img className="category-list_img" src={science}/>
                <span className="category-list_link">Science</span>
            </Link>    
            <Link to="/technology" >
                <img className="category-list_img" src={technology}/>
               <span className="category-list_link">Technologie</span>
            </Link> 
        </div>  
    </div>

</main>
<Footer />
</>
    )
}

export default Accueil;
