import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { LOGGED_IN, ACCESS_TOKEN, LOGIN } from '../constants/constants';
// import { useAuth } from '../contexts/AppAuthContext';

const Login = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    // const isAuth = useAuth();

    return (
        <div className="register login">
            <div className="register-form-container login">

                <h2>Login</h2>

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

                <button onClick={()=> onLogin()}>
                    Sign in
                </button>

                <div className="message-container">
                    <span>
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </span>
                </div>   

            </div>
        </div>
    );

    function updateLocalStorage (){
        localStorage.setItem(LOGGED_IN, true);
        localStorage.setItem(ACCESS_TOKEN, "bla-bla");
    }

    function onLogin(){
        console.log(username);
        console.log(password);
        axios.post(LOGIN, {
            username : username,
            password : password
          })
          .then((response) => {
            console.log(response);
            updateLocalStorage();
          }, (error) => {
            console.log("Error");
            console.log(error);
          });
    }


}

export default Login;
