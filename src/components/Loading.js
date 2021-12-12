import React from 'react';
import styled, { keyframes } from 'styled-components';


const Loading = () => {
    return (
        <>
            <LoadingIcon />
        </>
    )
}

export default Loading;

const Load = keyframes`
    0% {
      transform: rotate(0deg);
    } 100% {
      transform: rotate(360deg);
    }
`

const LoadingIcon = styled.div`
    position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: 4em;
    height: 4em;
    border: 1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid #D83A56;
    border-radius: 50%;
    animation: 1s ${Load} linear infinite;
    @media (max-width: 800px) {
        width: 2em; 
        height: 2em; 
    }
`

