import React, { useState } from 'react'
import submitCommentImage from '../../images/arrow-circle-right_pageArticle.svg';
import styled from 'styled-components';
import '../../styles/articles_details/articles_comments.css';
import axios from 'axios';


const ArticlesComments = ({ data, handleRequestState, user, handleComment }) => {    
    const [newComment, setNewComment] = useState({
        content: '',
    })

    const sentComment = () => {
        if(!newComment.content.match(/^[.A-z0-9À-ÿ /'-?!&;:,()]+$/) || newComment.content.length < 1 ){
           return handleRequestState('Format du commentaire non autorisé.', '#D83A56')
        }
        if(!user) {
          return handleRequestState('Veuillez vous connecter pour écrire un message', '#D83A56')
        }

        axios.post('https://127.0.0.1:8000/api/comments', {...newComment})
        .then(res => {
           if (res.status >= 200 && res.status < 300 ) {
                handleRequestState('Message envoyé avec succès', 'darkgreen');
                handleComment(newComment); 
                setNewComment({content: ''})
           }
        })
        .catch(() => handleRequestState('Une erreur est apparue lors de l\'envoi du message, veuillez réessayer.', '#D83A56'))
    }
        
    const handleChangeComment = (e) => {
        setNewComment({
            ...newComment,
             content: e.target.value, 
             users: `/api/users/${user.id}`,
             articles: `/api/articles/${data.id}`,
        })
        handleRequestState('');
    }

    const commentListSorted = data.comments.sort((a, b) => {
        return a.postedAt < b.postedAt; 
    }) 

    const commentsList = commentListSorted.map((comment, i) => {
        return (
            <div key={comment.id} className="user-comments_box" style={{alignSelf: i % 2 ? 'flex-end' : 'flex-start'}}>
                <span className="username"> { comment.users.lastname } { comment.users.firstname } </span>
                <span> { comment.content } </span>
                <span className="createdAt">
                     { new Date(comment.postedAt).toLocaleString('fr-FR', {day: '2-digit', month: '2-digit' , year:'numeric', hour:'numeric', minute: '2-digit'}) }
                 </span>
            </div>
        )
    })

    return ( 
        <CommentWrapper className="CommentWrapper">
            <h3>Espace commentaires</h3>

            <form>
                <label htmlFor="message"> Ecrivez votre commentaire </label>
                <div className="form-sendbox">
                    <textarea name="message" rows="3" value={newComment.content} onChange={(e) => handleChangeComment(e)} />
                    <img role="button" src={submitCommentImage} alt="bouton_envoi_commentaire" onClick={() => sentComment()} />
                </div>
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