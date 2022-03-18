import './App.css';
import React, {useState} from "react";
import Login from './components/Login';
import { Movie } from './components/Movie';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {


  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movie"  element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
