import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/youtube'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_97dzq8k", "template_pzrugh7", form.current, {
        name:form.current.name.value,
        email: form.current.email.value, // Get the email from the form
        subject: form.current.subject.value, // Get the email from the form
        message: form.current.message.value, // Get the email from the form
        publicKey: "B0fVLyabPeys4qZqZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.alert("Thank you for contacting !!  We will get back to you shortly ");
          form.current.reset(); // Clear the input field
        },
        (error) => {
          console.log("FAILED...", error.text);
          window.alert("Please try again."); // Alert for failure
        }
      );
  };
  return (
    <div className="contact-us-container">
      <div className="contact-us-text">
        <h1>Let’s Collaborate</h1>
        <p>
          Would you like to collaborate with us or learn about our work? We are
          always open for collaborating on innovative projects! Send us an email
          and we’ll be sure to get back to you.
        </p>
        <p>
          Reach us at{" "}
          <a href="askimli@imlieducation.com">
            {" "}
            <b>askimli@imlieducation.com</b>
          </a>
        </p>
      </div>
      <div className="Contact">
        <div className="contact-us-form">
          <form ref={form} onSubmit={sendEmail}>
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />  

            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            {/* <label htmlFor="subject">Subject:</label> */}
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />

            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="ContactInfo">
          <h1>Contact Info</h1>
          <div className="address">
            <div className="reg">
              {/* <CIcon icon={cilLocationPin}  className="text-secondary cIcon" size="sm"/> */}
              <TiLocation className="LocationIcon" />
              <div className="details">
                <span>
                  <b>Registered Office :</b>
                </span>
                <span className="text-body">
                  Institute for Multi-Lingual Education, Indraprabha Co-op
                  Housing Society, 3rd Floor, Pune-Bangalore Highway, Dehuroad,
                  Pune 412 101
                </span>
              </div>
            </div>
            <div className="call">
              {/* <CIcon icon={cilPhone}  className="text-secondary cIcon1" size="sm"/> */}
              <IoCall className="PhoneIcon" />
              <div className="detailsCall">
                <span>
                  <b>Phone :</b>
                </span>
                <span className="phone">+91 99609 28210 </span>
              </div>
            </div>
          </div>
          <div className="ContactIcons">  
            <SocialIcon url="https://www.facebook.com/imli.education/" target="_blank" />
            <SocialIcon url="https://www.youtube.com/@imli.education/featured" target="_blank"/>
            <SocialIcon url="https://www.instagram.com/imli.education/" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
