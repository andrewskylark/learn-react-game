import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => localStorage.getItem('userEmail') ? localStorage.getItem('userEmail') : null);

    const signIn = (vals, callback) => {
        setUser(vals);
        localStorage.setItem('userEmail', vals.email);
        callback && callback();
    }
    const signOut = (callback) => {
        localStorage.removeItem('userEmail');
        setUser(null);
        callback && callback();
    }

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return React.useContext(AuthContext);//our own hook
}
export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (auth.user === null) {
        return <Navigate to="/login" state={ {from: location.pathname} } replace />
    }

    return children;
}


export default AuthProvider;