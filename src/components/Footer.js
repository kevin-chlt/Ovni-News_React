import React from 'react'
import copyright from '../images/197px-Copyright.png';

const Footer = () => {
    return (
        <div style={{height: '10vh', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}} className="footer-copyright">
            <img style={{height: '25px', marginRight: '10px'}} className="copyright-img" src={copyright} alt="copyright_picture" />
            <span style={{fontStyle: 'italic'}} className="copyright-text"> Données provenant de l'API "API NEWS"<br/> Reproduction interdite. </span>
        </div>
    )
}

export default Footer;
