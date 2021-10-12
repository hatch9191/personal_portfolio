import projects from '../data/projects.json'

export default function Projects() {
  return (
    <div className="container projects-container">
      <div className="projects-text">
        <p className="title">Projects</p>
        {projects.map(project => (
          <div key={project.id} className={project.id % 2 === 0 ? `project-card project-${project.id}` : `project-card project-${project.id}`} >
            <p className="subtitle">{project.project} - {project.name}</p>
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
        ))}
      </div>
    </div>
  )
}