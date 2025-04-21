// import React, { useState } from 'react'
import './Header.css';
// import { FaGithub } from "react-icons/fa";
// import { FaGitAlt } from "react-icons/fa";
// import { VscVscode } from "react-icons/vsc";

import React, { useState } from 'react';
import { FaGithub, FaGitAlt } from 'react-icons/fa';  // import the icons
import { VscVscode } from 'react-icons/vsc';  // import the VS Code icon

const Head = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="abc">SANGEETHA</a>
        <button
          className="navbar-toggler bg-info-subtle"
          style={{ height: 30, width: 35, padding: 0 }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={toggle ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setToggle(!toggle)} // Toggle the state when clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-dark">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">PROJECT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">CONTACT</a>
            </li>
          </ul>

          {/* Social media icons section */}
          <form className="d-none d-md-block">
            <div className="d-flex">
              <FaGithub className="img6 mx-lg-3 mx-md-2" />
              <FaGitAlt className="img7 mx-lg-3 mx-md-2" />
              <VscVscode className="img8 mx-lg-3 mx-md-2" />
            </div>
          </form>

          {/* Close Button (Only visible on mobile, inside the collapsed navbar) */}
          <button
            className="navbar-close btn d-lg-none bg-info"
            style={{ position: 'absolute', top: 10, right: 10 ,height: 35, width: 40, padding: 0 }}
            onClick={() => setToggle(false)} // Close the navbar when clicked
            aria-label="Close"
          >
            &times; {/* Unicode for "X" symbol */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Head;



// import React, { useState } from 'react';
// import { FaGithub, FaGitAlt } from 'react-icons/fa';  // import the icons
// import { VscVscode } from 'react-icons/vsc';  // import the VS Code icon

// const Head = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="abc">SANGEETHA</a>
//         <button
//           className="navbar-toggler bg-info"
//           style={{ height: 30, width: 35, padding: 0 }}
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded={toggle ? "true" : "false"}
//           aria-label="Toggle navigation"
//           onClick={() => setToggle(!toggle)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#home">HOME</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">ABOUT</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#skills">SKILLS</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#project">PROJECT</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">CONTACT</a>
//             </li>
//           </ul>

//           {/* Social media icons section */}
//           <form className="d-none d-md-block">
//             <div className="d-flex">
//               <FaGithub className="img6 mx-lg-3 mx-md-2" />
//               <FaGitAlt className="img7 mx-lg-3 mx-md-2" />
//               <VscVscode className="img8 mx-lg-3 mx-md-2" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Head;



// const Head = () => {
//  const [toggle , settoggle] = useState(false)

//   return (
//     <nav className='navbar' class="navbar  navbar-expand-lg ">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="abc">SANGEETHA</a>
//         <button class="navbar-toggler bg-secondary" style={{ height: 30, width: 35, padding: 0 }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           {/* <button type="button" class="btn btn-secondary bg-light text-light d-lg-none d-md-block me-md-5 ">X</button> */}
//           <span class="navbar-toggler-icon"></span>
        
         
//         </button>
       
//         <div class="collapse navbar-collapse " id="navbarSupportedContent">
//           <div className='nav-div-ul  ' >
//             <ul className="nav-menu ms-auto" class="navbar-nav mb-2 mb-lg-0 me-sm-5">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#home">HOME</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#about">ABOUT</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#skills">SKILLS</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#project">PROJECT</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#contact">CONTACT</a>
//               </li>

//             </ul>
//           </div>
//           <form class=" d-block gap-3 fs-4 d-none d-md-block m-md-0 p-md-0" role="search"  style={{ marginLeft: '360px' }}>
            
//             <div className=' d-flex '>
//               <FaGithub className=' img6 mx-lg-3 mx-md-2 ' />
//               <FaGitAlt className=' img7 mx-lg-3 mx-md-2' />
//               <VscVscode className=' img8 mx-lg-3 mx-md-2'/>
//               </div>

//           </form>
          
//         </div>
//       </div>
//     </nav>

    
//   )
// }

// export default Head