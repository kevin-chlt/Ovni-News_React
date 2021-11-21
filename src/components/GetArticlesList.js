import { Link } from "react-router-dom";





const GetArticlesList = ({ data }) => {
    console.log(data);
    const articlesList = data.map(article => (
            <article key={article.id} className="container-list">
                <img src={article.urlToImage} alt="image_article" />
                <Link className="article-title" to={`${article.id}`}>{article.title}</Link>
            </article>
        ))
    
    return (
        <>
        {articlesList}
        </>
    )
    
}

export default GetArticlesList;


  