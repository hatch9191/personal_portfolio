import skills from '../data/skills.json'

export default function Skills() {

  return (
    <div className="container skills-container">
      <div className="skills-text">
        <p className="title">Skills</p>
        <div className="frontend">
          <p className="subtitle">Frontend</p>
          <div className="icons">
            {skills.frontend.map(skill => (
              <>
                {skill.deviconClass && (
                  <p><i className={skill.deviconClass}></i></p>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="backend">
          <p className="subtitle">Backend</p>
          <div className="icons">

            {skills.backend.map(skill => (
              <>
                {skill.deviconClass && (
                  <p><i className={skill.deviconClass}></i></p>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="other">
          <p className="subtitle">Other</p>
          <div className="icons">
            {skills.other.map(skill => (
              <>
                {skill.deviconClass && (
                  <p><i className={skill.deviconClass}></i></p>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

