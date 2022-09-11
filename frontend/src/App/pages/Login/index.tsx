import React, { useState } from 'react';
import { loginState } from './model';
import './style.css';
import loginImg from "../../../static/images/login.png";
import Logo from '../../../ui.components/Header/Logo';
import axios from "axios";

let initState = {
    errorType:200,
    errorMessage: ""
}

const Login = () => {

    let [state,sedtState] = useState<loginState>(initState);
    let [selected,sedtSelected] = useState<number>(0);
    let [email,setEmail] = useState<string>("");
    let [password,setPassword] = useState<string>("");
    let [loginErr,setLoginErr] = useState<boolean>(false);
    let [authentication,setAuthentication] = useState<boolean>(false);

    const authinticate = (e:any) => {
        e.preventDefault();
        setAuthentication(true);

        axios({
  
            // Endpoint to send files
            url: "http://localhost:8080/api/v1/auth/login",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {email, password},
        })
        .then((res)=>{
            console.log(res);
            setAuthentication(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoginErr(true);
            setAuthentication(false);
            sedtState({
                errorType:200,
                errorMessage: err.message
            })
        });
    }

    return (
        <div className='login-form'>
            <div className="header-components branding brand-name-mini">
                <Logo/>
                <label className="brand-name-mini">Web Store</label>
            </div>
            <h1 className="welcome-title container">Welcome Back!</h1>
            <div className="welcome-image-container container">
                <img src={loginImg} alt="We are happy to see you back." />
            </div>
            <div className="form-container container">
                <form action="" onSubmit={(e)=>authinticate(e)}>
                    <div className="wrapper">
                        <div className={`text-box ${selected == 1 ? "selected-text-box" : ""}`} onBlur={()=>sedtSelected(0)} onFocus={()=>sedtSelected(1)}>
                            <span className="material-icons-outlined input-symbol">email</span>
                            <input type="text" className="text-input" placeholder='Email' value={email} onChange={e => {setEmail(e.target.value);setLoginErr(false)}} />
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className={`text-box ${selected == 2 ? "selected-text-box" : ""}`} onBlur={()=>sedtSelected(0)} onFocus={()=>sedtSelected(2)}>
                            <span className="material-icons-outlined input-symbol">lock</span>
                            <input type="password" className="text-input" placeholder='Password' value={password} onChange={e => {setPassword(e.target.value);setLoginErr(false)}}/>
                        </div>
                    </div>
                    {loginErr ? <span className="input-error-message">{"Your mailid or password is ncorrect please try again."}</span> : null}
                    <div className="wrapper">
                    </div>
                    <p className="wrapper forgot-password"><a href="#" className=" link forgot-password">Forgot Password</a></p>
                    <div className="wrapper container">
                        <button className={`${authentication? "disabled" : "active"} action-button`} disabled={authentication}>Login</button>
                    </div>
                </form>
            </div>
            <div className="wrapper">
                <p className="login-footer">Don't have an account? 
                    <a href="#" className="link"> Signup</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
