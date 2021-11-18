import React from "react";
import dropdownMenu from '../images/align-justify.svg';
import profilImageDefault from '../images/male-default-profile-picture.jpg';
import switcherForm from '../images/house-user.svg';
import loginBtn from '../images/arrow-circle-right_pageArticle.svg';
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Header = () => {
    return (
        <Router>
            <header>
                <div className="header-logo_container">
                    <a className="link-logo">
                        <img className="logo-header" src={logo} alt="logo" />
                    </a>
                    <img className="small-category_icon" src={dropdownMenu} id="btn-category" alt="menu des categories" />
                </div>

                <nav className="header-nav">
                    <Link className="header-nav_link general" to="/general">
                        Général
                    </Link>
                    <Link className="header-nav_link business" to="/business">
                        Economie
                    </Link>
                    <Link className="header-nav_link health" to="/health">
                        Santé
                    </Link>
                    <Link className="header-nav_link sports" to="/sports">
                        Sports
                    </Link>
                    <Link className="header-nav_link entertainment" to="/entertainment">
                        People
                    </Link>
                    <Link className="header-nav_link science" to="/science">
                        Science
                    </Link>
                    <Link className="header-nav_link technology" to="/technology">
                        Technologie
                    </Link>
                </nav>

                <div className="user-board_container" id="userboardContainer">
                    <span className="userName_text"> John Doe </span>
                    <a className="user-profil_link">Accedez à votre profil</a>
                </div>

                <div className="user-panel_container">
                    <img className="user-picture_img" src={profilImageDefault} />
                </div>

                <a className="user-subscribe_link" id="subscribe-container" href="./subscribe-check.php">Inscrivez-vous</a>
                <div className="small-connexion_container">
                    <img src={switcherForm} className="small-connexion_icon" id="btn-img_connexion" />
                </div>

                <div className="user-connexion_container" id="container-formConnect">
                    <form className="user-connexion_form" method="POST" action="connexion-check.php" id="form-user">
                        <input className="input" type="text" name="email" placeholder="Adresse mail" />
                        <input className="input" type="password" name="password" placeholder="Mot de passe" />
                    </form>
                    <div className="user-connexion_btn" id="submit-btn" role="button" tabIndex="0">
                        <img className="user-connexion_img" src={loginBtn} />
                    </div>
                </div>

                <ul id="menu" className="responsive-dropdown_close responsive_dropdown">
                    <li className="responsive-text_container">
                        <a href="index.php?category='.$categories[$i]['theme'].'" className="dropdown-text '.$categories[$i]['theme'].'_responsive"> '.$categories[$i]['name'].'</a>
                    </li>
                </ul>
            </header>
        </Router>
    )
}

export default Header;


