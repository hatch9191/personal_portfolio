// import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Nav() {

  return (
    <div className="nav">
      <div 
        className="logo" 
        title="Harry Evans" 
        onClick={() => scroll.scrollToTop()}>
        <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1633997362/project-setup-test/mylogo_h0cnxm.png" />
      </div>
      <div className="nav-text">
        <div>
          <Link 
            className="links about"
            activeClass="about-active active"
            to="about" 
            spy={true} 
            smooth={true} 
            duration={800}
          >About</Link>
        </div>
        <div>
          <Link 
            className="links skills" 
            activeClass="skills-active active"
            to="skills" 
            spy={true} 
            smooth={true} 
            duration={800}
          >Skills</Link>
        </div>
        <div>
          <Link 
            className="links projects" 
            activeClass="projects-active active"
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={800}
          >Projects</Link>
        </div>
        <div>
          <Link 
            className="links experience" 
            activeClass="experience-active active"
            to="experience"
            spy={true} 
            smooth={true} 
            duration={800}
          >Experience</Link>
        </div>
        <div>
          <Link 
            className="links contact" 
            activeClass="contact-active active"
            to="contact"
            spy={true} 
            smooth={true} 
            duration={800}
          >Contact</Link>
        </div>
      </div>
      
    </div>
  )
}