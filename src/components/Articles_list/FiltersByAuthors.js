import React, { useState, useEffect } from 'react'
import axios from 'axios';

const FiltersByAuthors = ({ handleClickAuthor }) => {
    const [authorsList, setAuthorsList] = useState([]); 

    useEffect(() => {
        axios.get(`https://127.0.0.1:8000/authors/`)
        .then((res) => {
            setAuthorsList(res.data);
        })
    }, [])

    const displayAuthorsList = authorsList.map(author => {
        return (
            <option key={author.id} value={author.id} onClick={(e => handleClickAuthor(e.target.value))} > {author.name} </option>
        )
    })

    return (
        <>
        <option value="0">Choissisez une source</option>
            {displayAuthorsList}
        </>
    )
}

export default FiltersByAuthors
