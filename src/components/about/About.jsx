import React from 'react'
import './about.css'
import ME from '../../Ankur.png'
import { BsCodeSlash } from 'react-icons/bs'
import { GiClockwork } from 'react-icons/gi'
const About = () => {
  return (
    <section id='about'>
      <h2>Who Am I</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="Ankur Sarkar" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <BsCodeSlash className='about_icon' />
              <h5>Experience</h5>
              <small>2+ Years of Experience</small>
            </article>

            <article className="about_card">
              <GiClockwork className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Projects Completed</small>
            </article>

          </div>

          <p>
            Hello World! Currently I'm a Sophomore pursuing my B.Tech in Electronics and Communications
            Engineering from JIS College Of Engineering. I'm quite Interested in Coding and Stuff. I have always
            believed that Real Life Projects are the best way to sculpt out a Skilled and Dedicated Proffesional
            out of a Student. This is also one of the Reasons I'm Eager to Work with the IT Companies to get an
            Oppurtunity of Exploring new Challenges and Enrich my Problem Solving Skills
          </p>
          <div className='details about_me'>
            <a href="#contact" className="btn btn-primary contact-btn">Contact Me</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About