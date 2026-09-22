import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const form = e.target;

    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      title: form.title.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(
        "service_nemyam5",
        "template_omlvyud",
        templateParams,
        {
          publicKey: "-rcWIFLHbcrmvu6jO",
        }
      );

      setStatus("Message sent successfully! ✅");

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        `Failed to send message ❌ ${
          error.text || error.message || "Please check EmailJS settings."
        }`
      );
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

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

            {/* Email */}
            <div className="contact-item">

              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <h4>Email</h4>
                <p>abilashg2004@gmail.com</p>
              </div>

            </div>

            {/* Phone */}
            <div className="contact-item">

              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+91 97518 40782</p>
              </div>

            </div>

            {/* Location */}
            <div className="contact-item">

              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <h4>Location</h4>
                <p>Kanya Kumari, Tamil Nadu</p>
              </div>

            </div>

            {/* Social Links */}
            <div className="contact-social">

              <a
                href="https://github.com/Abilashg04"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abilash2004"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
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

          {/* Contact Form */}
          <div className="contact-form-box">

            <form onSubmit={sendEmail}>

              <div className="input-row">

                <div className="input-group">

                  <label>Your Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>

                <div className="input-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter subject"
                  required
                />

              </div>

              <div className="input-group">

                <label>Message</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="send-btn"
              >
                Send Message
                <FiSend />
              </button>

              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;