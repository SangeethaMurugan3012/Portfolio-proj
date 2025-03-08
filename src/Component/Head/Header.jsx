import React, { useState,useRef } from 'react';
import './Header.css';
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
// import {Link} from 'react-router-dom';
// import { Home } from '../Hero/Home';


const Header = () => {
    //  const [menu,setMenu] =useState("");
    const menuRef =useRef();

    const openMenu = () => {
        menuRef.current.style.right="0"
    }
    const closeMenu = () => {
      menuRef.current.style.right="-350px"
  }

  return (
    <div id='home' className='navbar'>
    
        <a href="">SANGEETHA</a>
       <IoMenu onclick={openMenu} className='nav-mob-open'/>

         <ul ref={menuRef} className="nav-menu"> 
         <IoCloseSharp onclick={closeMenu} className='nav-mob-close'/>

            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#contact">CONTACT</a></li>

         </ul>      
         
    </div>
  )
}
 <div className="nav-connect">
            
         <FaGithub className='mx-3 img6' />
           <FaGitAlt  className='mx-3 img7'/>
          <VscVscode className='mx-3 img8'/>
         </div> 
export default Header