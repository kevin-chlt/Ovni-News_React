import './styles/header.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetArticlesList from "./components/GetArticlesList";
import Header from './components/Header'
import Accueil from './pages/Accueil';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/:category" component={ GetArticlesList } />
            
          <Route exact path="/" component={Accueil} />
      </Switch>
    </Router>

    )
}

export default App;
