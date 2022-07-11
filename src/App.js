import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Characters from './pages/Characters';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import LikesProvider from './pages/LikesProvider';

function App() {
  //index === path="/"
  //path="biography/:id" - dynamic path, const { id } = useParams() on Bio page
  // <a> => <Link to={`/biography/${id}`} in Card component, redirects to bio page from current card 

  return (
    <LikesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<Biography />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </LikesProvider>
  );
}

export default App;
