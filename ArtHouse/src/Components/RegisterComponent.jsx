import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArtHouseLogo from "../assets/ArtHouse_logo.png";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthApi";
import GoogleButton from 'react-google-button';
import '../Sass/LoginComponent.scss';
import { toast } from 'react-toastify';

export default function RegisterComponent() {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();
    const login = async () => {
        try{
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success('Account created!');
        }
        catch(err){
            console.log(err);
            toast.error('Cannot create your account');
        }
    };

    const googleSignIn = () =>{
        let response = GoogleSignInAPI();
        console.log(response);
    }
    return (
        <div className="login-wrapper">
            <img src={ArtHouseLogo} className="ArtHouseLogo"/>
            <div className="login-wrapper-inner">
                <h1 className="heading">Create Account</h1>
                <p className="sub-heading">Make the most of your professional life</p>
                
                <div className="auth-inputs">
                    <input 
                        onChange={(event) =>
                            setCredentials({...credentials, email: event.target.value})
                        }
                        type="email"
                        className="common-input"
                        placeholder="Email or Phone number"
                    />
                    <input 
                        onChange={(event) =>
                            setCredentials({...credentials, password: event.target.value})
                        }
                        type="password"
                        className="common-input"
                        placeholder="Password (6 or more characters)"
                    />
                </div>
                <button onClick={login} className="login-btn">
                    Sign up
                </button>
            </div>
            <hr class="hr-text" data-content="or" />
            <div className="google-btn-container">
                {/* {console.log('Rendering Google button')} */}
                <GoogleButton
                    className="google-btn"
                    onClick={googleSignIn}
                />

                <p className="go-to-signup">
                    Already on ArtHouse?{" "}
                    <span className="join-now" onClick={() => navigate('/')}>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
}