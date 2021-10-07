// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

export default function Nav() {

  return (
    <div className="nav">
      <div><Link className="links about" to="about" spy={true}>About</Link></div>
      <div><Link className="links skills" to="skills">Skills</Link></div>
      <div><Link className="links projects" to="projects"> Projects</Link></div>
      <div><Link className="links interests" to="interests">Interests</Link></div>
      <div><Link className="links contact" to="contact" >Contact</Link></div>
    </div>
  )
}