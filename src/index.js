import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useLocation } from 'react-router-dom';

import './index.scss';

import App from './App';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        if (hash !== null) {
            setTimeout(() => {
                let titleScrollTo = document.getElementById(hash);
        
                titleScrollTo && titleScrollTo.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });
            }, 2000)
        }
    }, [hash]);

    return null;
}

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

export default ScrollToTop;
