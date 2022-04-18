import st from './Header.module.scss';
import logo from '../../assets/logo.png';
import Container from '../Container';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    return (
        <header className={st.root}>

            <div className={st.header}>
                <Container className={st.headerWrap}>

                    <div className={st.logo}>
                        <img src={logo} alt="Triple Triad logo png" />
                    </div>
                    <ul className={st.nav}>
                        {MENU.map((item, i) =>
                            <li key={i} ><a href="!#">{item}</a></li>)}
                    </ul>

                </Container>
            </div>

        </header>
    )
}

export default Header;