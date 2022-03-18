import React from 'react'
import { newToken } from './Login';
import { Link } from "react-router-dom";


export const Movie = (props) => {
    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    let forBg = props.mode === 'dark' ? '#000' : '#fff';
    let shad = props.mode ==='dark'?'1px 1px 10px rgba(250, 250, 250, 0.411)':'1px 1px 10px rgba(0, 0, 0, 0.711)';

    const serachMovie = () => {
        var val = newToken;

         fetch("https://demo.credy.in/api/v1/maya/movies/", {
            method: "GET",
           header:  {"Authorization": `${val}`} 
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        });
        console.log(val);
    
    }

  return (
    <div className='movie'>
        {/* <button onClick={serachMovie}>Click mE</button> */}
        <nav className={`navbar navbar-expand-lg fixed-top`} style={{ background: forBg,boxShadow:shad, color:forColor}}>
            <div className="container-fluid">
                <h3 className="navbar-brand" >RENY-TextUtils</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><span>Home</span></Link>
                        </li>
                    </ul>
                    <div className="theme">
                    <i className={`bx mybx bxs-${props.mode === 'white'?'moon':'sun'} bx-${props.mode === 'white'?'':'spin'}`}></i>
                    </div>
                </div>
            </div>
        </nav>
        <div className='d-flex'>
            <div className='inner-movie mx-2'>
                <div className='movie-img'>
                   <img src="/img/l10.jpg" alt='..' />
                </div>
                <h4 className='pt-2'> Bang Bang</h4>
                <p>This is a ritik roshan movie oand cat bang bang</p>
                <p>Genres:- dkhcdfivkbdkf</p>
            </div>
            <div className='inner-movie mx-2'>
                <div className='movie-img'>
                   <img src="/img/l10.jpg" alt='..' />
                </div>
                <h4> Bang Bang</h4>
                <p>kcfwif dhfgirguriff dkfhrgierkvdr kiugfr</p>
                <p>dkhcdfivkbdkf</p>
            </div>
            <div className='inner-movie mx-2'>
                <div className='movie-img'>
                   <img src="/img/l10.jpg" alt='..' />
                </div>
                <h4> Bang Bang</h4>
                <p>kcfwif dhfgirguriff dkfhrgierkvdr kiugfr</p>
                <p>dkhcdfivkbdkf</p>
            </div>
            <div className='inner-movie mx-2'>
                <div className='movie-img'>
                   <img src="/img/l10.jpg" alt='..' />
                </div>
                <h4> Bang Bang</h4>
                <p>kcfwif dhfgirguriff dkfhrgierkvdr kiugfr</p>
                <p>dkhcdfivkbdkf</p>
            </div>
            <div className='inner-movie mx-2'>
                <div className='movie-img'>
                   <img src="/img/l10.jpg" alt='..' />
                </div>
                <h4> Bang Bang</h4>
                <p>kcfwif dhfgirguriff dkfhrgierkvdr kiugfr</p>
                <p>dkhcdfivkbdkf</p>
            </div>
            
        </div>
    </div>
  )
}
