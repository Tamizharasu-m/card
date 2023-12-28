import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='align-center'>
      <div className='df jcse'>
        <div>
            <img className='footer-img' src='./Images/web-logo-2.png'/>
        </div>
        <div className='footer-align'>
            <h3>Our Location</h3>
            <ul>
              <li><a href='#'>India</a></li>
              <li><a href='#'>USA</a></li>
              <li><a href='#'>Japan</a></li>
            </ul>
        </div>
        <div className='footer-align'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>ProductList</a></li>
              <li><a href='#'>Service</a></li>
            </ul>
        </div>
        <div className='footer-align'>
          <h3>Download App</h3>
          <ul>
              <li><a href='#'>App Store</a></li>
              <li><a href='#'>Window xp</a></li>
              <li><a href='#'>Google Play</a></li>
            </ul>
        </div>
      </div>
      <div className='ta-c'><p>Creating By <span>Tamizharasu</span></p></div>
    </div>
  )
}
