import st from './App.module.scss';

import Container from './components/Container';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
// import Text from './components/Text';
import Heading from './components/Heading';
import CharacterCard from './components/CharacterCard';
import { useState } from 'react';
import CHARACTERS from './components/CharacterCard/CHARACTERS';

function App() {
  const [characters, setCharacters] = useState(CHARACTERS);

  const handleLikeClick = (id) => {
    // let card = characters.find((item) => item.id)

    setCharacters(prevState => prevState.map((card) => {
      if (card.id === id) {
        card.isLike = !card.isLike;
      }
      return card;
    }))
  }
  return (
    <div className="App">
      <Header />
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
                  />
                )
              })
            }
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
