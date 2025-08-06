import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import './cart.css'; // Import the new cart.css file
const cart = ({cartItem, setCartItem}) => {
  return (
    <>
     <div className="cartcontainer">
        { cartItem.length === 0 &&
          <div className="emptycart">
           <h2 className="empty">cart is empty</h2>
           <Link to="/products" className='emptycartbtn'>Shop Now</Link>
          </div>

        }
        <div className="contant">
          {
            cartItem.map((cur) => 
                {   
                    return (
                      <div className="cart_item" key={cur.id}>
                        <div className="img_box"> 
                          <img src={cur.Img} alt={cur.Title} />
                        </div>
                        <div className="detail">
                          <h4>{cur.cat}</h4>
                          <h3>{cur.Title}</h3>
                          <p>{cur.Price}</p>
                         <button><IoMdClose /></button>
                        </div>
                      </div>
                    )
                 })
         }
           <div className="cart_item">

           </div>
        </div>
    </div>
    </>
  )
}

export default cart