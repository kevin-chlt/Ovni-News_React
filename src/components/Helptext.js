import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'

const Helptext = ({ content, background }) => {
    const [open, setOpen] = useState(false); 

    useEffect(() => {
        if(content !== '') {
            setOpen(true);

            setTimeout(() => {
                setOpen(false);
            }, 3000)
        }
    }, [content])


    return ( 
        <HelpTextContainer open={open} background={background} content={content}>
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
    opacity: ${props => props.open ? '1' : '0'};
    background-color: ${props => props.background};
    transition: opacity 1s;
    width: 100%;
    padding: 10px 0;
    text-align: center; 
    position: fixed; 
    top: 0; 
    z-index: ${props => props.open ? '0' : '-1' };
`
