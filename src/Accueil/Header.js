import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import './header.css';


export default function Header() {
    return (
      <Router>
        <Links />
      </Router>
    );
  }

    const useQuery = () => {
        const { category } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(category), [category]);
    }
    
    
    const Links = () => {
        let query = useQuery();
        return (
            <>
              <Link className="header-nav_link general" to="/articles?category=general">
                  Général
              </Link>
              <Link className="header-nav_link business" to="/articles?category=business">
                  Economie
              </Link>
              <Link className="header-nav_link health" to="/articles?category=health">
                  Santé
              </Link>
              <Link className="header-nav_link sports" to="/articles?category=sports">
                  Sports
              </Link>
              <Link className="header-nav_link entertainment" to="/articles?category=entertainment">
                  People
              </Link>
              <Link className="header-nav_link science" to="/articles?category=science">
                  Science
              </Link>
              <Link className="header-nav_link technology" to="/articles?category=technology">
                  Technologie
              </Link>
            
              
            </>
        );
    }
