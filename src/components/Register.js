import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { REGISTER } from '../constants/constants';

const Register = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState("");

    const onSignUp = async () => {
        if(password.length === 0 || username.length === 0 || confirm.length === 0) 
            return alert("Fields cannot be empty");
        if(password.length < 8) return alert("Minimum 8 characters");
        if(password !== confirm) return alert("Passwords not matching");
        await sendUserDataToServer();
        return alert("Registeration successfull");
        // <Redirect to={{pathname : '/login'}} />
    }

    return (
        <div className="register">
            <div className="register-form-container">

                <h2>Register</h2>

                <input 
                    className="username"
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                    className="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input 
                    className="confirm"
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirm(e.target.value)}
                />

                <button onClick={() => onSignUp()}>
                    Sign up
                </button>

                <div className="message-container">
                    <span>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </span>
                </div>

            </div>
        </div>
    );

    function sendUserDataToServer(){
        axios.post(REGISTER, {
            username : username,
            password : password
          })
          .then((response) => {
            console.log(response.data);
          }, (error) => {
            console.log("Error");
            console.log(error);
          });
    }

}

export default Register;
