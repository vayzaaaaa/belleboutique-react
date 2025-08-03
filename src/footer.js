import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import './footer.css'; // Import the new footer.css file

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img-logo" alt="logo" /> {/* Ensure this path is correct for your logo */}
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
                <li>Home</li> {/* Corrected 'Homme' to 'Home' */}
                <li>About</li>
                <li>Contact</li>
                <li>Terms & condition</li> {/* Corrected 'Terma $ condition' */}
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
