
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import axios from "axios";
import './LoginForm.css';
import LoginIng from '../../../assets/login.jpg'
import { setUser } from "../../../../redux";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/login", { email, password })
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    dispatch(setUser({user : res.data}));
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="img">
                <img src={LoginIng} alt="" />
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="xyz@gmail.com"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="subbtn" type="submit">Login</button>
                    <span>Dont have Account <Link className='swichRegister' to='/register'>SignUp</Link></span>
                    
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
