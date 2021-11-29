import { Link } from "react-router-dom";


const GetArticlesList = ({ data }) => {

    const articlesList = data.map(article => (
            <article key={article.id} className="container-list">
                <img src={article.urlToImage} alt="image_article" />
                <Link className="article-title" to={`../articles/details/${article.id}`}>{article.title}</Link>
            </article>
        ))
    
    return (
        <>
            {articlesList}
            <div className="pagination-container" id="pagination" />
            <Link to="/" className="btn-retour_text"> Retour à l'accueil</Link>
        </>
    )
    
}

export default GetArticlesList;


  