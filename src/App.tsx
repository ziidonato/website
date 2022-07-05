import React, { useEffect, useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import Body from './components/Body';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;
