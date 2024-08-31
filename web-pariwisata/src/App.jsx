import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Dash from './Component/dashboard';
import DataranTinggi from './Component/kategori-dataranTinggi';
import KategoriPantai from './Component/kategori-pantai';
import KategoriBuatan from './Component/kategori-buatan';
import DindingAri from './Component/details/dindingAri';
import Panyangrayan from './Component/details/panyangrayan';
import Karangresik from './Component/details/karangResik';
import Teejay from './Component/details/teejay';
import Dadaha from './Component/details/dadaha';
import Ap from './Component/details/ap';
import Karangtawulan from './Component/details/Pantai dan perairan/karangtawulan';
import Cemara from './Component/details/Pantai dan perairan/cemara';
import Pamayang from './Component/details/Pantai dan perairan/pamayang';
import SituGede from './Component/details/Pantai dan perairan/situGede';
import Badak from './Component/details/Pantai dan perairan/badak';
import Dengdeng from './Component/details/Pantai dan perairan/dengdeng';
import Pujiningrum from './Component/details/pujiningrum';
import Pangangonan from './Component/details/pangangonan';
import Sampalan from './Component/details/sampalan';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/dataranTinggi' element={<DataranTinggi />} />
        <Route path='/pantai' element={<KategoriPantai />} />
        <Route path='/buatan' element={<KategoriBuatan />} />

        {/* DETAIL DATARAN TINGGI */}
        <Route path='/dindingAri' element={<DindingAri />} />
        <Route path='/panyangrayan' element={<Panyangrayan />} />
        <Route path='/pujiningrum' element={<Pujiningrum />} />
        <Route path='/pangangonan' element={<Pangangonan />} />
        <Route path='/bukitSampalan' element={<Sampalan />} />

        {/* DETAIL DATARAN TINGGI */}

        {/* DETAIL WISATA BUATAN */}
        <Route path='/karangresik' element={<Karangresik />} />
        <Route path='/teejay' element={<Teejay />} />
        <Route path='/dadaha' element={<Dadaha />} />
        <Route path='/ap' element={<Ap />} />
        {/* DETAIL WISATA BUATAN */}

        {/* DETAIL PANTAI DAN PERAIRAN */}
        <Route path='/karangtawulan' element={<Karangtawulan />} />
        <Route path='/cemara' element={<Cemara />} />
        <Route path='/pamayang' element={<Pamayang />} />
        <Route path='/situGede' element={<SituGede />} />
        <Route path='/curugBadak' element={<Badak />} />
        {/* DETAIL PANTAI DAN PERAIRAN */}
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
