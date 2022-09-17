import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">Ankur Sarkar</div>
      <div className="footer_socials">
        <a href="https://fb.com"><FaFacebookF /></a>
        <a href="https://insta.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Ankur Sarkar 2022</small>
      </div>
    </footer>
  )
}

export default Footer