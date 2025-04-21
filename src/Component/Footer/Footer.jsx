import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer '>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Sangeetha</h1>
          <p> Full Stack Developer <br /> Coimbatore.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Sangeetha. All rights reserved. </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer