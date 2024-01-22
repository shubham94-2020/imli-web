import React from 'react';
import './contact.css'; // Make sure to adjust the path accordingly

function Contact() {
  return (
    <div className="container">
      {/* <span className="big-circle"></span> */}
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="/components/Contact/img/location.png" className="icon" alt="" />
              <p>bajajnagar, Aurangabad</p>
            </div>
            <div className="information">
              <img src="/components/Contact/img/email.png" className="icon" alt="" />
              <p>shubhampatil94.2020@gmail.com</p>
            </div>
            <div className="information">
              <img src="/components/Contact/img/phone.png" className="icon" alt="" />
              <p>91+ 7420853790</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              {/* <label htmlFor="">Username</label> */}
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder="Email" style={{color:"white"}}/>
              {/* <label htmlFor="">Email</label> */}
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
