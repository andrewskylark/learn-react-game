import { useState } from 'react';

import st from './App.module.scss';

import Container from './components/Container';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';
import CHARACTERS from './consts/CHARACTERS';
import Biography from './pages/Biography';

function App() {
  const [characters, setCharacters] = useState(CHARACTERS);
  const [id, setId] = useState(null);
  
  const handleLikeClick = (id) => {

    setCharacters(prevState => prevState.map((card) => {
      if (card.id === id) {
        card.isLike = !card.isLike;
      }
      return card;
    }))
  }
  const handleBioClick = (id) => {
    setId(id)
  }
  const handleBackClick = () => {
    setId(null)
  }

  const mainContent = 
  <>
    <Slider />
    <section className={st.cardSection}>
      <Container>
        <div className={st.cardTitle}>
          <Heading underline>
            Marvel Cards
          </Heading>
          <Heading lvl={2}>
            Choose your best five
          </Heading>
        </div>
        <div className={st.cardWrapper}>
          {
            characters.map((item) => {
              return (
                <CharacterCard
                  key={item.id}
                  id={item.id}
                  charName={item.name}
                  humanName={item.humanName}
                  thumb={item.thumbnail.path}
                  descr={item.description}
                  isLike={item.isLike}
                  onLikeClick={handleLikeClick}
                  onBioClick={handleBioClick}
                />
              )
            })
          }
        </div>
      </Container>
    </section>
  </>;

  return (
    <div className="App">
      <Header />
      {/* if there is card ID in state (on click on Bio) render <Biography/> instead of main page content */}
      {id ? <Biography id={id} onBackClick={handleBackClick} /> : mainContent}

      <Footer />
    </div>
  );
}

export default App;
