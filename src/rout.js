import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Assuming you have a Home component
import Product from './product'; // Assuming you have a Product component
import Cart from './cart'; // Importing the Cart component
const Rout = ({product, setProduct, detail, view, close, setClose, cartItem, setCartItem, addtocart}) => {
  return (
    <>
        <Routes>
             <Route path="/"element={<Home />} />
              <Route path="/products" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
              {/* Add more routes as needed */}
             {/* <Route path="/cart"element={<cart cartItem={cartItem}  setCartItem={setCartItem}/>} /> */}
        </Routes>
    
    </>
  )
}

export default Rout