import React, { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import { Movie } from "./Movie";
import Unauth from "./Unauth";

var newToken = createContext();
const Login = (props) => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");
    const [UAuth, setUAuth] = useState(false);
    const [success, setSucsess] = useState(false);

    const logBtnEnabled = () => {

        var a = $("#iName").val().length;
        var b = $("#iPass").val().length;
        if (a !== 0 && b !== 0) {
            $("#logBtn").removeClass("disabled");

        } else {
            $("#logBtn").addClass("disabled");
        }

    }


    const handleOnChange = (event) => {
        setName(event.target.value);
        logBtnEnabled();

    };
    const handlePswd = (even) => {
        setPswd(even.target.value);
        logBtnEnabled();
    };



    var tok;

    const handleLogin = (e) => {
        e.preventDefault();
        $("#logBtn").addClass("disabled");
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
                setSucsess(result.is_success);
                tok = result.data.token;
                if (result.is_success) {
                    $("#logBtn").removeClass("disabled");
                    localStorage.setItem('token', tok);
                    getToken();
                }

                console.log(tok);
                console.log(success)
            }).catch(error => {
                alert("login failed... please provide right information")
            });
        //    var logBtn = document.getElementById('logBtn');
        //    $("input").onChange();


    };


    const getToken = () => {
        newToken = localStorage.getItem('token');
        console.log(newToken + "from get token")
        return newToken
    }

    let forbg = props.mode ? "#0000008a" : "#ffffff21";
    let forColor = props.mode ? "#000" : "#fff";
    let forShad = props.mode ? "0px 0px 10px #fff" : "0px 0px 10px #000";

    if (!success) {
        return (
            <div className="main-login" >
                <div className="login" style={{ background: forbg }}>
                    <form>
                        <label className="login-label" htmlFor="chk" aria-hidden="true">
                            Login
                        </label>
                        <input id="iName" type="text" name="txt" placeholder="User Name" value={name} onChange={handleOnChange} required style={{ borderColor: forColor, boxShadow: forShad }} />
                        <input id="iPass" style={{ borderColor: forColor, boxShadow: forShad }} type="text" name="pswd" placeholder="Password"
                            value={pswd}
                            onChange={handlePswd}
                            required
                        />
                        <button id="logBtn" className="btn disabled mybtn" onClick={handleLogin}>
                            login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    else if (success) {
        return (
            <Movie />
        );
    }
};

export default Login;

export { newToken }