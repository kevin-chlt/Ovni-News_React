import axios from 'axios';
import React, { useEffect, useCallback } from 'react'
import profilImageDefault from '../../images/male-default-profile-picture.jpg';
import '../../styles/header/user_panel.css'; 

const UserPanel = ({ handleUser, user, handleRequestState }) => {

    const userFetch = useCallback( async () => {
        let userId = '';
        await axios.get('https://127.0.0.1:8000/api/token_details')
        .then(res => userId = res.data.id) 
        .catch(() => handleRequestState('Une erreur est apparue, veuillez vous reconnectez', '#D83A56')) 
        
        await axios.get(`https://127.0.0.1:8000/api/users/${userId}`)
        .then(res => handleUser(res.data))
        .catch(() => handleRequestState('Une erreur est apparue, veuillez vous reconnectez', '#D83A56')) 
    },[handleUser, handleRequestState])

    useEffect(() => {
       userFetch()
    }, [userFetch])

    const handleDeconnexion = () => {
        localStorage.clear(); 
        window.location.reload(); 
    }
    
    return (
    <>
        <div className="user-board_container">
           <span className="userName_text"> {user.lastname} {user.firstname} </span>
           <button className="deconnect-btn" onClick={() => handleDeconnexion()}> Déconnexion </button>
       </div>

       <div className="user-panel_container">
           <img className="user-picture_img" src={profilImageDefault} alt="photo_de_profil" />
       </div>
    </>
    )
}

export default UserPanel;
