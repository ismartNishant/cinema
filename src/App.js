import './App.css';
import React, {useState} from "react";
import Login from './components/Login';
import { Movie } from './components/Movie';
import Unauth from './components/Unauth';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
   
  document.body.style.backgroundColor =  darkMode ? "#000" : "#fff";


  return (
    
    <Router>
      <div className={darkMode ? "App" : "App"} >
                 <div className="mode" style={{ borderColor: darkMode ? "#fff" : "#000", boxShadow: darkMode ? "0px 0px 10px #fff" : "0px 0px 10px #000" , backgroundColor:darkMode ? "#fff" : "#000", }}>
                    <div className="container">
                        <span className='theme' style={{ color: darkMode ? "grey" : "yellow" }}><i className={`bx bxs-sun ${ !darkMode ? "bx-spin":" "}`} ></i></span>
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                <span className="slider round"> </span>
                            </label>
                        </div>
                        <span className='theme' style={{ color: darkMode ? "#c96dfd" : "grey" }}><i className={`bx bxs-moon ${ darkMode ? "bx-flashing":" "}`}></i></span>
                    </div>
                </div>
        <Routes>
          <Route path="/" element={<Login mode ={darkMode} />} />
          <Route path="/movie"  element={<Movie mode ={darkMode} />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
