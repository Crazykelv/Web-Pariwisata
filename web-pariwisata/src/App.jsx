import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/navbar';
import Dash from './Component/dashboard';
import DataranTinggi from './Component/kategori-dataranTinggi';
import KategoriPantai from './Component/kategori-pantai';
import KategoriBuatan from './Component/kategori-buatan';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/dataranTinggi' element={<DataranTinggi />} />
        <Route path='/pantai' element={<KategoriPantai />} />
        <Route path='/buatan' element={<KategoriBuatan />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
