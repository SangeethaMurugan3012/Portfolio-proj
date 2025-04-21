import React from 'react'
import './Portfolio.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function Portfolio() {
  return (
    <div id='skills' className='port-menu'>
      <div className="port-title">
        <h1>Skills</h1>
        </div>
        <div className="port-content">
          <div className='one h-75 fs-2'>
          <h1>Frontend</h1>
          
          <FaHtml5 className='mx-3 img1'/>
          <FaCss3 className='mx-3 img2' />
          <FaBootstrap className='mx-3 img3'/>
          <FaJs className='mx-3 img4' />
          <FaReact className='mx-3 img5' />
          </div>
          

          <div className='one h-75 fs-2'> 
          <h1>Backend</h1>
          <FaNodeJs className='mx-3 img9'/>
          <SiMongodb className='mx-3 img10'/>
          <SiExpress className='mx-3 img11' />
          </div>
        
        </div>
        </div>
  )
}
