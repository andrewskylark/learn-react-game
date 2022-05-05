import { Outlet, useMatch } from 'react-router-dom';
import React, { useEffect } from "react";
import st from './Layout.module.scss';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../Container';

const Layout = () => {
    const match = useMatch({ path: '/' });
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                let titleScrollTo = document.getElementById(hash);

                titleScrollTo && titleScrollTo.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });
            }, 2000)
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <div className={st.root}>
            <Header />
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