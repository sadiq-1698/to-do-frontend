import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation, Redirect } from "react-router-dom";
import { ACCESS_TOKEN, LOGIN } from '../constants/constants';
import { useUpdateAuth } from '../contexts/AppAuthContext';

const Login = () => {

    const[redirectTo, setRedirectTo] = useState(false);

    const { state } = useLocation();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const { login } = useUpdateAuth();

    if(redirectTo){
        return <Redirect to={state? state.from : '/'} />
    }

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

    function onLogin(){
        axios.post(LOGIN, {
            username : username,
            password : password
          })
          .then((response) => {
            sessionStorage.setItem(ACCESS_TOKEN, response.data.Token);
            login();
            setRedirectTo(true);
          }, (error) => {
            console.log("Error");
            console.log(error);
          });
    }

}

export default Login;
