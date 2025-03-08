import React from 'react'
import './Header.css';
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
// import { IoMenu } from "react-icons/io5";
// import { IoCloseSharp } from "react-icons/io5";

const Head = () => {
  return (
    <nav className='navbar' class="navbar  navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="abc">SANGEETHA</a>
        <button class="navbar-toggler bg-secondary" style={{ height: 30, width: 35, padding: 0 }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <div className='nav-div-ul  ' >
            <ul className="nav-menu ms-auto" class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">SKILLS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#project">PROJECT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">CONTACT</a>
              </li>

            </ul>
          </div>
          <form class="d-flex " role="search">
            <div className="nav-connect " style={{ marginLeft: '160px' }}>

              <FaGithub className='mx-3 img6' />
              <FaGitAlt className='mx-3 img7' />
              <VscVscode className='mx-3 img8' />
            </div>

          </form>
        </div>
      </div>
    </nav>
  )
}

export default Head