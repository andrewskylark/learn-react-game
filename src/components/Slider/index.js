import Heading from '../Heading';
import st from './Slider.module.css';
import cN from 'classnames';

const Slider = () => {
    return (
        <section className={st.section}>
            <div className={st.slider}>
                <div className={cN(st.container, st.sliderContent)}>
                    <Heading 
                    title="Wow Wow"
                    />
                    <h2 className={st.subheader}>Wow.Wow.Wow</h2>
                    <div className={st.call}>
                        <button className={st.button}>Wow</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;