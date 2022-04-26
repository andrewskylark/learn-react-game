import { useEffect, useState } from 'react';
import cn from 'classnames';

import st from './Header.module.scss';
import logo from '../../assets/logo.png';
import Container from '../Container';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
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

    return (
        <header className={st.root}>

            <div className={cn(st.header, mutableClassName)}>
                <Container className={st.headerWrap}>

                    <div className={st.logo}>
                        <img src={logo} alt="Triple Triad logo png" />
                    </div>
                    <ul className={st.nav}>
                        {MENU.map((item, i) =>
                            <li key={i}> <a href="!#">{item}</a> </li>)}
                    </ul>

                </Container>
            </div>

        </header>
    )
}

export default Header;