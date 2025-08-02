import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTruck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";
import { ImHeadphones } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Homeproduit from './homeproduit'
import './home.css'; // Assuming you have a CSS file for styling
const Home = () => {
// const [homeProduit, setHomeProduit] = useState(Homeproduit)
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
      <h2>Top Products</h2>
      <div className="container">
         {
            Homeproduit.map((cur) => {
               return (
                  <div className="box" key={cur.id}>
                     <div className="img_box">
                        <img src={cur.Img} alt={cur.Title}></img>
                        <div className="icon">
                           <li><FaShoppingCart /></li>
                           <li><IoEyeOutline /></li>
                           <li><CiHeart /></li>
                        </div>
                     </div>
                     <div className="detail">
                        <p>{cur.Cat}</p>
                        <h3>{cur.Title}</h3>
                        <h4>{cur.Price}</h4>
                     </div>
                  </div>
               )
            })
         }
      </div>
    </div>
    <div className="banner">
      <div className="container">
         <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple Ipad 18th Gen 13 inch - 2025</h3>
            <p><BiDollar />837</p>
            <Link to='/product' className='link'>Shop Now<FaArrowRight /></Link>
         </div>
         <div className="img_box">
            <img src="/ipad-3.png" alt="slidering" />
         </div>
      </div>
    </div>
    </>
  );
};

export default Home;
