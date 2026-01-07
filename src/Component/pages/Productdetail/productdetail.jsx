import React from 'react'
import './Product-Detail.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import image from './man t shirt.jpg'
import image1 from './man t shirt2.jpg'
import image2 from './man_t_shirt3.png'
import image3 from './cloths_t_shirt1.png'
import image4 from './cloths_t_shirt2.png'
import image5 from './cloths_t_shirt3.png'
import image6 from './cloths_t_shirt4.png'


function productDetail() {
  return (
    <div>
      <div className="mini-box">
        <span>Home</span>
        <span className="arrow">{">"}</span>

        <span>Shop</span>
        <span className="arrow">{">"}</span>

        <span>Men</span>
        <span className="arrow">{">"}</span>

        <span className="active">T-shirts</span>
      </div>

      <div className="main-card">
        <div className="child-card">

          <div className="big-card">
            <img src={image1} alt="" />
          </div>
          <div className="mini-block">
            <div className="mini-card">
              <img src={image} alt="" />
            </div>

            <div className="mini-card">
              <img src={image1} alt="" />
            </div>

            <div className="mini-card">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>

        <div className="child-card">
          <h1>ONE LIFE GRAPHIC T-SHIRT</h1>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$240</span>
            <span className="old-price">$260</span>
            <span className="offer">-20%</span>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, <br />
            delectus! Eos voluptatum vero, incidunt !</p>


          <div className="color-section">
            <h4>Select Color</h4>
            <button className='red'>✓</button>
            <button className='blue'></button>
            <button className='green'></button>
          </div>

          <div className="button-section">
            <h3>Choose Size</h3>
            <button className='small'>Small</button>
            <button className='medium'>Medium</button>
            <button className='large'>Large</button>
            <button className='x-large'>X-Large</button>
          </div>

          <div className="add-to-card">
            <button className='add'>— 1 +</button>
            <button className='Add-to'>Add To Cart</button>
          </div>

        </div>
      </div>

      <div className="tabs">
        <span>Product Details</span>
        <span className="active">Rating & Reviews</span>
        <span>FAQs</span>
      </div>

      <div className="review-bar">
        <div className="left">
          <h3>All Reviews <span>(451)</span></h3>
        </div>

        <div className="right">
          <button className="icon-btn">☰</button>
          <select>
            <option>Latest</option>
          </select>
          <button className="review-btn">Write a Review</button>
        </div>
      </div>



      <div className="main-card1">
        <div className="mini-card1">

          <div className="stars">★★★★★</div>

          <div className="user">
            <h4>Samantha D.</h4>
            <span className="verified">✔</span>
          </div>

          <p className="review-text">
            "I absolutely love this t-shirt! The design is unique and the fabric feels comfortable.<br />
            As a fellow designer, I appreciate the attention to detail.It's become my favorite <br />
            go-to shirt."
          </p>

          <span className="date">Posted on August 14, 2023</span>
        </div>
        <div className="mini-card1">
          <div className="stars">★★★★★</div>

          <div className="user">
            <h4>Alex M.</h4>
            <span className="verified">✔</span>
          </div>

          <p className="review-text">
            "I absolutely love this t-shirt! The design is unique and the fabric feels comfortable.<br />
            As a fellow designer, I appreciate the attention to detail.It's become my favorite <br />
            go-to shirt."
          </p>

          <span className="date">Posted on August 2, 2021</span>
        </div>
        <div className="mini-card1">
          <div className="stars">★★★★★</div>

          <div className="user">
            <h4>Olivia P.</h4>
            <span className="verified">✔</span>
          </div>

          <p className="review-text">
            "I absolutely love this t-shirt! The design is unique and the fabric feels comfortable.<br />
            As a fellow designer, I appreciate the attention to detail.It's become my favorite <br />
            go-to shirt."
          </p>

          <span className="date">Posted on August 30, 2005</span>
        </div>
        <div className="mini-card1">
          <div className="stars">★★★★★</div>

          <div className="user">
            <h4>Aff K.</h4>
            <span className="verified">✔</span>
          </div>

          <p className="review-text">
            "I absolutely love this t-shirt! The design is unique and the fabric feels comfortable.<br />
            As a fellow designer, I appreciate the attention to detail.It's become my favorite <br />
            go-to shirt."
          </p>

          <span className="date">Posted on August 1, 2022</span>
        </div>
        <div className="mini-card1">
          <div className="stars">★★★★★</div>

          <div className="user">
            <h4>SamD.</h4>
            <span className="verified">✔</span>
          </div>

          <p className="review-text">
            "I absolutely love this t-shirt! The design is unique and the fabric feels comfortable.<br />
            As a fellow designer, I appreciate the attention to detail.It's become my favorite <br />
            go-to shirt."
          </p>

          <span className="date">Posted on August 11, 2025</span>
        </div>
        <div className="mini-card1">
          <div className="stars">★★★★★</div>

          <div className="user">
            <h4>Saman A.</h4>
            <span className="verified">✔</span>
          </div>

          <p className="review-text">
            "I absolutely love this t-shirt! The design is unique and the fabric feels comfortable.<br />
            As a fellow designer, I appreciate the attention to detail.It's become my favorite <br />
            go-to shirt."
          </p>

          <span className="date">Posted on August 14, 2024</span>
        </div>
      </div>

      <button className='lord'> Load More Reviews</button>

      <h1 className='you'>YOU MIGHT ALSO LIKE </h1>

      <div className="main-card2">
        <div className="mini-card2">
          <img src={image3} alt="" />

          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$170</span>
            <span className="old-price">$190</span>
            <span className="offer">-20%</span>
          </div>
        </div>
        <div className="mini-card2">
          <img src={image4} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$110</span>
            <span className="old-price">$130</span>
            <span className="offer">-20%</span>
          </div>
        </div>
        <div className="mini-card2">
          <img src={image5} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$150</span>
            <span className="old-price">$180</span>
            <span className="offer">-20%</span>
          </div>
        </div>
        <div className="mini-card2">
          <img src={image6} alt="" />
          <h3 className="title">T-shirt with Tape </h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$120</span>
            <span className="old-price">$165</span>
            <span className="offer">-20%</span>
          </div>  
        </div>

      </div>

      <div className="card9">
        <h1>STAY UPTO DATE ABOUT <br />
          OUR LETEST OFFERS</h1>


        <input type="Email" placeholder='✉️ Enter your email address' /> <br />
        <button>Subscribe to newslletter</button>
      </div>
    </div >
  )
}

export default productDetail