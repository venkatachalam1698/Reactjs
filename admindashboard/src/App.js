import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
// import CardData from './components/cards/carddata.jsx';
// import Mixedcharts from './components/charts/Mixedchart.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/carddata" element={<CardData />} /> */}
          {/* <Route path="/Mixedcharts" element={<Mixedcharts />} /> */}

        </Routes>
      
    </div>
  );
}

export default App;
