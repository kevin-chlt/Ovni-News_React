import { Routes, Route, useParams } from "react-router-dom";
import Header from './components/Header'
import Accueil from './pages/Accueil';
import Articles from "./pages/Articles";
import GetArticlesList from "./components/GetArticlesList";


export default function App() {
    return (
  <>
    <Header />
      
    <Routes>
          <Route path="/:id" element={<Child />} />
          <Route path="/" element={<Accueil />} />
    </Routes>
  </>
      )
}


function Child() {
  let  params = useParams(); 
  return (
      <Articles category={params.id} />
  )
}