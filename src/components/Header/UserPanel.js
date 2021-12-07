import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import profilImageDefault from '../../images/male-default-profile-picture.jpg';
import '../../styles/header/user_panel.css'; 


const UserPanel = () => {
    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState('') 

    const userFetch = useCallback( async () => {
        await axios.get('https://127.0.0.1:8000/user')
        .then(res => setUserId(res.data.id)) 
        .catch(error => console.log(error))

        await axios.get(`https://127.0.0.1:8000/api/users/${userId}`)
        .then(res => setUser(res.data))
        .catch(error => console.log(error)) 
    },[userId])

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
