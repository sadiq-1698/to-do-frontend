import React,{ useState, useContext } from 'react';
import { LOGGED_IN } from '../constants/constants';

const AuthContext = React.createContext();
const UpdateAuthContext = React.createContext();

// custom hook for using auth status
export function useAuth(){
    return useContext(AuthContext);
}

// custom hook for updating auth status
export function useUpdateAuth(){
    return useContext(UpdateAuthContext);
}

// context provider function for basket items
export function AuthProvider({ children }){

    const[isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(LOGGED_IN) === "true");

    function login(){
        setIsLoggedIn(true);
    }

    function logout(){
        setIsLoggedIn(false);
    }

    return(
        <AuthContext.Provider value={isLoggedIn}>
            <UpdateAuthContext.Provider value={{login, logout}}>
                { children }
            </UpdateAuthContext.Provider>
        </AuthContext.Provider>
    );

}