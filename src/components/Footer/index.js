import Container from '../Container';
import st from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={st.root}>
            <Container>
                <div className={st.footerWrap}>
                    Coded with
                    <span className={st.heart}></span>
                    by you
                </div>
            </Container>
        </footer>
    )
}

export default Footer;