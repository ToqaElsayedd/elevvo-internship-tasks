import React from "react";
import "../App.css";
import Message from "@mui/icons-material/Send";

function Form() {
  return (
    <>
      <div className="form-container">
        <div className="form-section">
          <form className="form">
            <h1>Get in Touch</h1>
            <p>
              We'd love to hear from you. Please fill out the <br /> form below.
            </p>
            <label for="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Jane Doe" required />
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <label for="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="inquiry about your services"
              required
            />
            <label for="message">Message</label>
            <input
              id="message"
              type="text"
              placeholder="Your detailed message here..."
              style={{ height: "70px" }}
              required
            />
            <br />
            <button className="submit-btn">
              Send Message
              <Message
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              />
            </button>
          </form>
        </div>
        <div className="image-section">
          <img src="/assets/contact.jpg" alt="Contact Us" id="img" />
        </div>
      </div>
    </>
  );
}

export default Form;
