import React from 'react'
import './Footer.css'
// import footer_logo from './'
import user_icon from './user-128.png'

const Footer = () => {
  return (
    <div className='footer '>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Sangeetha</h1>
              <p> Full Stack Developer <br /> Coimbatore.</p>
            </div>
            {/* <div className="footer-top-right  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"> */}
                {/* <div className="footer-email-input"> */}
                {/* <img src={user_icon} alt="" /> */}
                {/* <input type="email" placeholder='Ender Your Email'/> */}
                </div>
                {/* <div className="footer-subscribe">Subscribe</div> */}

            {/* </div> */}
        {/* // </div> */}
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