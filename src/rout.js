import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home'; // Assuming you have a Home component
const Rout = () => {
  return (
    <>
        <Routes>
             <Route path="/"element={<Home />} />
        </Routes>
    
    </>
  )
}

export default Rout