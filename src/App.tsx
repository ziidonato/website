import React, { useEffect, useState, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import Body from './components/Body';
import { DeviceType, DeviceTypeContext } from './hooks/useDeviceType';


function App() {

  const [deviceType, setDeviceType] = useState(DeviceType.DESKTOP)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setDeviceType(window.innerWidth < 768 ? DeviceType.MOBILE : DeviceType.DESKTOP);
    });
  }, []);

  return (
    <Router>
      <DeviceTypeContext.Provider value={deviceType}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </DeviceTypeContext.Provider>
    </Router>
  );
}

export default App;
