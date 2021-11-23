import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Header from './components/Header'
import Accueil from './pages/Accueil';
import Articles from "./pages/Articles";
import Details from "./pages/Details";
import Registration from "./pages/Registration";
import Helptext from './components/Helptext';



export default function App() {
  const [errors, setErrors] = useState('');

  const handleErrors = (errors) => {
    setErrors(errors); 
  }

    return (
  <>
    <Helptext content={errors} />
    <Header />
      
    <Routes>
        <Route path="/registration" element={<Registration handleErrors={handleErrors} />} />
        <Route path="/:categoryId/:articleId" element={<ChildTwo />} />
        <Route path="/:categoryId" element={<Child />} />
        <Route path="/" element={<Accueil />} />
    </Routes>
  </>
      )
}


function Child() {
  let  params = useParams(); 
  return (
      <Articles category={params.categoryId} />
  )
}

function ChildTwo () {
  let params = useParams(); 
  return (
    <Details category={params.categoryId} articleId={params.articleId} />
  )
}
