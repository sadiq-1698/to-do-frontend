import React,{ useState, useContext } from 'react';
import { ACCESS_TOKEN } from '../constants/constants';

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

    const[isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem(ACCESS_TOKEN) != null);

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