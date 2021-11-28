import '../../styles/header/public_panel.css';
import React from 'react'
import Login from "./Login";
import styled from "styled-components";
import switcherForm from '../../images/house-user.svg';
import { Link } from "react-router-dom";
import { useState } from "react";


const PublicPanel = ({ handleRequestState }) => {
    const [switchLoginFormToSubscribeLink, setSwitchLoginFormToSubscribeLink] = useState(true); 

    return (
        <>
        
        <Link to="/registration" className="user-subscribe_link">Inscrivez-vous</Link>

        <div className="small-connexion_container">
            <img src={switcherForm} onClick={() => setSwitchLoginFormToSubscribeLink(!switchLoginFormToSubscribeLink)} className="small-connexion_icon" alt="image_form_switch" />
        </div>

        <FormLoginWrapper switchLoginFormToSubscribeLink={switchLoginFormToSubscribeLink}>
            <Login handleRequestState={handleRequestState} />
        </FormLoginWrapper>
        </>
    )
}

export default PublicPanel

const FormLoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    @media (max-width: 1400px) {
        width: auto; 
    }
    @media (max-width: 900px) {
        display: ${props => props.switchLoginFormToSubscribeLink ? 'grid' : 'none'};
    }
`