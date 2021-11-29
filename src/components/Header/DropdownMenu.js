import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/header/dropdown_responsive.css";


const DropdownMenu = ( { categories, open, handleDropdownClassname } ) => {

    const categoriesLink = categories.map(category => {
        return (
            <li key={category.id} className="responsive-text_container">
               <Link to={`articles/${category.slug}`} className={`dropdown-text ${category.slug}_responsive`} onClick={() => handleDropdownClassname()} > {category.name}</Link>
            </li>
        )
    })

    return (
        <>
            <ul className={`responsive-dropdown_${open ? 'open' : 'close'} responsive_dropdown`} >
                {categoriesLink}
            </ul>
        </>
    )
}

export default DropdownMenu
