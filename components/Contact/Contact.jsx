import React from 'react';
import './contact.css';
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";




const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-text">
        <p>
          Would you like to collaborate with us or learn about our work? Have any questions on our initiatives? Leave us a message by filling in the form below. For more details on how you can partner with us, visit our <a href=""> partnerships page </a> or <a href=""> subscribe to our newsletter. </a>
        </p>
      </div>
      <div className="Contact">
      <div className='contact-us-form'>
        <form>
          {/* <label htmlFor="name">Name:</label> */}
          <input type="text" id="name" name="name" placeholder='Name' required />
             
          {/* <label htmlFor="email">Email:</label> */}
          <input type="email" id="email" name="email"  placeholder='Email' required />

          {/* <label htmlFor="subject">Subject:</label> */}
          <input type="text" id="subject" name="subject"  placeholder='Subject' required />

          {/* <label htmlFor="message">Message:</label> */}
          <textarea id="message" name="message"  placeholder='Message' required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      
      <div className='ContactInfo'>
        <h1>Contact Info</h1>
          <div className='address'>
            <div className='reg'> 
            {/* <CIcon icon={cilLocationPin}  className="text-secondary cIcon" size="sm"/> */}
            <IoLocation className='LocationIcon'/>
            <div className="details">
            <span><b>Registered Office :</b></span>
            <span className='text-body'>Institute for Multi-Lingual Education, Indraprabha Co-op Housing Society, 3rd Floor, Pune-Bangalore Highway, Dehuroad, Pune 412 101</span>
            </div>
            </div>
            <div className="call">
            {/* <CIcon icon={cilPhone}  className="text-secondary cIcon1" size="sm"/> */}
            <IoCall className='PhoneIcon'/>
            <div className="detailsCall">
            <span><b>Phone :</b></span>
            <span className='phone'>+91 99609 28210 </span>
            </div>
            </div>

          </div>
      <div className="ContactIcons">
        <FaFacebook className='SocialIcons'/> <FaYoutube className='SocialIconsY'/> <RiInstagramFill className='SocialIcons' />

      </div>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;