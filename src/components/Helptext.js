import React from 'react'
import styled, { keyframes } from 'styled-components'

const Helptext = ({ content, success }) => {
    return (
        <HelpTextContainer>
            <HelpSpan success={success}>
                {content}
            </HelpSpan>
        </HelpTextContainer>
    )
}

export default Helptext

const HelpSpan = styled.span`
    color: ${props => props.success ? 'red' : 'green'};
`

const PopUp = keyframes`
    0% {
        height: 0; 
    } 100% {
        height: 20px;   
`

const HelpTextContainer = styled.div`
    display: ${props => props.success === null ? 'none' : 'block'};
    background-color: #ffffff;
    width: 100%;
    height: 20px;
    text-align: center;
    padding: 10px 0;
    transition: ${PopUp} 1s linear;
`
