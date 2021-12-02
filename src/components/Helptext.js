import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'

const Helptext = ({ content, background }) => {
    const [open, setOpen] = useState(false); 
    const [display, setDisplay] = useState(false); 

    useEffect(() => {
        if(content !== '') {
            setOpen(true);
            setDisplay(true); 

            setTimeout(() => {
                setOpen(false);

                setTimeout(() => {
                    setDisplay(false)
                }, 1100)
                
            }, 4000)
        }
    }, [content])


    return ( 
        <HelpTextContainer open={open ? '1' : '0'} background={background} display={display ? '1' : '-1'}>
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
    opacity: ${props => props.open};
    background-color: ${props => props.background};
    transition: opacity 1s;
    width: 100%;
    padding: 10px 0;
    text-align: center; 
    position: fixed; 
    top: 0; 
    z-index: ${props =>  props.display};
`
