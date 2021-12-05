import React, { useState } from 'react'
import submitCommentImage from '../../images/arrow-circle-right_pageArticle.svg';
import styled from 'styled-components';
import '../../styles/articles_details/articles_comments.css';


const ArticlesComments = ({ data }) => {    
    const [commentInput, setCommentInput] = useState(''); 

    const sentComment = () => {
        console.log(commentInput)
    }
        
    const commentsList = data.comments.map((comment, i) => {
        return (
            <div key={comment.id} className="user-comments_box" style={{alignSelf: i % 2 ? 'flex-end' : 'flex-start'}}>
                <span className="username"> { comment.users.lastname } { comment.users.firstname } </span>
                <span> { comment.content } </span>
                <span className="createdAt"> { new Date(comment.postedAt).toLocaleString('fr-FR', {day: '2-digit', month: '2-digit' , year:'numeric', hour:'numeric', minute: '2-digit'}) } </span>
            </div>
        )
    })

    return ( 
        <CommentWrapper className="CommentWrapper">
            <h3>Espace commentaires</h3>

            <form method="POST">
                <label htmlFor="message"> Ecrivez votre commentaire </label>
                <div className="form-sendbox">
                    <textarea name="message" rows="3" onChange={(e) => setCommentInput(e.target.value)} />
                    <img role="button" src={submitCommentImage} alt="bouton_envoi_commentaire" onClick={() => sentComment()} />
                </div>
                <span className="help-text_comment"></span>
            </form>

            <h4>Les derniers commentaires :</h4>
            
            { data.comments.length === 0 ? <span className="no-comment-text">Il n'y a pas de commentaire, soyez le premier à l'écrire !</span> : commentsList }
            
        </CommentWrapper>
    )
}

export default ArticlesComments

const CommentWrapper = styled.aside`
    height: 100vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @media (max-width: 1450px) {
        width: 50%;
        height: auto;
        overflow-y: inherit;
        margin: 30px 0;
    }
    @media (max-width: 900px) {
        width: 70%;
    }
    @media (max-width: 650px) {
        margin-top: 10px;
        width: 90%;
        border: none;
    }
    @media (max-width: 500px) {
        width: 90%;
        border-top: #D83A56 1px solid;
        border-radius: inherit;
    }
`