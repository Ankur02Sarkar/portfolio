import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jffesja', 'template_dbsuloq', form.current, 'cZyzbMBAD_2YKvLFO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>sarkarrohonankur@gmail.com</h5>
            <a href="mailto:sarkarrohonankur@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Ankur Sarkar</h5>
            <a href="https://m.me/Ank.Sar.02" target="_blank">Text Me</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917449600707</h5>
            <a href="https://wa.me/917449600707" target="_blank">Ping Me</a>
          </article>
          <article className="contact_option">
            <FiTwitter className="contact_option-icon" />
            <h4>Twitter</h4>
            <h5>Ankur02Sarkar</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1112729513060982791&text=Hi" target="_blank">Send me a Hi</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required ></textarea>
          <div className='details about_me'>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact