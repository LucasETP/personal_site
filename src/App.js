// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="navbar">
            <Link to="/">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </header>

          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
