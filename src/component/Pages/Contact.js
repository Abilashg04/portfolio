import React, { useState } from "react";
import "../Styles/Contact.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <p>CONTACT ME</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <div className="contact-line"></div>

          <p className="contact-description">
            Have a project idea or want to work together?
            Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Let's Talk</h3>

            <p>
              I'm always open to discussing new projects,
              creative ideas and opportunities.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <h4>Email</h4>
                <p>abilashg2004@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+91 97518 40782</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <h4>Location</h4>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-social">
              <a
                href="https://github.com/Abilashg04"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abilash2004"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://www.instagram.com/abi_2004__" target="_blank" rel="noreferrer"
              >
                <FiInstagram />
              </a>
            </div>

          </div>

          <div className="contact-form-box">

            <form onSubmit={handleSubmit}>

              <div className="input-row">

                <div className="input-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="input-group">
                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Message</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                Send Message
                <FiSend />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;