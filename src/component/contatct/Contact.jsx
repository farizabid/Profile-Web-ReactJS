import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f5yjp2i', 'template_sqpisys', form.current, 'qOSCnzwjjepl2sd-F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div data-aos="fade-up" className="contact__options">
          <article className="contact__option">
          <FiMail/>
          <h4>Email</h4>
          <h5>Farizabiddarmawan@gmail.com</h5>
          <a href="mailto:Farizabiddarmawan@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
          <FaFacebookMessenger/>
          <h4>Messangger</h4>
          <h5>Fariz Abid Darmawan</h5>
          <a href="https://m.me/farizabid.darmawan" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>+6289682339951</h5>
          <a href="https://wa.me/+6289682339951" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form data-aos="fade-up" autoComplete='off' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact