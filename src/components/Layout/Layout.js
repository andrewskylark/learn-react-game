import { Outlet } from 'react-router-dom'
import st from './Layout.module.scss'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = () => {
    return (
        <div className={st.root}>
            <Header />
            {/* Outlet => {children} */}
            <Outlet /> 
            <Footer />
        </div>
    );
};

export default Layout;