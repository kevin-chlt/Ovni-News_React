import React from 'react'

const ItemsPerPage = ({ handleItemPerPage, itemsPerPage }) => {


    return (
        <select value={itemsPerPage} onChange={(e => handleItemPerPage(e.target.value))}>
            <option value="0">Nombre d'articles</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
        </select>
    )
}

export default ItemsPerPage
