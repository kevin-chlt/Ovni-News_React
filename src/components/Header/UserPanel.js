import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
import profilImageDefault from '../../images/male-default-profile-picture.jpg';


const UserPanel = () => {
    const [user, setUser] = useState([]); 

    const userFetch = useCallback(() => {
        axios.get(`https://127.0.0.1:8000/api/users/${localStorage.getItem('id')}`)
        .then(res => setUser(res.data))
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        userFetch()
    }, [userFetch])

    

    return (
    <>
        <div className="user-board_container">
           <span className="userName_text"> {user.firstname} {user.lastname} </span>
           <Link to="/my-profile" className="user-profil_link">Accédez à votre profil</Link>
       </div>

       <div className="user-panel_container">
           <img className="user-picture_img" src={profilImageDefault} alt="photo_de_profil" />
       </div>
    </>
    )
}

export default UserPanel;
