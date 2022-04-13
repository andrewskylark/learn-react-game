import st from './Header.module.css';
import logo from '../../assets/logo.png';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    return (
        <header className={st.root}>
            <div className={st.header}>
                <div className={st.container}>
                    <div className={st.logo}>
                        <img src={logo} alt="Triple Triad logo png" />
                    </div>
                    <ul className={st.nav}>
                        {MENU.map(item => <li><a href="!#">{item}</a></li>)}                    
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;