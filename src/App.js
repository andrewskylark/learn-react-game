import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Contacts from './pages/Contacts';
import About from './pages/About';

// import st from './App.module.scss';

function App() {
  // const handleBackClick = () => {
  //   setId(null)
  // }
  //index = path="/"
  //path="biography/:id" - dynamic path, const { id } = useParams() on Bio page

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="biography/:id" element={<Biography id={1011334} />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    // <div className="App">
    //   {id ? <Biography id={id} onBackClick={handleBackClick} /> : mainContent}
    // </div>
  );
}

export default App;
