import React from "react";
import '../styles/header.css';
import dropdownMenu from '../images/align-justify.svg';
//import profilImageDefault from '../images/male-default-profile-picture.jpg';
import switcherForm from '../images/house-user.svg';
import loginBtn from '../images/arrow-circle-right_pageArticle.svg';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";


const Header = () => {
    const [datas, setDatas] = useState([]);
    const [dropdownClassname, setDropdownClassname] = useState('close');

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/categories/')
        .then(res => setDatas(res.data))
    }, [])

    const handleDropdownClassname = (e) => {
        setDropdownClassname(dropdownClassname === 'close' ? 'open' : 'close');
    }

    const categories = datas.map(category => {
        return (
            <Link key={category.id} className={`header-nav_link ${category.slug}`} to={`/${category.slug}`} >
                {category.name}
            </Link>
        );
    })

    return (
            <header>
                <div className="header-logo_container">
                    <Link className="link-logo" to="/">
                        <img className="logo-header" src={logo} alt="logo" />
                    </Link>
                    <img onClick={() => handleDropdownClassname()} className="small-category_icon" src={dropdownMenu} alt="menu_des_categories"
                    style={{transform: `${dropdownClassname === 'close' ? 'initial' : 'rotateZ(90deg)'}`}}
                    />
                </div>

                <nav className="header-nav">
                    { categories }
                </nav>
{/*
                <div className="user-board_container" id="userboardContainer">
                    <span className="userName_text"> John Doe </span>
                    <a className="user-profil_link">Accedez à votre profil</a>
                </div>

                <div className="user-panel_container">
                    <img className="user-picture_img" src={profilImageDefault} />
                </div>
*/}
                <Link to="/registration" className="user-subscribe_link" id="subscribe-container">Inscrivez-vous</Link>
                <div className="small-connexion_container">
                    <img src={switcherForm} className="small-connexion_icon" id="btn-img_connexion" alt="image_form_switch" />
                </div>

                <div className="user-connexion_container" id="container-formConnect">
                    <div className="user-connexion_form">
                        <input className="input" type="text" name="email" placeholder="Adresse mail" />
                        <input className="input" type="password" name="password" placeholder="Mot de passe" />
                    </div>
                    <div className="user-connexion_btn" role="button" tabIndex="0">
                        <img className="user-connexion_img" alt="bouton_de_connexion" src={loginBtn} />
                    </div>
                </div>
                <DropdownMenu categories={datas} dropdownState={dropdownClassname} />
                
            </header>
    )
}

export default Header;


