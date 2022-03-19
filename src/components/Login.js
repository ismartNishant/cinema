import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

var newToken = createContext();

const Login = (props) => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");

    const logBtnEnabled = () =>{
       
       var a = $("#iName").val().length;
       var b = $("#iPass").val().length;
        if  (a !== 0 && b !== 0) {
            $("#logBtn").removeClass("disabled");
        
        }else{
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
    var success;
    const handleLogin = (e) => {
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
                success = result.is_success;
                tok = result.data.token;
                if (success) {
                    $("#logBtn").removeClass("disabled");
                    localStorage.setItem('token', tok);
                    getToken();
                }
                else {
                    alert("P;ease provide right");
                }
                console.log(tok);
                console.log(success)

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
   
    return (
        <div className="main-login" >
            <div className="login" style={{ background: forbg }}>
                <form>
                    <label className="login-label" htmlFor="chk" aria-hidden="true">
                        Login
                    </label>
                    <input id= "iName" type="text" name="txt" placeholder="User Name" value={name} onChange={handleOnChange} required style={{ borderColor: forColor, boxShadow: forShad }} />
                    <input id= "iPass" style={{ borderColor: forColor, boxShadow: forShad }}  type="text"   name="pswd"   placeholder="Password"
                        value={pswd}
                        onChange={handlePswd}
                        required
                    />
                    <button id="logBtn" className="btn disabled mybtn" >
                        <Link onClick={handleLogin} to="/movie">login</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

export { newToken }