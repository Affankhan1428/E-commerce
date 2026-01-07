import React from 'react'
import './Service.css'
import image from './cloths_t_shirt1.png'
import image1 from './cloths_t_shirt3.png'
import image2 from './pent.png'
import { MdDelete } from "react-icons/md";

function Service() {
  return (
    <div>

      <p className="breadcrumb">Home &gt; Casual</p>
      <h1 className='Yourcart'>Your Cart</h1>
      <div className="parent1">
        <div className="child1">
          <div className="mini-child">
            <img src={image} alt="" />
            <h2>Black T-shirt</h2>
            <p>Size: Large</p>
            <p>Color:Black and white</p>
            <h1 className='price'>$180</h1>
            <button>– 1 +</button>

            
            <div className="icon">
              < MdDelete />
            </div>

          </div>
          <div className="mini-child">
            <img src={image1} alt="" />
            <h2>Gratient T-shirt</h2>
            <p>Size: Large</p>
            <p>Color: Blue</p>
            <h1 className='price'>$150</h1>
            <button>– 3 +</button>
            <div className="icon">
              < MdDelete />
            </div>
          </div>
          <div className="mini-child">
            <img src={image2} alt="" />
            <h2>Skinny Fit Jeans</h2>
            <p>Size: Large</p>
            <p>Color: Blue</p>
            <h1 className='price'>$110</h1>
            <button>–   2   +</button>
            <div className="icon">
              < MdDelete />
            </div>
          </div>
        </div>

        <div className="child1">
          <h2 className="title">Order Summary</h2>

          <div className="row">
            <span>Subtotal</span>
            <span className="bold">$565</span>
          </div>

          <div className="row">
            <span>Discount (-20%)</span>
            <span className="discount">-$113</span>
          </div>

          <div className="row">
            <span>Delivery Fee</span>
            <span className="bold">$15</span>
          </div>

          <hr />

          <div className="row total">
            <span>Total</span>
            <span>$467</span>
          </div>

          <div className="promo">
            <input type="text" placeholder="Add promo code" />
            <button className="apply-btn">Apply</button>
          </div>

          <button className="checkout-btn">
            Go to Checkout →
          </button>
        </div>
      </div>

      <div className="card9">
          <h1>STAY UPTO DATE ABOUT <br />
          OUR LETEST OFFERS</h1>

        <input type="Email" placeholder='✉️ Enter your email address' /> <br />
        <button>Subscribe to newslletter</button>
      </div>
    </div> 
 
 
  )
}

export default Service