import React from 'react'
import skills from './data/skills.json'

function App() {



  return (
    <>
      <h1>Frontend</h1>
      {skills.frontend.map(skill => (
        <>
          {/* <h1>{skill.name}</h1> */}
          <h1><i className={skill.deviconClass}></i></h1>
        </>
      ))}
      <h1>Backend</h1>
      {skills.backend.map(skill => (
        <>
          {/* <h1>{skill.name}</h1> */}
          <h1><i className={skill.deviconClass}></i></h1>
        </>
      ))}
      <h1>Other</h1>
      {skills.other.map(skill => (
        <>
          {/* <h1>{skill.name}</h1> */}
          <h1><i className={skill.deviconClass}></i></h1>
        </>
      ))}
    </>
  )
}

export default App
