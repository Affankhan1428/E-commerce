import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import image from './g pay.jpg'
import image1 from './pay_2.png'
import image2 from './pay_pal.png'
import image3 from './Apple-Pay.jpg'
import image4 from './vesa.jpeg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h1>SHOP.CO</h1>
          <p>
            We have clothes that suits your style and which you’re proud to wear.
            From women to men.
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>COMPANY</h3>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>

          <div>
            <h3>HELP</h3>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h3>FAQ</h3>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>

          <div>
            <h3>RESOURCES</h3>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="cards">
          <img src={image} alt="visa" />
          <img src={image1} alt="master card" />
          <img src={image2} alt="paypal" />
          <img src={image3} alt="apple pay" />
          <img src={image4} alt="google pay" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
