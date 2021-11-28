import '../../styles/header/public_panel.css';
import React from 'react'
import Login from "./Login";
import styled from "styled-components";
import switcherForm from '../../images/house-user.svg';
import { Link } from "react-router-dom";
import { useState } from "react";


const PublicPanel = ({ handleRequestState }) => {
    const [switchState, setSwitchState] = useState(false); 

    return (
        <>
        
        <SubscribeLink to="/registration" className="user-subscribe_link" switchState={switchState}>Inscrivez-vous </SubscribeLink>
        
        <FormLoginWrapper switchState={switchState}>
            <Login handleRequestState={handleRequestState} />
        </FormLoginWrapper>

        <div className="small-switchIcon_container">
            <img src={switcherForm} onClick={() => setSwitchState(!switchState)} className="small-connexion_icon" alt="image_form_switch" />
        </div>

        </>
    )
}

export default PublicPanel

const FormLoginWrapper = styled.div`
    display: flex;
    padding-right: 10px;
    @media (max-width: 1400px) {
        width: auto; 
    }
    @media (max-width: 900px) {
        display: ${props => props.switchState ? 'none' : 'flex'};
        justify-content: center;
    }
    @media(max-width: 540px) {
        display: ${props => props.switchState ? 'none' : 'flex'};
        justify-content: center;
    }
`

const SubscribeLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 15px;
    background: rgba(216, 58, 86, 0.85);
    display: flex;
    align-self: center;
    justify-self: center;
    transition: 0.5s;
    border-radius: 5px;
    font-family: Otomanopee One, sans-serif;
    &:hover {
        background: #215f00;
        padding: 20px;
    }
    @media (max-width: 900px) {
        display: ${props => props.switchState ? 'flex' : 'none'};
    }
    @media (max-width: 540px) {
        padding: 10px;
        font-size: 0.9rem;
        &:hover{
            padding: 15px;
        }
    }


`