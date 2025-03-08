import React from 'react'
import './Services.css'
// import theme_patttern from './'
import arrow_icon from './fast-forward.png'


const Services_Data =[
  {
    s_no:"01",
    s_name:"Web design",
    s_desc:"Web development is the process of,programming..."
  },
  {
      s_no:"02",
      s_name:"Graphics design",
      s_desc:"Web development is the process of,programming..."
    },
    {
      s_no:"03",
      s_name:"Social media",
      s_desc:"Web development is the process of,programming..."
    },
    {
      s_no:"04",
      s_name:"App design",
      s_desc:"Web development is the process of,programming..."
    },
    {
      s_no:"05",
      s_name:"Digitial marketing",
      s_desc:"Web development is the process of,programming..."
    },
    {
      s_no:"06",
      s_name:"Content Writting",
      s_desc:"Web development is the process of,programming..."
    },
  ]

const Services = () => {
 
  return (
    <div className="services">
    <div className="services-title">
      <h1>My Services</h1>
      {/* <img src={theme_patttern} alt="" /> */}
 </div>
 <div className="services-cotainer"> 
   {Services_Data.map((service,index)=>{
    return <div key={index} className='services-format'>
      <h3>{service.s_no}</h3>
      <h2>{service.s_name}</h2>
      <p>{service.s_desc}</p>
      <div className='servies-readmore'>
        <p>Read More</p> 
         <img src={arrow_icon} width={20} alt="" />
       </div> 
     </div>
   })} 
  </div> 
 </div>
  )
}

export default Services