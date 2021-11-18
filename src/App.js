import './styles/header.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetArticlesList from "./components/GetArticlesList";
import Header from './components/Header'
import Accueil from './pages/Accueil';
import { useState } from 'react'


function App() {
    const [category, setCategory] = useState('');

    const changeCategory = (category) => {
        setCategory(category);
    }

    return (
      <Router>
        <Header changeCategory={changeCategory} />

        <Switch>
            <Route path="/:category" render={(props) => <GetArticlesList category={category}{...props} />} />
              
            <Route path="/"> <Accueil /> </Route> 

        </Switch>
      </Router>

      )
}

export default App;

