import React from "react";
import { Link } from "react-router-dom";
const Unauth = (props) => {
    let forbg = props.mode ? "#fff" : "#000";
    let forColor = props.mode ? "#000" : "#fff";
    let forShad = props.mode ? "0px 0px 10px #fff" : "0px 0px 10px #000";
    return (
        <div className="unauth main-login">
            <div className="login inner-auth" >
                <div className="in-auth py-5" style={{ backgroundColor: forColor , color: forbg}}>
                    <div className="box-auth"  >
                        <h1>Error <i className='bx bxs-sad bx-tada' ></i> </h1>
                        <h3> Please Provide Correct loign credential </h3>
                    </div>
                    <button className="btn mybtn" >
                        <Link className="nav-link active" style={{border :"2px solid #000"}} to="/">
                            Back To Login
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Unauth;
