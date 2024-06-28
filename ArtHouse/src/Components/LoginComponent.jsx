import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArtHouseLogo from "../assets/ArtHouse_logo.png";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthApi";
import GoogleButton from 'react-google-button';
import '../Sass/LoginComponent.scss';
import { toast } from 'react-toastify';

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();
    const login = async () => {
        try{
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success('Signed In to ArtHouse!');
            navigate('/home');
        }
        catch(err){
            console.log(err);
            toast.error('Please check your credentials');
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
                <h1 className="heading">Sign in</h1>
                <p className="sub-heading">Share your talents with the world</p>
                
                <div className="auth-inputs">
                    <input 
                        onChange={(event) =>
                            setCredentials({...credentials, email: event.target.value})
                        }
                        type="email"
                        className="common-input"
                        placeholder="Email or Phone"
                    />
                    <input 
                        onChange={(event) =>
                            setCredentials({...credentials, password: event.target.value})
                        }
                        type="password"
                        className="common-input"
                        placeholder="Password"
                    />
                </div>
                <button onClick={login} className="login-btn">
                    Sign in
                </button>
            </div>
            <hr class="hr-text" data-content="or" />
            <div className="google-btn-container">
                {/* {console.log('Rendering Google button')} */}
                <GoogleButton
                    style={{ width: '300px' }}
                    onClick={googleSignIn}
                />

                <p className="go-to-signup">
                    New to ArtHouse?{" "}
                    <span className="join-now" onClick={() => navigate('/register')}>
                        Join now
                    </span>
                </p>
            </div>
        </div>
    );
}