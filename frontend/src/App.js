import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import HomePage from './Pages/Home/Home_Page';
import ContactUs from "./Pages/Contact Us/Contact_Us";
import OurServices from "./Pages/Our Services/Our_Services";
import AboutUs from "./Pages/About Us/About_Us";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/Product Details/Product_Details";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
