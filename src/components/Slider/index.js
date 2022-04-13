import st from './Slider.module.css';
import Container from '../Container';

import Heading from '../Heading';

const Slider = () => {
    return (
        <section className={st.section}>
            <div className={st.slider}>
                <Container className={st.sliderContent}>
                    <Heading 
                    title="Wow Wow"
                    />
                    <h2 className={st.subheader}>Wow.Wow.Wow</h2>
                    <div className={st.call}>
                        <button className={st.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Slider;