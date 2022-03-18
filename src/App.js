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

  
const [mode, setMode] = useState('white');

const toggleMode = () => {
  if (mode === 'dark') {
    setMode('white');
    document.body.style.backgroundColor = '#fff';
  }
  else {
    setMode('dark');
    document.body.style.backgroundColor = '#000';
  }
}
let forColor = mode === 'dark' ? '#fff' : '#000';
let forBg = mode === 'dark' ? '#000' : '#fff';

  return (
    <Router>
      <div className="App" mode={mode} ToggleMode={toggleMode} style={{ background: forBg, color: forColor }}>
        <Routes>
          <Route path="/" mode={mode} ToggleMode={toggleMode} element={<Login />} />
          <Route path="/movie"  mode={mode} ToggleMode={toggleMode} element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
