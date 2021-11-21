import React from 'react'
import styled, { keyframes } from 'styled-components'


const Loading = () => {
    return (
        <>
            <LoadingIcon />
        </>
    )
}

export default Loading

const Load8 = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
`

const LoadingIcon = styled.div`
    position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: 4em;
    height: 4em;
    border: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid #000000;
    border-radius: 50%;
    animation: ${Load8} 1.1s infinite linear;
    transition: opacity 0.3s;
    @media (max-width: 800px) {
        width: 2em; 
        height: 2em; 
    }
`

