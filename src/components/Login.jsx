import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");
    const [token, setToken] = useState("");
    const handleOnChange = (event) => {
        setName(event.target.value);
    };
    const handlePswd = (even) => {
        setPswd(even.target.value);
    };


    const handleLogin = (e) => {
        fetch(" https://demo.credy.in/api/v1/usermodule/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: name,
                password: pswd
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result.data.token);
                setToken(result)
            });

    };

console.log(token);

    return (
        <div className="main-login">
            <div className="login">
                <form>
                    <label className="login-label" htmlFor="chk" aria-hidden="true">
                        Login
                    </label>
                    <input
                        type="text"
                        name="txt"
                        placeholder="User Name"
                        value={name}
                        onChange={handleOnChange}
                        required
                    />
                    <input
                        type="text"
                        name="pswd"
                        placeholder="Password"
                        value={pswd}
                        onChange={handlePswd}
                        required
                    />
                    <button className="" onClick={handleLogin}>
                        {" "}
                        <Link to="/user">login</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
