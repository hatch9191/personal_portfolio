import Fade from 'react-reveal/Fade'

import projects from '../data/projects.json'

export default function Projects() {

  let n = 0
  let i = -300

  return (
    <div className="container projects-container">
      <div className="projects-text">
        <p className="title">Projects</p>
        {projects.map(project => (
          <Fade key={project.id} duration={2000} delay={i += 300} >
            <div  className={project.id % 2 === 0 ? `project-card project-${project.id}` : `project-card project-${project.id}`} >
              <p className="subtitle">{project.project} - {project.name}</p>
              <div className="devicon">
                {project.devicons.map(icon => (
                  <p key={n += 1} className={`subtitle ${icon.name}`}><i className={icon.deviconClass}></i></p>
                ))}
              </div>
              <div className={project.id % 2 === 0 ? 'project-content right' : 'project-content left'}>
                <img src={project.screenshot} alt={project.name} />
                <div>
                  <p className="description">{project.description}</p>
                  <p className="links">
                    <a target="_blank" href={project.site} rel="noreferrer">Visit the Site</a> <span>|</span> 
                    {' '}<a target="_blank" href={project.readMe} rel="noreferrer">See the ReadMe</a>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  )
}