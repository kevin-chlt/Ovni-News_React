import React, { useState, useEffect } from 'react'
import '../styles/registration.css';
import styled from 'styled-components'; 
import logo from '../images/logo_transparent.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Helptext from '../components/Helptext'


const Registration = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [user, setUser] = useState([]); 
    const [requestState, setRequestState] = useState({
        content: '',
        background:'transparent'
    });
    const form = [
        {
            placeholder: 'Entrer une adresse email valide',
            type: 'email',
            label: 'Email',
            pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
            nameInDb: 'email', 
            autocomplete: 'email'
        },
        {
            placeholder: 'Inserer un mot de passe sûr',
            type: 'password',
            label: 'Mot de passe',
            nameInDb: 'password', 
            autocomplete: 'new-password'
        },
        {
            placeholder: 'Taper votre prénom',
            type: 'text',
            label: 'Prénom',
            pattern: /^[.A-zÀ-ÿ-]+$/,
            nameInDb: 'firstname',
            autocomplete: 'given-name'
        },
        {
            placeholder: 'Taper votre nom',
            type: 'text',
            label: 'Nom',
            pattern: /^[.A-zÀ-ÿ-]+$/,
            nameInDb: 'lastname',
            autocomplete: 'family-name'
        },
        {
            placeholder: '',
            type: 'date',
            label: 'Date de naissance', 
            nameInDb: 'birthdate', 
            autocomplete: 'bday'
        },
    ];
  

    const handleRequestState = (content, background) => {
      setRequestState({ 
          content: content,  
          background: background
        }); 
    }
  
    const handleInput = (e) => {
        setInputValue(e.target.value); 
        handleRequestState('', 'transparent')
    }

    const handlePreviousBtn = () => {
        setCounter(counter -1); 
        let lastInfo = user[user.length === 0 ? user.length : user.length -1]; 
        let newUser = user.filter(info => info !== lastInfo )
        setUser(newUser)
        setInputValue('');
    }

    const validate = () => {
        if((form[counter].pattern && !patternValidation()) || inputValue.length < 1) {
            handleRequestState('Le champs est invalide ! Veuillez vérifier le format utilisé.', '#D83A56')
            return; 
        } 

        let key = form[counter].nameInDb
        setUser([...user, {[key] : inputValue}]);
        setInputValue(''); 
        setCounter(counter +1);
    }
          
    useEffect(() => {
        if (counter === 5) {
            setCounter(0); 
            insertUserInDb(); 
        } 
    }, [counter])

    const patternValidation = () => {
        if(inputValue.match(form[counter].pattern)){
            return true; 
        }
        return false;
    }

    const insertUserInDb = () => {
        const data = Object.assign({}, ...user);
        axios.post('https://127.0.0.1:8000/registration', {data})
        .then(() =>{
            handleRequestState(`Bienvenue ${data.firstname}`, 'darkgreen');
            // Put the token in browser storage
        })
        .catch((errors) => {
            // If error coming from server side validator bundle show to user, else show generic error
            if (errors.response.status === 422) {
                handleRequestState(errors.response.data.violations[0].message, '#D83A56')
            } else {
                handleRequestState('Une erreur est apparu lors de la connexion au serveur, veuillez réésayer plus tard.', '#D83A56')
            }
        })
        .then(() => setUser([])); 
    }


    return (
        <Main>
            <Helptext {...requestState} />
            <div className="registration-form">
                <div className="container_title">
                    <Link className="link-logo" to="/">
                        <img className="logo-header" src={logo} alt="logo" />
                    </Link>
                    <h1>Formulaire d'inscription</h1>
                </div>
                <div className="container-text">
                    <p>Afin de pouvoir accéder à certaines fonctionnalitée de l'OVNI, vous aurez besoin d'un compte.</p>
                    <p>Pour vous enregistrer, veuillez écrire votre nom et prénom ainsi que votre date de naissance, un mot de passe et une adresse email valide.</p>
                </div>

                <div className="input_container">
                    { inputValue.length >= 1 ? <label>{form[counter >= 5 ? 0 : counter].label}</label> : null }
                    <input type={form[counter >= 5 ? 0 : counter].type} autoComplete={form[counter >= 5 ? 0 : counter].autocomplete} value={inputValue} placeholder={form[counter >= 5 ? 0 : counter].placeholder} onKeyUp={(e) => e.key === 'Enter' ? validate() : null } 
                    onChange={(e) => handleInput(e)} required/>
                </div>
                <div className="btn-container">
                    {counter > 0 ? <button type="button" onClick={() => handlePreviousBtn() }> Précédent </button> : null} 
                    <span className="counter_text">{counter +1}/5</span>
                    {counter === 4 ? <button type="button" onClick={() => validate()}> M'inscrire</button> : null} 
                    {counter <= 3 ? <button type="button" onClick={() => validate()}> Suivant </button> : null}
                </div>
            </div>
        </Main>
    )
}

export default Registration;

const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(216, 58, 86, 0.7);
`