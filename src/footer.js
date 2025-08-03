import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import './footer.css'; // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img-logo" alt="logo" />
            </div>
            <div className="detail">
              <p>We are team of designers and developers that create high quality </p>
              <div className="icon">
                <i><FaFacebookF /></i>
                <i><FaInstagram /></i>
                <i><TiSocialTwitter /></i>
                <i><FaYoutube /></i>
              </div>
            </div>
          </div>
            <div className="account">
              <h3>My Account</h3>
              <ul>
                <li>My Account</li>
                <li>Order</li>
                <li>Cart</li>
                <li>shipping</li>
                <li>return</li>
              </ul>
            </div>
             <div className="page">
              <h3>Page</h3>
              <ul>
                <li>Homme</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terma $ condition</li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer