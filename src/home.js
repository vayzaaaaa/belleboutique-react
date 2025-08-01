import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h1>The Best Notebook Collection 2025</h1>
            <Link to="/produit">Shop Now</Link>
          </div>
          <div className="image_box">
            <img src="./img/apad-1.png" alt="apadimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
