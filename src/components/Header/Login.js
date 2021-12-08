import axios from 'axios';
import React, { useState } from 'react';
import loginBtn from '../../images/arrow-circle-right_pageArticle.svg';


const Login = ({ handleRequestState }) => {
    const [inputEmail, setInputEmail] = useState(''); 
    const [inputPassword, setInputPassword] = useState('');

    const getCredentials = async () => {
        if(inputEmail.length <= 1 || inputPassword.length <= 1 ) {
            return handleRequestState('Veuillez remplir les 2 champs pour vous connecter', '#D83A56');
        }

        await axios.post('https://127.0.0.1:8000/api/login_check', {
            username: inputEmail,
            password: inputPassword
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            handleRequestState('Vous êtes bien connecté ! Bienvenue ! ', 'darkgreen');
        }).catch(errors => {
            let error = errors.response.status === 401 ? 'Mauvais identifiants...' : 'Une erreur est apparue lors de la connexion au serveur, veuillez réessayer plus tard ...';
            handleRequestState(error, '#D83A56');
        })
    }

    const handleEmail = (e) => {
        setInputEmail(e.target.value);
        handleRequestState('', 'transparent');
    }

    const handlePassword = (e) => {
        setInputPassword(e.target.value);
        handleRequestState('', 'transparent');
    }

    return (
        <>
            <div className="user-connexion_form" onKeyUp={(e) => e.key === 'Enter' ? getCredentials() : null}>
                <input type="text" name="email" placeholder="Adresse email" onChange={(e) => handleEmail(e)} />
                <input type="password" name="password" placeholder="Mot de passe" onChange={(e) => handlePassword(e)} />
            </div>
            <div className="user-connexion_btn" role="button" tabIndex="0">
                <img className="user-connexion_img" alt="bouton_de_connexion" src={loginBtn} onClick={() => getCredentials()}/>
            </div>
        </>
    )
}

export default Login;
