import React from 'react'
import { newToken } from './Login';
import { Link } from "react-router-dom";


export const Movie = (props) => {

    const serachMovie = () => {
        var val = newToken;
        try {
            fetch("https://demo.credy.in/api/v1/maya/movies/", {
                method: "GET",
    
                headers: new Headers({
                    'Authorization': 'Token ' + val,
                })
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
            
                });
            console.log(val + "in movie ");

        } 
        catch (error) {
            console.log("some error happens")
        }

      
    }

      let forbg =  props.mode ? "#fff" :"#000";
     let forColor =  props.mode ? "#000":"#fff";
     let forShad = props.mode ? "0px 0px 10px #fff" : "0px 0px 10px #000";


    return (
        <div className='movie'>
            
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="#">Cinema</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                        </ul>
            
                    </div>
                </div>
            </nav> 
            <div className='search-btn'>
                 <button className='btn btn-outline-danger' onClick={serachMovie}>Click Me</button>
            </div>
            <div className='movie-box'>
                <div className='inner-movie mx-2'>
                    <div className='movie-img'>
                        <img src="/img/l10.jpg" alt='..' />
                    </div>
                    <h4 className='pt-2'> Bang Bang</h4>
                    <p>This is a ritik roshan movie oand cat bang bang</p>
                    <p>Genres:- dkhcdfivkbdkf</p>
                </div>
            </div>
        </div>

    )
}
