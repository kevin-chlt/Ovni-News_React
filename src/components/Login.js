import axios from 'axios';
import React, { useState } from 'react';
import loginBtn from '../images/arrow-circle-right_pageArticle.svg';
import Helptext from '../components/Helptext'


const Login = () => {
    const [inputEmail, setInputEmail] = useState(''); 
    const [inputPassword, setInputPassword] = useState('');
    const [userCredential, setUserCredential] = useState([]); 



    const getCredentials = () => {
        axios.post('https://localhost:8000/api/login_check', {
            username: inputEmail,
            password: inputPassword
        } )
        .then((res) => {
            setUserCredential(res.data);
            
        })
        .catch(errors => {
            if(errors.response.status === 401) {
            }else {
            }
        })
    }


    return (
        <>
            <Helptext />
            <div className="user-connexion_form">
                <input className="input" type="text" name="email" placeholder="Adresse email" onChange={(e) => setInputEmail(e.target.value)}/>
                <input className="input" type="password" name="password" placeholder="Mot de passe" onChange={(e) => setInputPassword(e.target.value)} />
            </div>
            <div className="user-connexion_btn" role="button" tabIndex="0">
                <img className="user-connexion_img" alt="bouton_de_connexion" src={loginBtn} onClick={() => getCredentials()}/>
            </div>
        </>
    )
}

export default Login
