import React from 'react'
import './About.css'
import image from './Black.png'
import image1 from './cloths_t_shirt1.png'
import image2 from './cloths_t_shirt3.png'
import image3 from './necer.png'
import image4 from './pent_1.png'
import image5 from './shirt1.png'
import image6 from './shirt2.png'
import image7 from './tshirt3.png'
import image8 from './tsirt_2.png'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"





function About() {
  return (

    <div>


      <div className="casual-header">
        <h2 className="title">Casual</h2>

        <div className="right-section">
          <span className="showing-text">
            Showing 1–10 of 100 Products
          </span>

          <select className="sort-select">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="main-right">
        <div className="mini-right">
          <img src={image} alt="" />
          <h3>Black T-shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$180</span>
          </div>

        </div>
        <div className="mini-right">
          <img src={image1} alt="" />
          <h3>Black Striped T-shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$120</span>
          </div>
        </div>
        <div className="mini-right">
          <img src={image2} alt="" />
          <h3>Gradient Graphic T-shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$299</span>
          </div>
        </div>
        <div className="mini-right">
          <img src={image3} alt="" />
          <h3>loose fit Bermuda short</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$199</span>
          </div>
        </div>
        <div className="mini-right">
          <img src={image4} alt="" />
          <h3>Skinny Fit Jeans</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$149</span>
          </div>
        </div>
        <div className="mini-right">
          <img src={image5} alt="" />
          <h3>Vertical Striped Shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$160</span>
          </div>
        </div>
        <div className="mini-right">
          <img src={image6} alt="" />
          <h3>Checkered Shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$99.99</span>
          </div>
        </div>
        <div className="mini-right">
          <img src={image7} alt="" />
          <h3>Gourage Graphic T-shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$199.99</span>
          </div>
        </div>

        <div className="mini-right">
          <img src={image8} alt="" />
          <h3>Sleeve Striped T-shirt</h3>
          <div className="rating1">
            <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            <span className="number">3.5/5</span>
          </div>
          <div className="price-row">
            <span className="price">$110</span>
          </div>
        </div>

      </div>


      <div className="filter-box">
        <p className="breadcrumb">Home &gt; Casual</p>

        <div className="filter-card">
          <div className="filter-header">
            <h3>Filters</h3>
            <span>☰</span>
          </div>

          <ul className="category">
            <li>T-shirts <span>›</span></li>
            <li>Shorts <span>›</span></li>
            <li>Shirts <span>›</span></li>
            <li>Hoodie <span>›</span></li>
            <li>Jeans <span>›</span></li>
          </ul>

          <div className="section">
            <h4>Price</h4>
            <input type="range" />
            <div className="price">
             
            </div>
          </div>

          <div className="section">
            <h4>Colors</h4>
            <div className="colors">
              <span className="c green"></span>
              <span className="c red"></span>
              <span className="c yellow"></span>
              <span className="c orange"></span>
              <span className="c blue active"></span>
              <span className="c purple"></span>
              <span className="c pink"></span>
              <span className="c white"></span>
              <span className="c black"></span>
            </div>
          </div>

          <div className="section">
            <h4>Size</h4>
            <div className="sizes">
              <button>XX-Small</button>
              <button>X-Small</button>
              <button>Small</button>
              <button>Medium</button>
              <button className="active">Large</button>
              <button>X-Large</button>
              <button>XX-Large</button>
              <button>3X-Large</button>
              <button>4X-Large</button>
            </div>
          </div>

          <div className="section">
            <h4>Dress Style</h4>
            <ul className="category">
              <li>Casual <span>›</span></li>
              <li>Formal <span>›</span></li>
              <li>Party <span>›</span></li>
              <li>Gym <span>›</span></li>
            </ul>
          </div>

          <button className="apply-btn">Apply Filter</button>
        </div>
      </div>

<div className="card9">
  <h1>STAY UPTO DATE ABOUT <br />
  OUR LETEST OFFERS</h1>


  <input type="Email" placeholder='✉️ Enter your email address' /> <br />
  <button>Subscribe to newslletter</button>
</div>




    </div>
  );
}

export default About