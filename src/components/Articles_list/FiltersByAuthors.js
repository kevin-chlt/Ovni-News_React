import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const FiltersByAuthors = () => {
    const [authorsList, setAuthorsList] = useState([]); 
    let navigation = useNavigate();

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/authors/`)
        .then((res) => {
            setAuthorsList(res.data);
        })
    }, [])
    
    const handleClickAuthor = (key) => {
        return navigation(`../authors/${key}`)
    }

    const displayAuthorsList = authorsList.map(author => {
        return (
            <option key={author.id} value={author.id} onClick={(e => handleClickAuthor(e.target.value))} > {author.name} </option>
        )
    })

    return (
        <>
        <option value="0" onClick={() => navigation('/articles/general')} >Choissisez une source</option>
            {displayAuthorsList}
        </>
    )
}

export default FiltersByAuthors;
