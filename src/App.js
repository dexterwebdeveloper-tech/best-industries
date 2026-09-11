
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Enquiry from './pages/Enquiry';
import Careers from './pages/Careers';
import Catalog from './pages/Catalog';
import QualitySafety from './pages/QualitySafety';
import Gallery from './pages/Gallery';
import Facility from './pages/Facility';
import Services from './pages/Serviceses';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
     <Header/>
      {/* <ContactButtons /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/quality-safety" element={<QualitySafety />} />
        <Route path="/photo-gallery" element={<Gallery />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsConditions />} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
