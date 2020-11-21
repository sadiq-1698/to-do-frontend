import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import { LOGGED_IN } from '../constants/constants';

const Login = () => {

    const { setIsAuth } = useContext(AuthContext);

    const onLogOut = () => {
        localStorage.setItem(LOGGED_IN, false);
        if(localStorage.getItem(LOGGED_IN) === "false") setIsAuth(false);
    }

    return (
        <div className="register login">
            <div className="register-form-container login">
                <h2>Login</h2>
                <input 
                    className="username"
                    type="text"
                    placeholder="Enter username"
                />
                <input 
                    className="password"
                    type="password"
                    placeholder="Enter password"
                />
                <button onClick={()=> onLogOut()}>
                    Sign in
                </button>
                <div className="message-container">
                    <span>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </span>
                </div>          
            </div>
        </div>
    )
}

export default Login;
