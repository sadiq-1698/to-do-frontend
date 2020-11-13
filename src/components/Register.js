import React from 'react';
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="register">
            <div className="register-form-container">
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
                    Sign up
                </button>
                <div>
                    <span>
                        Already have an account? <Link>Sign in</Link>
                    </span>
                </div>          
            </div>
        </div>
    )
}

export default Register;
