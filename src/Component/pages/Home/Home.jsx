import React from 'react'
import './Home.css'
import image from "./photo.png"
import image1 from './black.png'
import image2 from './pent.png'
import image3 from './shirt2.png'
import image4 from './tsirt_2.png'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import image5 from './necer.png'
import image6 from './pent_1.png'
import image7 from './shirt1.png'
import image8 from './tshirt3.png'
import image9 from './ChatGPT1.png'
import image10 from './ChatGPT2.png'
import image11 from './ChatGPT3.png'
import image12 from './ChatGPT4.png'

function Home() {
  return (
    <div>
      <section className="card">
        <div className="child">
          <h1>FIND CLOTHS <br /> THAT MATCHES <br /> YOUR STYLE</h1>
          <p>Browse though our garments, designed to bring out your individuality <br />and cater to your sense of style.</p>
          <button>Shop Now</button>
          <div className="box">
            <div className="box1"><h2>200+</h2> <p>International Brands</p></div>
            <div className="box1"><h2>2,000+</h2> <p>high-Quality Products</p></div>
            <div className="box1"><h2>30,000+</h2> <p>Happy Customers</p></div>
          </div>

        </div>
        <div className="child">
          <img src={image} alt="" />
          <h1 className='star'>✦</h1>
          <h1 className='star1'>✦</h1>
        </div>
      </section>

      <div className="card1">
        <div className="box2">
          <h1>VERSACE</h1>
        </div>
        <div className="box2">
          <h1>ZARA</h1>
        </div>
        <div className="box2">
          <h1>GUCCI</h1>
        </div>
        <div className="box2">
          <h1>PRADA</h1>
        </div>
        <div className="box2">
          <h1>Calvine klein</h1>
        </div>

      </div>

      <div className="card2">
        <h1>NEW ARRIVALS</h1>
      </div>

      <div className="card3">
        <div className="box3">
          <img src={image1} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$120</span>
            <span className="old-price">$160</span>
            <span className="offer">-20%</span>
          </div>
        </div>


        <div className="box3">
          <img src={image2} alt="" />
          <h3 className="title">Skini fit jeans </h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$240</span>
            <span className="old-price">$260</span>
            <span className="offer">-20%</span>
          </div>
        </div>
        <div className="box3">
          <img src={image3} alt="" />
          <h3 className="title">Checkered Shirt</h3>
          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$180</span>
            <span className="old-price">$200</span>
            <span className="offer">-20%</span>
          </div>
        </div>
        <div className="box3">
          <img src={image4} alt="" />
          <h3 className="title">Sleeve Striped t-shir</h3>
          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$130</span>
            <span className="old-price">$160</span>
            <span className="offer">-20%</span>
          </div>
        </div>
        <button>View All</button>
      </div>


      <div className="card4">
        <h1>TOP SELLING</h1>
      </div>

      <div className="card5">
        <div className="box4">
          <img src={image5} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$120</span>
            <span className="old-price">$160</span>
            <span className="offer">-20%</span>
          </div>
        </div>

        <div className="box4">
          <img src={image6} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$120</span>

          </div>
        </div>

        <div className="box4">
          <img src={image7} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$120</span>

          </div>
        </div>

        <div className="box4">
          <img src={image8} alt="" />
          <h3 className="title">T-shirt with Tape details</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            <span className="number">3.5/5</span>
          </div>

          <div className="price-row">
            <span className="price">$120</span>

          </div>

          <button>View All</button>
        </div>
      </div>


<div className="card6">
<h1>BOWSER BY DRESSS STYLE</h1>
<div className='childcard6'>
  <div className="box5">
<img src={image9} alt="" />
  </div>
    <div className="box5">
    <img src={image10} alt="" /> 
  </div>
</div>


<div className='childcard7'>
  <div className="box6">
<img src={image11} alt="" />
  </div>
    <div className="box6">
    <img src={image12} alt="" />
  </div>
</div>
</div>


<div className="card7">
  <h1>OUR HAPPY CUSTOMERS</h1>

  <div className="arrows">
    <span>&larr;</span>
    <span>&rarr;</span>
  </div>
</div>


<div className="card8">
  <div className="box7">


  <div className="star">
    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
  </div>

  <h3 className="name">
    Sohil khan . <span className="verify">✔</span>
  </h3>

  <p className="text">
    "I'm blown away by the quality and style of the clothes I received from Shop.co.
    From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  </p>


  </div>
  <div className="box7">
    <div className="star">
    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
  </div>

  <h3 className="name">
    Aaves khan . <span className="verify">✔</span>
  </h3>

  <p className="text">
    "I'm blown away by the quality and style of the clothes I received from Shop.co.
    From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  </p>
  </div>

  <div className="box7">
    <div className="star">
    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
  </div>

  <h3 className="name">
    Affan khan. <span className="verify">✔</span>
  </h3>

  <p className="text">
    "I'm blown away by the quality and style of the clothes I received from Shop.co.
    From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  </p>
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

export default Home   