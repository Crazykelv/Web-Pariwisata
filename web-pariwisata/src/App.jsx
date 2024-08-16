import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/navbar';
import Dash from './Component/dashboard';
import DataranTinggi from './Component/kategori-dataranTinggi';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/dataranTinggi' element={<DataranTinggi />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
