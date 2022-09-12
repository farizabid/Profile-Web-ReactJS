import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FarizAbid</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank"><FaFacebook/></a>
        <a href="https://instagram.com" target="_blank"><RiInstagramFill/></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; FarizAbid. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer