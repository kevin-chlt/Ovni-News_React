import React from 'react'
import submitCommentImage from '../../images/arrow-circle-right_pageArticle.svg';
import styled from 'styled-components';


const ArticlesComments = () => {

    return ( 
        <CommentWrapper className="CommentWrapper">
            <h3>Espace commentaires</h3>

            <form method="POST" id="comment-form">
                <label htmlFor="message">Ecrivez votre commentaire</label>
                <div className="form-sendbox">
                    <textarea name="message" rows="3" />
                    <img role="button" src={submitCommentImage} alt="bouton_envoi_commentaire" />
                </div>
                <span className="help-text_comment" id="help-text_comment"></span>
            </form>
            <h4>Les derniers commentaires :</h4>

            <span className="no-comment-text">Il n'y a pas de commentaire, soyez le premier à l'écrire !</span>
            
            <div className="user-comments_box">
                    <span className="username"> John Doe</span>
                    <span> comment content </span>
                    <span className="createdAt"> 02/02/2021 </span>
            </div>
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