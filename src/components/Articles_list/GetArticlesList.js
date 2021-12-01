import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const GetArticlesList = ({ data, itemsPerPage }) => {
    const [paginationNumber, setPaginationNumber] = useState(0);

    const articlesList = data.map(article => (
        <article key={article.id} className="container-list">
            <img src={article.urlToImage} alt="image_article" />
            <Link className="article-title" to={`../articles/details/${article.id}`}>{article.title}</Link>
        </article>
    ))
        
    const PaginationList = () => {
        for(let i = 0; i < (data.length / itemsPerPage); i++){
            return(
                <Link to={`/${i}`} > {i+1} </Link>
            )
        }
    }

    useEffect(() => {
        let pageCount = Math.ceil(data.length / itemsPerPage); 
        setPaginationNumber(data.length/itemsPerPage); 
        console.log(pageCount)
    }, [itemsPerPage, data])


    return (
        <>
            {articlesList}
            <div className="pagination-container" > {<PaginationList />} </div>
            <Link to="/" className="btn-retour_text"> Retour à l'accueil</Link>
        </>
    )
}

export default GetArticlesList;


  