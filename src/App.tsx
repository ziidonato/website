import React, { useEffect, useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import Scroll from './components/Scroll';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Scroll />
      </div>
    </Router>
  );
}

export default App;
