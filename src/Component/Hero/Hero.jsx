import React from 'react'
import './Hero.css'
import profile_img from'./cute-girl.avif'
// import {Link} from 'react-router-dom';




const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} class="img" alt="" />
        <h1><span> Sangeetha  ,<br />  </span>Full Stack Developer </h1>
        <p>I am a Mern Stack from coimbatore,Tamilnadu </p>
        <div className="hero-action">
            {/* <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'></AnchorLink>Contact With Me</div> */}
            
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero