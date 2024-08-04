import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/navbar';
import Dash from './Component/dashboard';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dash />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
