import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";

var newToken = createContext();

const Login = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");
    const[darkMode, setDarkMode] = useState("light");
    const MyMode = () =>{
        if(darkMode ==="light"){
            document.body.style.backgroundColor = "#fff"
            setDarkMode("dark")
        }
        else{
            document.body.style.borderColor = "#000";
            setDarkMode("light")
        }
    }

    
    const handleOnChange = (event) => {
        setName(event.target.value);
    };
    const handlePswd = (even) => {
        setPswd(even.target.value);
    };

   var tok ;
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
                var success = result.is_success;
                tok = result.data.token;
                if(success){
                    localStorage.setItem('token', tok);
                    getToken();
                }
                else{
                }
                console.log(tok);
                console.log(success)
                
            });
    };

  const getToken = () =>{
     newToken = localStorage.getItem('token');
     console.log(newToken+"from get token")
    return  newToken
  }
   
    return (
        <div className={darkMode ? "dark-mode mode  main-login" : "light-mode mode main-login"}>
            <div className="login">
                 <form>
                    <label className="login-label" htmlFor="chk" aria-hidden="true">
                        Login
                    </label>
                    <input type="text" name="txt"  placeholder="User Name"  value={name} onChange={handleOnChange} required />
                    <input
                        type="text"
                        name="pswd"
                        placeholder="Password"
                        value={pswd}
                        onChange={handlePswd}
                        required
                    />

                    <button className={`${name.length ===0 & pswd.length ===0 ? "btn disabled mybtn":"mybtn"}`}  >
                        <Link onClick={handleLogin} to="/movie">login</Link>
                    </button>
                </form> 
                <div className={darkMode ? "dark-mode mode" : "light-mode mode"}>
                      <div className="container">
                           <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                           <div className="switch-checkbox">
                                <label className="switch">
                                    <input type="checkbox" onChange={MyMode} />
                                    <span className="slider round"> </span>
                                </label>
                           </div>
                           <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                       </div>
                       <div>
                            <h6>{darkMode ? "Dark" : "Light"} Mode </h6>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

export {newToken}