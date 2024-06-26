import React, { useState } from "react";
import { LoginAPI } from "../api/AuthApi";
import '../Sass/LoginComponent.scss';

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await LoginAPI(credentials.email, credentials.password);
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    };
    return (
        <div className="login-wrapper">
            <h1>LoginComponent</h1>
            <div className="auth-inputs">
                <input 
                    onChange={(event) =>
                        setCredentials({...credentials, email: event.target.value})
                    }
                    className="common-input"
                    placeholder="Enter your Email"
                />
                <input 
                    onChange={(event) =>
                        setCredentials({...credentials, password: event.target.value})
                    }
                    className="common-input"
                    placeholder="Enter your Password"
                />
            </div>
            <button onClick={login} className="Login-btn">
                Log In to ArtHouse
            </button>
        </div>
    );
}