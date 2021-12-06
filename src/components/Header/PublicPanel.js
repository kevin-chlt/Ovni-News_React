import '../../styles/header/public_panel.css';
import React from 'react'
import Login from "./Login";
import styled from "styled-components";
import switcherForm from '../../images/house-user.svg';
import { Link } from "react-router-dom";
import { useState } from "react";


const PublicPanel = ({ handleRequestState }) => {
    const [switchState, setSwitchState] = useState(true); 

    return (
        <>
        
        <Link to="/registration" className={`user-subscribe_link ${switchState ? '' : 'hide'}`}> Inscrivez-vous </Link>


        <FormLoginWrapper switchState={switchState}>
            <Login handleRequestState={handleRequestState} />
        </FormLoginWrapper>


        <div className="small-switchIcon_container">
            <img src={switcherForm} onClick={() => setSwitchState(!switchState)} className="small-connexion_icon" alt="image_form_switch" />
        </div>

        </>
    )
}

export default PublicPanel;

const FormLoginWrapper = styled.div`
    display: flex;
    padding-right: 10px;
    align-items: center; 
    justify-content: center;
    @media (max-width: 1400px) {
        grid-column: 2;
        grid-row: 1;
    }
    @media (max-width: 900px) {
        display: ${props => props.switchState ? 'none' : 'flex'};
        padding-right: 0; 
    }
`