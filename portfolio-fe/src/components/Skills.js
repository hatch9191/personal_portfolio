import skills from '../data/skills.json'

export default function Skills() {

  return (
    <div className="container">
      <h1>Frontend</h1>
      <div className="icons">
        {skills.frontend.map(skill => (
          <>
            {skill.deviconClass && (
              <h1><i className={skill.deviconClass}></i></h1>
            )}
          </>
        ))}
      </div>
      <h1>Backend</h1>
      <div className="icons">
        {skills.backend.map(skill => (
          <>
            {skill.deviconClass && (
              <h1><i className={skill.deviconClass}></i></h1>
            )}
          </>
        ))}
      </div>
      <h1>Other</h1>
      <div className="icons">
        {skills.other.map(skill => (
          <>
            {skill.deviconClass && (
              <h1><i className={skill.deviconClass}></i></h1>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

