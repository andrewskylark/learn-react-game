import st from './Slider.module.css';

const Slider = () => {
    return (
        <section className={st.section}>
            <div className={st.slider}>
                <div className={st.container + ' ' + st.sliderContent}>
                    <h1 className={st.header}>Wow</h1>
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