import React from "react";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div id="contact" className="container pt-60 pb-60">
      <h2 className="custom-title text-center">Contact Us</h2>
      <div className="form m-auto">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!</p>

          <div className="social-media">
            <p>Our social connects :</p>
            <div className="social-icons">
              <span href="#">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span href="#">
                <i className="fab fa-twitter"></i>
              </span>
              <span href="#">
                <i className="fab fa-instagram"></i>
              </span>
              <span href="#">
                <i className="fab fa-linkedin-in"></i>
              </span>
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
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
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

export default ContactUs;
