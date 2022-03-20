import './App.css';
import React, { useState, useEffect } from "react";
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  justify-content: center;
  position:relative;
`;
const App = () => {
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  document.body.style.backgroundColor = darkMode ? "#000" : "#fff";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])

  return (

    <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      {loading ? (
        <div className='myloader'>
          <HashLoader css={override} color={"#e23b64"} loading={loading} size={70} />
          <h3>LOADING<i className='bx bxs-circle bx-fade' ></i><i className='bx bxs-circle bx-fade-right'></i><i className='bx bxs-circle bx-fade-right' ></i><i className='bx bxs-circle bx-fade-right'></i></h3>
        </div>) :
        (
          <div className={darkMode ? "App" : "App"} >
            <div className="mode" style={{ borderColor: darkMode ? "#fff" : "#000", boxShadow: darkMode ? "0px 0px 10px #fff" : "0px 0px 10px #000", backgroundColor: darkMode ? "#fff" : "#000", }}>
              <div className="container">
                <span className='theme' style={{ color: darkMode ? "grey" : "yellow" }}><i className={`bx bxs-sun ${!darkMode ? "bx-spin" : " "}`} ></i></span>
                <div className="switch-checkbox">
                  <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <span className="slider round"> </span>
                  </label>
                </div>
                <span className='theme' style={{ color: darkMode ? "#c96dfd" : "grey" }}><i className={`bx bxs-moon ${darkMode ? "bx-flashing" : " "}`}></i></span>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Login mode={darkMode} setProgress={setProgress} />} />
            </Routes>
          </div>)}
    </Router>
  );
}

export default App;
