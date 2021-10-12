import { Element } from 'react-scroll'

import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Experience from './Experience'


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
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  )
}