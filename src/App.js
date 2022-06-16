import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Characters from './pages/Characters';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';

const LikesContext = React.createContext(null);
const LikesProvider = ({ children }) => {
  const [likedCards, setLikedCards] = useState([]);
  // console.log(likedCards)
  return (
    <LikesContext.Provider value={{
      likedCards,
      setLikedCards: (cards) => setLikedCards((prevState) => cards.filter((card) => card.isLike === true))
    }}>
      {children}
    </LikesContext.Provider>
  )
}

function App() {
  //index === path="/"
  //path="biography/:id" - dynamic path, const { id } = useParams() on Bio page
  // <a> => <Link to={`/biography/${id}`} in Card component, redirects to bio page from current card 
  // const [likedCards, setLikedCards] = useState([]);
  // console.log(likedCards)
  return (
  // <LikesContext.Provider value={{
  //   likedCards,
  //   setLikedCards: (cards) => setLikedCards((prevState) => cards.filter((card) => card.isLike === true))
  // }}>
   <LikesProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main context={LikesContext} />} />
        <Route path="characters" element={<Characters context={LikesContext} />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
    {/* </LikesContext.Provider> */}
  </LikesProvider>
  );
}

export default App;
