import React from "react";
import dropdownMenu from '../images/align-justify.svg';
import profilImageDefault from '../images/male-default-profile-picture.jpg';
import switcherForm from '../images/house-user.svg';
import loginBtn from '../images/arrow-circle-right_pageArticle.svg';
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Header = (props) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/categories/')
        .then(res => setDatas(res.data))
    }, [])

    const categories = datas.map(category => {
        return (
            <Link className={`header-nav_link ${category.slug}`} to={category.slug} onClick={() => props.changeCategory(category.slug)}>
                {category.name}
            </Link>
        );
    })

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
                    {categories}
                </nav>

                <div className="user-board_container" id="userboardContainer">
                    <span className="userName_text"> John Doe </span>
                    <a className="user-profil_link">Accedez à votre profil</a>
                </div>

                <div className="user-panel_container">
                    <img className="user-picture_img" src={profilImageDefault} />
                </div>

                <Link to="subscribe" className="user-subscribe_link" id="subscribe-container">Inscrivez-vous</Link>
                <div className="small-connexion_container">
                    <img src={switcherForm} className="small-connexion_icon" id="btn-img_connexion" />
                </div>

                <div className="user-connexion_container" id="container-formConnect">
                    <form className="user-connexion_form" method="POST" id="form-user">
                        <input className="input" type="text" name="email" placeholder="Adresse mail" />
                        <input className="input" type="password" name="password" placeholder="Mot de passe" />
                    </form>
                    <div className="user-connexion_btn" id="submit-btn" role="button" tabIndex="0">
                        <img className="user-connexion_img" alt="bouton_de_connexion" src={loginBtn} />
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


