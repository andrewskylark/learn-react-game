import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import './index.scss';

import App from './App';
import AuthProvider from "./context/AuthContext/AuthContext";
import { store } from "./store";

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
