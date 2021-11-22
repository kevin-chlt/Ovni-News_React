import React, { useState } from 'react'
import '../styles/registration.css';
import styled from 'styled-components'; 
import logo from '../images/logo_transparent.svg'
import { Link } from 'react-router-dom';
import Helptext from '../components/Helptext';


const Registration = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [user, setUser] = useState([]); 
    const [errors, setErrors] = useState('');
    const form = [
        {
            placeholder: 'Entrer une adresse email valide',
            type: 'email',
            label: 'Email',
            pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
            nameInDb: 'email'
        },
        {
            placeholder: 'Taper votre prénom',
            type: 'text',
            label: 'Prénom',
            pattern: /^[.A-zÀ-ÿ-]+$/,
            nameInDb: 'firstname'
        },
        {
            placeholder: 'Taper votre nom',
            type: 'text',
            label: 'Nom',
            pattern: /^[.A-zÀ-ÿ-]+$/,
            nameInDb: 'lastname'
        },
        {
            placeholder: 'Inserer un mot de passe sûr',
            type: 'password',
            label: 'Mot de passe',
            nameInDb: 'password'
        },
        {
            placeholder: 'Quand êtes vous née ? (JJ/MM/AAAA)',
            type: 'date',
            label: 'Date de naissance', 
            nameInDb: 'birthdate'
        },
    ];

    const handleInput = (e) => {
        setInputValue(e.target.value); 
        setErrors('');
    }

    const validate = () => {
        if(form[counter].pattern && !patternValidation()) {
            return setErrors('Champ invalide');
        }else if (counter === 4) {
            // Call method insert in DB.
        }

        setCounter(counter +1)

        let key = form[counter].nameInDb
        setUser([...user, {[key] : inputValue}]);
        setInputValue(''); 
    }

    const patternValidation = () => {
        if(inputValue.match(form[counter].pattern)){
            return true; 
        }

        return false;
    }

    const handlePreviousBtn = () => {
        setCounter(counter -1); 
        let lastInfo = user[user.length === 0 ? user.length : user.length -1]; 
        let newUser = user.filter(info => info !== lastInfo )
        setUser(newUser)
    }



    return (
        <Main>
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
                    { inputValue.length >= 1 ? <label>{form[counter].label}</label> : null }
                    <input type={form[counter].type} value={inputValue} placeholder={form[counter].placeholder} onKeyUp={(e) => e.key === 'Enter' ? validate() : null } 
                    onChange={(e) => handleInput(e) } required/>
                    <Helptext content={errors}/>
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

export default Registration

const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(216, 58, 86, 0.7);
`