import React, { useState } from 'react';
import { FaTruck } from 'react-icons/fa';
import { CiHeart, CiUser, CiLogin, CiLogout } from 'react-icons/ci';
import { IoBagCheckOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './nav.css';

const Nav = ({searchBtn}) => {
  const [search, setSearch] = useState('');
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      {/* Free Shipping Banner */}
      <div className="free">
        <div className="icon">
          <FaTruck />
        </div>
        <p>FREE shipping when shopping up to $1000</p>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="logo"></div>

          {/* Search Box */}
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="Search your product..."
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={()=> searchBtn(search)}>Search</button>
          </div>

          {/* Icons and Auth Display */}
          <div className="icon">
            {isAuthenticated && (
              <div className="account">
                <div className="user_icon">
                  <CiUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}

            <div className="second_icon">
              <Link to="/" className="Link">
                <CiHeart />
              </Link>
              <Link to="/cart" className="Link">
                <IoBagCheckOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu and Auth Buttons */}
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                <CiLogout />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;