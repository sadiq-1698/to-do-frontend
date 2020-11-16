import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import { LOGGED_IN } from '../constants/constants';


const Register = () => {

    const { setIsAuth } = useContext(AuthContext);

    const onSignIn = () => {
        localStorage.setItem(LOGGED_IN, true);
        if(localStorage.getItem(LOGGED_IN) === "true") setIsAuth(true);
    }

    return (
        <div className="register">
            <div className="register-form-container">
                <h2>Register</h2>
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
                <input 
                    className="confirm"
                    type="password"
                    placeholder="Confirm password"
                />
                <button onClick={() => onSignIn()}>
                    Sign up
                </button>
                <div className="message-container">
                    <span>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </span>
                </div>
                <Link to="/profile">profile</Link>         
            </div>
        </div>
    )
}

export default Register;
