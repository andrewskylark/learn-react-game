import { Outlet, useMatch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import st from './Layout.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../Container';

const Layout = () => {
    const match = useMatch({ path: '/' });
    const matchLogin = useMatch({ path: '/login' });
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            let titleScrollTo = document.getElementById(hash);

            window.addEventListener('load', () => {
                titleScrollTo && titleScrollTo.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });
            }, {// EventListener has options; this once - no need to remove Listener 
                once: true,
            })
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <div className={st.root}>
            { !matchLogin ? <Header /> : null} 
            <main className={st.main}>
                {
                    match ? <Outlet /> :
                        <Container>
                            {/* Outlet = {children} */}
                            <Outlet />
                        </Container>
                }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;