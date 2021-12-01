import { Routes, Route, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import Header from './components/Header/Header'
import Accueil from './pages/Accueil';
import Articles from "./pages/Articles";
import Details from "./pages/Details";
import Registration from "./pages/Registration";
import Helptext from './components/Helptext'
import './components/AxiosInterceptor';
import Authors from "./pages/Authors";


export default function App() {
  const [requestState, setRequestState] = useState({
    content: '',
    background:'transparent'
  });

  const handleRequestState = useCallback ((content, background) => {
    setRequestState({ 
        content: content,  
        background: background
      }); 
  }, [])

    return (
  <>
    <Helptext {...requestState} />
    <Header handleRequestState={handleRequestState}/>
      
    <Routes>
        <Route path="authors/:authorId" element={<Child />} />
        <Route path="registration" element={<Registration handleRequestState={handleRequestState}/>} />
        <Route path="articles/details/:articleId" element={<ChildTwo />} />
        <Route path="articles/:categoryId" element={<Child />} />
        <Route path="*" element={<Accueil />} />
    </Routes>
  </>
      )
}


function Child() {
  let  params = useParams(); 

  if(params.categoryId){
      return (
      <Articles categoryId={params.categoryId} />
    )
  }

  if(params.authorId) {
    return (
      <Authors authorId={params.authorId} />
    )
  }
}


function ChildTwo () {
  let params = useParams(); 
  return (
    <Details category={params.categoryId} articleId={params.articleId} />
  )
}
