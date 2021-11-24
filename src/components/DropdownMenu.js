import React from 'react';
import { Link } from "react-router-dom";


function DropdownMenu( { categories, dropdownState } ) {

    const categoriesLink = categories.map(category => {
        return (
            <li key={category.id} className="responsive-text_container">
               <Link to={category.slug} className={`dropdown-text ${category.slug}_responsive`}> {category.name} </Link>
            </li>
        )
    })

    return (
        <>
            <ul className={`responsive-dropdown_${dropdownState} responsive_dropdown`}>
                {categoriesLink}
            </ul>
        </>
    )
}

export default DropdownMenu
