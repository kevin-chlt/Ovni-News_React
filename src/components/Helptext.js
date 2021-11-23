import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'

const Helptext = ({ content }) => {
    const [opacity, setOpacity] = useState(0); 

    useEffect(() => {
        if(content !== '') {
            setOpacity(1);

            setTimeout(() => {
                setOpacity(0);
            }, 4000)
        }
    }, [content])


    return (
    <HelpTextContainer content={content} opacity={opacity}>
        <HelpSpan>
            {content}
        </HelpSpan>
    </HelpTextContainer>
    )
}

export default Helptext;

const HelpSpan = styled.span`
    font-style: italic;
    color: #fff;   
`

const HelpTextContainer = styled.div`
    position: ${props => props.opacity === 1 ? 'relative' : 'absolute'} ; 
    opacity: ${props => props.opacity};
    transition: opacity 1s;
    background-color: #D83A56;
    width: 100%;
    padding: 10px 0;
    text-align: center; 
`
