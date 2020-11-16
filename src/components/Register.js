import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
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
                <button>
                    Sign up
                </button>
                <div className="message-container">
                    <span>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </span>
                </div>          
            </div>
        </div>
    )
}

export default Register;
