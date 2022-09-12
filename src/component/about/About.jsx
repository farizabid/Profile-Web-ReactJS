import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500});
  }, []);
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div data-aos="fade-up" className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div data-aos="fade-up" className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>

            <article className="about__card">
              <HiUserGroup className='about__icons'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icons'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus facilis cupiditate maiores, sint perferendis natus sapiente, vel eos ratione eum similique ut laborum, incidunt ab error nesciunt obcaecati. Quod!  
          </p>
          <a href="#contact"className='btn btn-primary'>Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About