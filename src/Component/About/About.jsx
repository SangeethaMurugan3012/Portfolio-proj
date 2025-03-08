import React from 'react'
import './About.css'
// import theme_pattern from './images (1).jpg'
import profile_img from './cute-girl.avif'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="about-sections ">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                    
                     <p>"I am a recent graduate with a strong foundation in Full Stack Development,equipped with knowledge in both front-end and back-end I have hands-on experience with HTML, CSS,  JavaScript, and frameworks like React and Node.js, along with proficiency in working with databases like MongoDB. Throughout my academic journey, I developed a passion for building scalable, user-friendly applications and have worked on several personal projects to enhance my skills. I am eager to apply my technical abilities, problem-solving skills, and  enthusiasm for coding in a professional setting. I am excited to grow as a developer and contribute to creating impactful solutions."</p>
                    </div>
                     {/* <div className="about-skills">
                        <div className="about-skill" style={{ width: "100%" }}><p>HTML & CSS</p><hr style={{ width: '50%' }} /> </div>
                        <div className="about-skill" style={{ width: "70%" }}><p>Bootstrap</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill" style={{ width: "50%" }}><p>Javascript</p><hr style={{ width: '60%' }} /> </div>
                        <div className="about-skill" style={{ width: "60%" }}><p>React JS</p><hr style={{ width: '50%' }} /> </div>
                         </div>  */}
                </div>
            </div>
          
        </div>
    )
}

export default About