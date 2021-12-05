import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PublicPanel from "./PublicPanel";
import DropdownMenu from "./DropdownMenu";
import '../../styles/header/header.css';
import dropdownBurger from '../../images/align-justify.svg';
import logo from '../../images/logo.svg';
import profilImageDefault from '../../images/male-default-profile-picture.jpg';
import Authentification from '../Auth/Authentification';


const Header = ({ handleRequestState }) => {
    const [datas, setDatas] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/categories/')
        .then(res => setDatas(res.data))
        .catch(errors => handleRequestState(errors.message))
    }, [handleRequestState])

       const handleDropdownClassname = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const categories = datas.map(category => {
        return (
            <Link key={category.id} className={`header-nav_link ${category.slug}`} to={`/articles/${category.slug}`} >
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
                    <img onClick={() => handleDropdownClassname()} className="small-category_icon" src={dropdownBurger} alt="menu_des_categories"
                    style={{transform: `${!dropdownOpen ? 'initial' : 'rotateZ(90deg)'}`}} />
                </div>

                <nav className="header-nav">
                    { categories }
                </nav>
           {Authentification.getCurrentUser() ? 
            <>
                 <div className="user-board_container">
                    <span className="userName_text"> John Doe </span>
                    <Link to="/my-profile" className="user-profil_link">Accédez à votre profil</Link>
                </div>

                <div className="user-panel_container">
                    <img className="user-picture_img" src={profilImageDefault} alt="photo_de_profil" />
                </div>
            </>
            :
                <PublicPanel handleRequestState={handleRequestState} />
           }
    
                




                
                <DropdownMenu 
                categories={datas} 
                open={dropdownOpen} 
                handleDropdownClassname={handleDropdownClassname}
                />
                
            </header>
    )
}

export default Header;

