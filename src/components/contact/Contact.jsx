import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import { useState,useRef } from "react"
import emailjs from 'emailjs-com'
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_0qoib0b','template_vxw3sqg',form.current,'eRQ20YRx75hNi1dPr')
    e.target.reset();
  }
  return (
   <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
          <MdEmail/>
          <h4>Gmail</h4>
          <h5>arshadaamir09@gmail.com</h5>
          <a href='mailto:arshadaamir09@gmail.com' target="_blank">Send me a message</a>
        </article>
       
        <article className='contact_option'>
          <FaWhatsapp/>
          <h4>whatsapp</h4>
          <h5>+91 12345678</h5>
          <a href="https://api.whatsapp.com/send?phone=+917991185560" target="_blank">Send me a message</a>
        </article>
      </div>
      <form action="">
        <input type="text" name="name" placeHolder="Your Full Name" required/>
        <input type="text" name="email" placeHolder="Your Email" required/>
        <textarea name='message' rows="7" placeHolder="Your Message" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact