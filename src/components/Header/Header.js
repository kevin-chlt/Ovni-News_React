import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PublicPanel from "./PublicPanel";
import DropdownMenu from "./DropdownMenu";
import '../../styles/header/header.css';
import dropdownBurger from '../../images/align-justify.svg';
import logo from '../../images/logo.svg';
import Authentification from '../../services/Authentification';
import UserPanel from "./UserPanel";


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
                <UserPanel />
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

