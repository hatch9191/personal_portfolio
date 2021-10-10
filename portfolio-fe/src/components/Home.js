import { Element } from 'react-scroll'

import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Interests from './Interests'
import Contact from './Contact'


export default function Home() {

  return (
    <div className="">
      <Element name="hero">
        <Hero />
      </Element> 
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="interests">
        <Interests />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}