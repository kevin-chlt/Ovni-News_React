import { Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import Header from './components/Header/Header'
import Accueil from './pages/Accueil';
import Articles from "./pages/Articles";
import Details from "./pages/Details";
import Registration from "./pages/Registration";
import Helptext from './components/Helptext'
import './services/AxiosInterceptor';
import Authors from "./pages/Authors";


export default function App() {
  const [requestState, setRequestState] = useState({
    content: '',
    background:'transparent'
  });
  const [user, setUser] = useState('');

  const handleRequestState = useCallback ((content, background) => {
    setRequestState({ 
        content: content,  
        background: background
      }); 
  }, [])

  const handleUser = useCallback( user => {
    setUser(user);
  }, [])
  
    return (
        <>
          <Helptext {...requestState} />
          <Header handleRequestState={handleRequestState} handleUser={handleUser} user={user} />
            
          <Routes>
              <Route path="authors/:authorId" element={<Authors handleRequestState={handleRequestState} />} />
              <Route path="registration" element={<Registration handleRequestState={handleRequestState} />} />
              <Route path="articles/details/:articleId" element={<Details handleRequestState={handleRequestState} user={user} />} />
              <Route path="articles/:categoryId" element={<Articles handleRequestState={handleRequestState} />} />
              <Route path="*" element={<Accueil />} />
          </Routes>
        </>
      )
}