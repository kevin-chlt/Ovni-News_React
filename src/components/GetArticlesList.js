

const GetArticlesList = ({ data }) => {
    const articlesList = data.map((article) => (
            <article key={article.id} className="container-list">
                <img src={article.urlToImage} alt="image_article" />
                <a className="article-title" href="#">{article.title}</a>
            </article>
        ))
    

    return (
        <>
        {articlesList}
        </>
    )
    
}

export default GetArticlesList;


  