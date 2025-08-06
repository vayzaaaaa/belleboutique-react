import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeOutline, IoCloseCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import productdetail from './productdetail'; // Assuming you have a product detail component
import './product.css'; // Import the new product.css file

const Product = ({product, setProduct, detail, view, close, setClose}) => {
  const filterproduct = (cat) => {
    const filtered = productdetail.filter(pro => pro.Cat === cat);
    console.log(filtered)
    setProduct(filtered);
  }
  const AllProducts = () => {
    setProduct(productdetail);
  }
  return (
    <>
     {
      close ?
      <div className="product_detail">
        <div className="container">
        <button onClick={() => setClose(false)}><IoCloseCircleOutline /></button>
          {
            detail.map((cur) => {
              return (
                <div className="productbox" key={cur.id}>
                  <div className="img_box">
                    <img src={cur.Img} alt={cur.Title} />
                  </div>
                  <div className="detail">
                    <h4>{cur.Cat}</h4>
                    <h2>{cur.Title}</h2>
                    <p>WE ARE ALWAYS PRESENTING TO YOU THE BEST PRODUCTS, SUITABLE FOR YOUR NEEDS..</p>
                    <h3>{cur.Price}</h3>
                    <button>BUY NOW!</button>
                  </div>

                </div>
              )
            }
            )
          }
        </div>
      </div> : null
      }
     <h2># Products</h2>
      <p> Homme . products</p>
      <div className="products">
        <div className="container">
          <div className="filter">
            <div className="categories">
                <h3>Categories</h3>
                <ul>
                    <li onClick={() => AllProducts()}><button>All products</button></li>
                    <li onClick={() => filterproduct("Tablet")}><button>Tablet</button></li>
                    <li onClick={() => filterproduct("Phone")}><button>Phone</button></li>
                    <li onClick={() => filterproduct("Headphones")}><button>Headphones</button></li>
                    <li onClick={() => filterproduct("Camera")}><button>Camera</button></li>
                    <li onClick={() => filterproduct("Gaming")}><button>Gaming</button></li>
                </ul>
             </div>
          </div>
            <div className="productbox">
                {
                product.map((cur) => {
                    return (
                    // Added a fragment here to wrap the individual product box
                    <React.Fragment key={cur.id}>
                      <div className="box">
                        <div className="img_box">
                          <img src={cur.Img} alt={cur.Title}></img>
                          <div className="icon">
                            <li><FaShoppingCart /></li>
                            <li onClick={() => view (cur)}><IoEyeOutline /></li>
                            <li ><CiHeart /></li>
                          </div>
                        </div>
                        <div className="detail">
                          <p>{cur.Cat}</p>
                          <h3>{cur.Title}</h3>
                          <h4>{cur.Price}</h4>
                        </div>
                      </div>
                    </React.Fragment>
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
