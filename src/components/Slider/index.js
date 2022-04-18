import Container from '../Container';
import Heading from '../Heading';

import st from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={st.section}>
            <div className={st.slider}>
                <Container className={st.sliderContent}>
                    <Heading underline> 
                    Triple Triad Game
                    </Heading>
                    <Heading lvl={2}
                    > 
                    Wow H2
                    </Heading>
                    <div className={st.call}>
                        <button className={st.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;