import React from 'react'
import Fade from 'react-reveal/Fade'

export default function About() {

  return (
    <div className="container about-container">
      <div className="about-text">
        <p className="title">About</p>
        <Fade duration={2000} >
          <div>
            <p>Throughout my career I have always taken great satisfaction in improving software and systems efficiencies from both a personal and team perspective.</p>
            <p>My hospitality experience of managing staff and dealing with guests in highly dynamic situations has taught me to assess problems calmly and work as a part of a team to secure the best possible outcomes. In a bid to break the ceiling of what I could achieve in my previous career I enrolled on the Software Engineering Immersive course with General Assembly. My experience on the course has taught me a logic-based approach to problems, tirelessly delving into subjects to find a solution.</p>
            <p>I am now looking to start a Junior Engineer role in a firm where I can utilise as many Full-Stack skills as possible, working and continually learning in a collaborative team.</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}