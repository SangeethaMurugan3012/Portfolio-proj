import React from 'react'
import './Contacts.css'
import mail_icon from './mail icon.png'
import location_icon from './location icon.jpg'
import call_icon from './call icon.png'

export default function Contacts() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "05d73342-0aeb-434b-997d-9596245d0b11");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="head-name">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section row">
                <div className="contact-left col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  ">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to <br /> send me a message about anything that you want me to work <br /> on. You can contact anytime.</p>


                    {/* <div className="contact-main"> */}
                    {/* <div className="contact-sub"> */}
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>sangeethamurugan3012@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>9489387939</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Coimbatore,Tamil Nadu</p>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    <form onSubmit={onSubmit} className="contact-right">
                        <label className='form-label' htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' className='form-control bg-dark-subtle' name='name' />
                        <label htmlFor="" className='form-label'>Your Email</label>
                        <input type="email" placeholder='Enter Your Email' className='form-control bg-dark-subtle' name='email' />
                        <label htmlFor="" className='form-label'>Write Your Message Here</label>
                        <textarea name="message" rows="8" id="" placeholder='Enter Your Message' className='form-control bg-dark-subtle'></textarea>
                        <button onClick={onsubmit} type='submit' className="contact-submit mt-5">Submit now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
