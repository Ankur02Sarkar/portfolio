import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Ankur.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h3>Hello World! </h3>
        <h1>I am Ankur Sarkar</h1>
        <h3 className="text-light">A Front End Developer</h3>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Ankur Sarkar" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header