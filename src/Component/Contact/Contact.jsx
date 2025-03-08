import React from 'react'
import './Contact.css'
import mail_icon from './mail icon.png'
import location_icon from './location icon.jpg'
import call_icon from './call icon.png'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contect-title">
                <h1>Get in touch</h1>
            
            </div>

            <div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you <br />want me to work on. You can contact anytime.</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" /><p>Sangeethamurugan3012@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" /><p>9489387939</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" /><p>Coimpature,Tamil Nadu</p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" id="" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>


                </form>
            </div>
        </div>
    )
}

export default Contact