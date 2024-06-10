// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SizeAvatars from './components/SizeAvatars/SizeAvatars';
import './App.css';

function App() {
  return (
     <div className="profile">
      <Navbar />
      <About />
      <SizeAvatars />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
