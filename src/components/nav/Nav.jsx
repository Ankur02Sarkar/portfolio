import React from 'react'
import './nav.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { BsCodeSlash } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { GiSkills, GiAchievement, GiClockwork } from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav className='navicons'>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsCodeSlash /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GiClockwork /></a>
      <a href="#achievements" onClick={() => setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}><GiAchievement /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav