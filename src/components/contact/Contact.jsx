import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import  {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_234x03v', 'template_m5pu99a', form.current, 'nOmiVbwNs9A96SI9Z')

     e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vinhntse2002@gmail.com</h5>
            <a href="vinhntse2002@gmail.com">Send a message</a>
          </article>
 
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>VinhNguyen</h5>
            <a href="https://m.me/thanhvinh.nguyen.182">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact