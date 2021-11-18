import { Routes, Route, useParams } from "react-router-dom";
import './styles/header.css';
import Header from './components/Header'
import Accueil from './pages/Accueil';
import GetArticlesList from './components/GetArticlesList';


export default function App() {
    return (
  <>
    <Header />
      
    <Routes>
          <Route path="/:category" element={<Child />} />
          <Route path="/" element={<Accueil />} />
    </Routes>
  </>
      )
}


function Child() {
  let  params = useParams(); 
  return (
      <GetArticlesList category={params.category} />
  )
}