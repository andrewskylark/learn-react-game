import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import st from './Header.module.scss';
import logo from '../../assets/logo.png';
import Container from '../Container';

const MENU = [
    { page: 'Home', url: '/' },
    { page: 'Characters', url: '/characters' },
    { page: 'Contacts', url: '/contacts' },
    { page: 'About', url: '/about' }
];

const Header = () => {
    const navigate = useNavigate();
    const [mutableClassName, setMutableClassName] = useState(null);

    useEffect(() => {
        const addScrollClass = () => {
            window.scrollY > 60 ? setMutableClassName(st.small) : setMutableClassName(null);
        }

        window.addEventListener(`scroll`, addScrollClass)
        //componemt will unmount
        return () => {
            window.removeEventListener(`scroll`, addScrollClass);
        }
    }, []);

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <header className={st.root}>

            <div className={cn(st.header, mutableClassName)}>
                <Container className={st.headerWrap}>

                    <div className={st.logo} onClick={handleLogoClick}>
                        <img src={logo} alt="Triple Triad logo png" />
                    </div>
                    <ul className={st.nav}>
                        {
                            MENU.map((item, i) =>
                                <li key={i}>
                                    <NavLink to={item.url}
                                        className={({ isActive }) => isActive ? st.active : null}
                                    >{item.page}</NavLink>
                                </li>
                            )}
                    </ul>

                </Container>
            </div>

        </header>
    )
}

export default Header;