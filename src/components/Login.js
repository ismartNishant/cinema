import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import { Movie } from "./Movie";


var newToken = createContext();

const Login = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");

    

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
        <div className="main-login">
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
            </div>
        </div>
    );
};

export default Login;

export {newToken}