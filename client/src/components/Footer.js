import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us to receive our best car service deals
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Our Services</h2>
            <p>-Annual Service</p>
            <p>-Major Service</p>
            <p>-Reapir and Fault</p>
            <p>-Major Reapir</p>
          </div>
          <div class="footer-link-items">
            <h2>Opening Hours</h2>
            <p>Mon - Sat: 8am - 5pm</p>
            <p>Sunday:Close</p>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            
            
            <p>30-34 Westmoreland St</p>
            <p>Dublin 2</p>
            <p>D02 HK35</p>
            <p>Tel: 083xxxxxxx</p>
          </div>
        </div>
        <div className="footer-link-wrapper"></div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Ger's Garage
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Ger's Garage © 2021</small>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/"
              className="social-icon-link facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="social-icon-link instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-icon-link youtube"
            >
              <i class="fab fa-youtube" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
