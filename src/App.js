import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Text el="p" italic strong>
        Children of Text El in bold italic
      </Text>
      <Footer />
    </div>
  );
}

export default App;
