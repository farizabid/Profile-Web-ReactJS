import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portofolio1.jpg'
import IMG2 from '../../assets/portofolio2.jpg'
import IMG3 from '../../assets/portofolio3.jpg'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [
  {
    id: 1,
    image: IMG1,
    tittle: 'Portofolio1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    tittle: 'Portofolio2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    tittle: 'Portofolio3',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portofolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div data-aos="fade-up" className="container portofolio__container">
        {
          data.map(({ id, image, tittle, github, demo }) => {
            return (
              <article key="id" className='portofolio__item'>
                <div data-aos="fade-up" className="portofolio__item-image">
                  <img src={image} alt={tittle} />
                </div>
                <h3>{tittle}</h3>
                <div className="portofolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio