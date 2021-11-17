import React from "react";
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Header () {
    return (
      <Router>
        <Link className="header-nav_link general" to="/general">
            Général
        </Link>
        <Link className="header-nav_link business" to="/business">
            Economie
        </Link>
        <Link className="header-nav_link health" to="/health">
            Santé
        </Link>
        <Link className="header-nav_link sports" to="/sports">
            Sports
        </Link>
        <Link className="header-nav_link entertainment" to="/entertainment">
            People
        </Link>
        <Link className="header-nav_link science" to="/science">
            Science
        </Link>
        <Link className="header-nav_link technology" to="/technology">
            Technologie
        </Link>

        <Switch>
          <Route path="/:category" children={<Child />} />
        </Switch>

      </Router>
    );
}


function Child() {
    let { category } = useParams();

    return (
      <div>
        <h3>ID: {category}</h3>
      </div>
    );
  }

