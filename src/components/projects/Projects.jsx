import React from 'react'
import './projects.css'
import IMG1 from '../../assets/sns.png'
import IMG2 from '../../assets/ww3.png'
import IMG3 from '../../assets/solarSystem.png'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Suno And Sunao',
    github: 'https://github.com/Ankur02Sarkar/Suno-And-Sunao.git',
    link: 'https://suno-and-sunao.vercel.app/',
    demo: 'https://drive.google.com/file/d/1GKu65rNS2gAMoQky-z6KPAE_qxQYSJCf/view?usp=sharing'
  },
  {
    id: 2,
    image: IMG2,
    title: 'World War 3',
    github: 'https://github.com/Ankur02Sarkar/World-War-3.git',
    link: 'https://thirdworldwar.netlify.app/',
    demo: 'https://drive.google.com/file/d/1ehpXFpONipfTZzfSfNxt_3p5Tx9c_iUI/view?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Solar System',
    github: 'https://github.com/Ankur02Sarkar/Solar-System-Demo.git',
    // link: '#',
    demo: 'https://drive.google.com/file/d/11aRyeqAqBIYdsQal0CFpIrfCPXEwW-9R/view?usp=sharing'
  },
  {
    id: 4,
    image: IMG4,
    title: 'MAR MOOCs Management System',
    github: 'https://github.com',
    link: 'https://link.com',
    demo: 'https://link.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Career Counselling System',
    github: 'https://github.com',
    link: 'https://link.com',
    demo: 'https://link.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Eventra',
    github: 'https://github.com',
    link: 'https://link.com',
    demo: 'https://link.com'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>My Projects</h2>
      <div className="container projects_container">
        {
          data.map(({ id, image, title, github, demo, link }) => {
            return (
              <article key={id} className="projects_item">
                <div className="projects_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                  <a href={link} className='btn btn-primary' target="_blank">Live</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Projects