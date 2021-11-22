import React, { useState } from 'react'
import '../styles/registration.css';
import styled from 'styled-components'; 
import logo from '../images/logo_transparent.svg'
import { Link } from 'react-router-dom';


const Registration = () => {
    const [counter, setCounter] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [user, setUser] = useState({}); 
    const form = [
        {
            placeholder: 'Entrer une adresse email valide',
            type: 'email',
            label: 'Email',
        },
        {
            placeholder: 'Taper votre prénom',
            type: 'text',
            label: 'Prénom',
            pattern: /^[.A-zÀ-ÿ-]+$/
        },
        {
            placeholder: 'Taper votre nom',
            type: 'text',
            label: 'Nom',
            pattern: /^[.A-zÀ-ÿ-]+$/
        },
        {
            placeholder: 'Inserer un mot de passe sûr',
            type: 'password',
            label: 'Mot de passe',
            
        },
        {
            placeholder: 'Quand êtes vous née ? (JJ/MM/AAAA)',
            type: 'date',
            label: 'Date de naissance', 
        },
    ];

    const validate = () => {
        setCounter(counter +1)
        if(form[counter -1].pattern) {
            if(inputValue.match(form[counter -1].pattern)){
                setUser({...user}, form[counter -1].label: inputValue);
            } 
        }
        setInputValue(''); 
        console.log(user);
    }

    return (
        <Main>
            <form method="POST" id="form" className="registration-form">
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
                    <label id="label">{form[counter -1].label}</label>
                    <input type={form[counter -1].type} value={inputValue} placeholder={form[counter -1].placeholder} onChange={(e) => setInputValue(e.target.value)} required/>
                </div>
                <div className="btn-container">
                    {counter > 1 ? <button type="button" onClick={() => setCounter(counter -1)}> Précédent </button> : null} 
                    <span className="counter_text">{counter}/5</span>
                    {counter === 5 ? <button type="button"> M'inscrire</button> : null} 
                    {counter <= 4 ? <button type="button" onClick={() => validate()}> Suivant </button> : null}
                </div>
            </form>
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