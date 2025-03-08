import React from 'react'
import './Mywork.css'
// import mywork_data from './Assets/mywork-data'
import arrow_icon from './fast-forward.png'
import project1_img from './project1.jpg'
import project2_img from './project2.jpg'
import project3_img from './project3.jpg'
// import project4_img from './project4.jpg'
// import project5_img from './project5.jpg'
// import project6_img from './project6.jpg'


const mywork_data =[
    {
        w_no:1,
        w_name:"Web design",
        w_img:project1_img
    },
    {
        w_no:2,
        w_name:"Web design",
        w_img:project2_img
    },
    {
        w_no:3,
        w_name:"Web design",
        w_img:project3_img
    },
    //  {
    //     w_no:4,
    //      w_name:"Web design",
    //      w_img:project4_img
    //   },
    // {
    //     w_no:5,
    //     w_name:"Web design",
    //     w_img:project5_img
    // },
    // {
    //     w_no:6,
    //     w_name:"Web design",
    //     w_img:project6_img
    // },
]

const Mywork = () => {
  return (
    <div id='project' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
        <div className="mywork-container">
     {mywork_data.map((Work,index)=>{
        return <a href="/"><img key={index} src={Work.w_img} alt="#N" />Link</a>
     })}
        </div>
       <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} width={20} height={30}className='mt-2' alt="#N" />
        </div>
    </div>
  )
}

export default Mywork