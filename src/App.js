import st from './App.module.scss';


import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Text from './components/Text';
import Heading from './components/Heading';
import Container from './components/Container';

function App() {
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
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
