import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Product from './product';
import Contact from './contact'; // Import the new Contact component

const Rout = ({product, setProduct, detail, view, close, setClose, cartItem, setCartItem, addtocart}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/products" 
        element={
          <Product 
            product={product} 
            setProduct={setProduct} 
            detail={detail} 
            view={view} 
            close={close} 
            setClose={setClose} 
            addtocart={addtocart} 
          />
        } 
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Rout;