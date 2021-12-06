import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import profilImageDefault from '../../images/male-default-profile-picture.jpg';


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
    }
    
    return (
    <>
        <div className="user-board_container">
           <span className="userName_text"> {user.lastname} {user.firstname} </span>
           <span className="user-profil_link" onClick={() => handleDeconnexion()}> Déconnexion </span>
       </div>

       <div className="user-panel_container">
           <img className="user-picture_img" src={profilImageDefault} alt="photo_de_profil" />
       </div>
    </>
    )
}

export default UserPanel;
