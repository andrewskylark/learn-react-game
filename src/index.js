import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';
import AuthProvider from "./context/AuthContext/AuthContext";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
