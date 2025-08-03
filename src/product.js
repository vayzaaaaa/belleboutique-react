import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import productdetail from './productdetail'; // Assuming you have a product detail component
const Product = () => {
  return (
    <>
     <h2># Products</h2>
      <p> Homme . products</p>
      <div className="products">
        <div className="container">
          <div className="filter">
            <div className="categories">
                <h3>Categories</h3>
                <ul>
                    <li>Tablet</li>
                    <li>Tablet</li>
                    <li>Tablet</li>
                    <li>Tablet</li>
                    <li>Tablet</li>
                </ul>
             </div>
          </div>
            <div className="productbox">
                {
                productdetail.map((cur) => {
                    return (
                    <>
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
                    </>
                    )
                })
                }
                 </div>
        </div>
      </div>
    </>
  )
}

export default Product