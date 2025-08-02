import React from 'react'
import Nav from './nav'
import Rout from'./rout';
import Footer from './footer'
import {BrowserRouter} from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter> 
    <Nav/>
    <Rout/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App