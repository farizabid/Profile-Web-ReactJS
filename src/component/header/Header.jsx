import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);
  return (
    <header>
      <div data-aos="fade" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Fariz Abid Darmawan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header