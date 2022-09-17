import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Achievements from "./components/achievements/Achievements"
import Projects from "./components/projects/Projects"
import Cocurricular from './components/product-images-slider/index';
import { productImages } from './assets/assets'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Cocurricular images={productImages} />
      <Contact />
      <Footer />
    </>
  )
}

export default App