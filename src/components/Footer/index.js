import st from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={st.root}>
            <div className={st.container}>
                <div className={st.footerWrap}>
                    Coded with
                    <span className={st.heart}></span>
                    by you
                </div>
            </div>
        </footer>
    )
}

export default Footer;