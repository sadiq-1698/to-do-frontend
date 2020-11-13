import React from 'react';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="register login">
            <div className="register-form-container login">
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
                <button>
                    Sign in
                </button>
                <div className="message-container">
                    <span>
                        Don't have an account? <Link to="/">Sign up</Link>
                    </span>
                </div>          
            </div>
        </div>
    )
}

export default Login;
