import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Biography from './pages/Biography';
import Contacts from './pages/Contacts';
import About from './pages/About';

import st from './App.module.scss';

function App() {
  // const handleBackClick = () => {
  //   setId(null)
  // }

  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/biography" element={<Biography id={1011334}/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    // <div className="App">
    //   {id ? <Biography id={id} onBackClick={handleBackClick} /> : mainContent}
    // </div>
  );
}

export default App;
