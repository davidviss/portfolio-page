import React, { useState } from "react"
import "./contact.css" 
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_bis2kfe";
const TEMPLATE_ID = "template_a3xw85a";
const PUBLIC_KEY = "QB5UokG-7gPRsV_Gy";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="prof__form" id="contact">
      <h1 className="gradient__text">Contact me</h1>
      <form className="prof__form-form" onSubmit={handleSubmit}>
        <div className="prof__form-name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" required />
        </div>
        <div className="prof__form-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="from_email" required />
        </div>
        <div className="prof__form-message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"required />
        </div>
        <button className="prof__form-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact