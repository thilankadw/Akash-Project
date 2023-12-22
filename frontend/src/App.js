import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import HomePage from './Pages/Home/Home_Page';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/Contact Us/Contact_Us";
import OurServices from "./Pages/Our Services/Our_Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
