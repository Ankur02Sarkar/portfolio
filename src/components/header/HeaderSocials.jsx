import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FaHackerrank } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { RiMailSendLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/Ankur02Sarkar" target="_blank"><FiGithub /></a>
      <a href="https://www.linkedin.com/in/ankur-sarkar" target="_blank"><FiLinkedin /></a>
      <a href="https://www.hackerrank.com/God_Slayer" target="_blank"><FaHackerrank /></a>
      <a href="tel:+917449600707" target="_blank"><BsTelephone /></a>
      <a href="mailto:sarkarrohonankur@gmail.com" target="_blank"><RiMailSendLine /></a>
      <a href="https://wa.me/+917449600707" target="_blank"><AiOutlineWhatsApp /></a>
    </div>
  )
}

export default HeaderSocials