import "./Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mtosntn', 'template_g0l3zgq', form.current, 'template_g0l3zgqQWERT567')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className='contact-form'>
        <div className='l-contact'>
            <div className='span-contact'>
                <span>Get in Touch</span>
                <span>Contact me</span>
            </div>
            <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>   
        </div>
        <div className='r-contact'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='enter the name'/>
                <input type="email" name="user_email" className='user' placeholder='enter the email'/>
                <textarea style={{height:"5rem"}} type="message" className='user' placeholder='enter the email'/>
                <input type="submit" value="send" className='button' />
                <div className='blur c-blur1' style={{background:"purple"}}></div>
            </form>
        </div>

    </div>
  )
}

export default Contact