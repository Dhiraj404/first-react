import React from 'react';
import './App.css';
import './Fhead.css';
import './Head2.css';
import './Products.css';
import './Store.css';
import './Fruit.css';
import './Blog.css';
import './Happy.css';
import './Member.css'
import './Footer.css'
import './Footerr.css'
import './Header.css'

import Navbar from './Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Modal from './Modal';


import Home from './Home';
import About from './About';
import Pricing from './Pricing'
import Footer from './Footer';
import Footerr from './Footerr';

export default function App() {
  
  return <div>
    <Modal />

      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
      <Footer />
      <Footerr />

  </div>;
}
