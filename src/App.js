import React, {useState} from 'react'
import Nav from './nav'
import Rout from'./rout';
import Footer from './footer'
import productdetail from './productdetail'; // Assuming you have a product detail component
import {BrowserRouter} from "react-router-dom";
const App = () => {
  // PRODUCT DETAILS
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(productdetail);
  // SEARCH PRODUCT
  const searchBtn = (product) => {
    const result = productdetail.filter(pro => pro.Cat === product)
    setProduct(result)
  }
  // view product
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }
  return (
    <>
    <BrowserRouter> 
    <Nav searchBtn={searchBtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App