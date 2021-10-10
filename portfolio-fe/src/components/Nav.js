// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

export default function Nav() {

  return (
    <div className="nav">
      <div>
        <Link 
          className="links about"
          activeClass="about-active active"
          to="about" 
          spy={true} 
          smooth={true} 
          duraction={500}
        >About</Link>
      </div>
      <div>
        <Link 
          className="links skills" 
          activeClass="skills-active active"
          to="skills" 
          spy={true} 
          smooth={true} 
          duraction={500}
        >Skills</Link>
      </div>
      <div>
        <Link 
          className="links projects" 
          activeClass="projects-active active"
          to="projects" 
          spy={true} 
          smooth={true} 
          duraction={500}
        >Projects</Link>
      </div>
      <div>
        <Link 
          className="links interests" 
          activeClass="interests-active active"
          to="interests"
          spy={true} 
          smooth={true} 
          duraction={500}
        >Interests</Link>
      </div>
      <div>
        <Link 
          className="links contact" 
          activeClass="contact-active active"
          to="contact"
          spy={true} 
          smooth={true} 
          duraction={500}
        >Contact</Link>
      </div>
    </div>
  )
}