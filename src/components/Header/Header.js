import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import PublicPanel from "./PublicPanel";
import DropdownMenu from "./DropdownMenu";
import '../../styles/header/header.css';
import dropdownBurger from '../../images/align-justify.svg';
import logo from '../../images/logo.svg';
import { getCurrentUser } from '../../services/TokenManager';
import UserPanel from "./UserPanel";


const Header = ({ handleRequestState, handleUser, user }) => {
    const [datas, setDatas] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(''); 
    const backgroundCategoryBtn = {
        health: '#185ADB',
        entertainment: '#B4AEE8',
        general: '#98DED9',
        science: '#9DAD7F',
        technology: '#B4846C',
        business: '#1B1A17', 
        sports: '#9FE6A0'
    }

    useEffect(() => {
        axios.get('https://127.0.0.1:8000/api/categories/')
        .then(res => setDatas(res.data))
        .catch(() => {
            localStorage.clear();
            handleRequestState('Une erreur est apparue, veuillez rafraichir la page.', '#D83A56')
        }) 
    }, [handleRequestState])

    const handleDropdownClassname = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const categories = datas.map(category => {
        return (
            <NavLink
                key={category.id} 
                className={` ${category.slug} header-nav_link`}
                onClick={() => setActiveCategory(category.slug)}
                style={({ isActive }) => {
                    return {
                        color: isActive ? '#fff' : '', 
                        backgroundColor: isActive ? backgroundCategoryBtn[activeCategory] : ''
                    }
                }}
                to={`/articles/${category.slug}`} 
                >
                    {category.name}
            </NavLink>
        );
    })

    return (
        <header>
            <div className="header-logo_container">
                <Link className="link-logo" to="/">
                    <img className="logo-header" src={logo} alt="logo" />
                </Link>
                
                <img 
                onClick={() => handleDropdownClassname()} className="small-category_icon" src={dropdownBurger} alt="menu_des_categories"
                style={{transform: `${!dropdownOpen ? 'initial' : 'rotateZ(90deg)'}`}} 
                />
            </div>

            <nav className="header-nav">
                { categories }
            </nav>
            
            { getCurrentUser() ? 
                <UserPanel user={user} handleUser={handleUser} handleRequestState={handleRequestState} />
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