import React from 'react';
import { Link } from 'react-router-dom';
import { FiTruck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";
import { ImHeadphones } from "react-icons/im";
import './home.css'; // Assuming you have a CSS file for styling
const Home = () => {
  return (
    <>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
             <h1>The Best Notebook Collection 2025</h1>
             <Link to="/produit" className='link'>Shop Now</Link>
          </div>
          <div className="image_box">
              <img src="/ipad-3.png" alt="sliderimg" />
          </div>
        </div>
      </div>
      <div className="product_type">
            <div className="container">
              <div className="box">
                  <div className="img_box">
                     <img src="/iphone15.png" alt="iphone" />
                  </div>
                  <div className="detail">
                     <p>23 produit</p>
                  </div>
              </div>
              <div className="box">
                  <div className="img_box">
                     <img src="/watch.png" alt="watch" />
                  </div>
                  <div className="detail">
                     <p>18 produit</p>
                  </div>
              </div>
              <div className="box">
                  <div className="img_box">
                     <img src="/airpods_max_black_1.webp" alt="watch" />
                  </div>
                  <div className="detail">
                     <p>21produit</p>
                  </div>
              </div>
              <div className="box">
                  <div className="img_box">
                     <img src="/applevisionpro.png" alt="watch" />
                  </div>
                  <div className="detail">
                     <p>10 produit</p>
                  </div>
              </div>
              <div className="box">
                  <div className="img_box">
                     <img src="/ps5-console.png" alt="watch" />
                  </div>
                  <div className="detail">
                     <p>25 produit</p>
                  </div>
              </div>
            </div>
      </div>
      <div className="about">
         <div className="container">
             <div className="box">
               <div className="icon">
                  <FiTruck />
               </div>
                 <div className="detail">
                    <h3>Free Shipping</h3>
                    <p>order abov $1000</p>
                 </div>
             </div>
             <div className="box">
               <div className="icon">
                  <BiDollar />
               </div>
                 <div className="detail">
                    <h3>Return $ Refund</h3>
                    <p>money back guarantee</p>
                 </div>
             </div>
             <div className="box">
               <div className="icon">
                  <CiPercent />
               </div>
                 <div className="detail">
                    <h3>Membre Discount</h3>
                    <p>On every order</p>
                 </div>
             </div>
             <div className="box">
               <div className="icon">
                  <ImHeadphones />
               </div>
                 <div className="detail">
                    <h3>customer support</h3>
                    <p>every time calle support</p>
                 </div>
             </div>
         </div>
      </div>
    <div className="produit">
      <div className="container">
              <div className="box">
              </div>
      </div>
    </div>
    </>
  );
};

export default Home;
