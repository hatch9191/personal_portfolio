import Fade from 'react-reveal/Fade'

import skills from '../data/skills.json'

export default function Skills() {

  return (
    <div className="container skills-container">
      <div className="skills-text">
        <p className="title">Skills</p>
        <Fade duration={2000} >
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
        </Fade>
        <Fade duration={2000} delay={300} >
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
        </Fade>
        <Fade duration={2000} delay={600} >
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
        </Fade>
      </div>
    </div>
  )
}

