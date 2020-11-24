import React, { useState } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { Link, useLocation, Redirect } from "react-router-dom";
import { LOGIN } from '../constants/constants';
import { useUpdateAuth } from '../contexts/AppAuthContext';

const Login = () => {

    const[redirectTo, setRedirectTo] = useState(false);
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showLoader, setShowLoader] = useState(false);

    const { state } = useLocation();

    const { login } = useUpdateAuth();

    if(redirectTo){
        return <Redirect to={state ? state.from : '/'} />
    }

    return (
        <div className="register login">
            {
                showLoader ? <div className="overlay"></div> : null
            }
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
                    {
                        showLoader ? <Loader /> : "Sign in"
                    }
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
        setShowLoader(true);
        axios.post(LOGIN, {
            username : username,
            password : password
          })
          .then((response) => {
            login(response.data.Token);
            setRedirectTo(true);
          }, (error) => {
            alert("Invalid username/password");
            setShowLoader(false);
          });
    }

}

export default Login;
