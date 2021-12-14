import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const FiltersByAuthors = ({ handleRequestState }) => {
    const [authorsList, setAuthorsList] = useState([]); 
    let navigation = useNavigate();

    useEffect(() => {
        axios.get(`/api/authors/`)
        .then((res) => {
            setAuthorsList(res.data);
        }).catch(() => {
            localStorage.clear();
            handleRequestState('Une erreur est apparue, veuillez vous reconnectez et rafraichir la page.', '#D83A56')
        })
    }, [handleRequestState])
    
    const handleClickAuthor = (key) => {
        return navigation(`../authors/${key}`)
    }

    const displayAuthorsList = authorsList.map(author => {
        return (
            <option key={author.id} value={author.id} onClick={(e => handleClickAuthor(e.target.value))} > {author.name} </option>
        )
    })

    return (
        <select className="authors_selector">
            <option value="0" onClick={() => navigation('/articles/general')} >Choissisez une source</option>
            {displayAuthorsList}
        </select>    
    )
}

export default FiltersByAuthors;
