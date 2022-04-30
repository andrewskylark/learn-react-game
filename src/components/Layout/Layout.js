import { Outlet, useMatch } from 'react-router-dom'
import st from './Layout.module.scss'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../Container';

const Layout = () => {
    const match = useMatch({ path: '/' });
    
    return (
        <div className={st.root}>
            <Header />
            <main className={st.main}>
                {
                    match !== null ? <Outlet /> :
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