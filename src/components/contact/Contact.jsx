import React from 'react'
import "./contact.css" 

const Contact = () => {
  return (
    <div className="prof__form" id="contact" data-netlify="true">
      <h1 className="gradient__text">Contact me</h1>
      <form className="prof__form-form">
        <div className="prof__form-name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="prof__form-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="prof__form-message">
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
        </div>
        <button className="prof__form-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact