import React from 'react';
import Footer from '../components/Footer';
import '../styles/accueil.css';
import logo from '../images/logo.svg';
import general from '../images/general.jpg';
import health from '../images/health.jpg';

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
            <a href="#" id="btn-category">
                <img className="category-list_img" src={general} />
                <span className="category-list_link">Général'</span>
            </a>
        </div>
    </div>
    <div className="category-list_container">
        <a href="#" class="category-list_item" id="btn-category">
                <img className="category-list_img" src={health} />
                <span className="category-list_link">Santé</span>
        </a>
    </div>
</main>
<Footer />
</>
    )
}

export default Accueil;
