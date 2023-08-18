import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Home_Med_Prev from './components/home_med_prev/Home_Med_Prev'
import Medicines from './components/medicines/Medicines';
import Home_Doc_Prev from './components/home_doc_prev/Home_Doc_Prev';
import Testimonials from './components/testimonials/Testimonials';
import Sidebar from './components/sidebar/Sidebar';
import FindMedicines from './components/find_medicines/FindMedicines';
import './App.css';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="home_med" element={<Home_Med_Prev />} />
      <Route path="/" element={<Home_Doc_Prev />} /> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/" element={<Sidebar />} /> */}
      <Route path='/medicines' element={<FindMedicines />} />
    </Routes>
    </>
  )
}

export default App