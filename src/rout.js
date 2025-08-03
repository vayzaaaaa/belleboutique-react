import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Assuming you have a Home component
import Product from './product'; // Assuming you have a Product component

const Rout = () => {
  return (
    <>
        <Routes>
             <Route path="/"element={<Home />} />
              <Route path="/products" element={<Product />} />
              {/* Add more routes as needed */}
        </Routes>
    
    </>
  )
}

export default Rout