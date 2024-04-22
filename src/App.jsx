import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
