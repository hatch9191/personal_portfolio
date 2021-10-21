import React from 'react'
import Fade from 'react-reveal/Fade'

export default function About() {

  return (
    <div className="container about-container">
      <div className="about-text">
        <p className="title">About</p>
        <Fade duration={2000} >
          <div className="bio">
            <p className="subtitle">Biography</p>
            <p>I’m looking for a role as a Junior Engineer, where I can use my Full Stack skills to collaborate and learn as part of a team. Improving software and systems efficiencies is something I’ve enjoyed throughout my career in hospitality management. My client relations background has also taught me the value of solutions-based communication, which was enormously helpful during the Software Engineering course at General Assembly.</p>
          </div>
        </Fade>
        <Fade duration={2000} delay={200} >
          <div className="learning">
            <p className="subtitle">What I&apos;m Learning Now</p>
            <div className="mocha">
              <p><i className="devicon-jest-plain" title="Jest"></i></p>
              <p>Through reading and talking to other industry professionals I have been made aware of how important and helpful Test Driven Development can be in our everyday work. Therefore I have recently completed the <strong>Learn Unit Testing with Mocha</strong> course on Codecademy. Keen to translate this knowledge into somthing I can use in React I have started the <strong>React Testing with Jest and Enzyme</strong> course by Bonnie Schulkin on Udemy.</p>
            </div>
            <div className="next">
              <p><i className="devicon-nextjs-original colored" title="Next.js"></i></p>
              <p>It was recently recommended to me that I read up about the <strong>Next.js</strong> framework as it addresses a number of issues that I have noticed when working with React, in particluar SEO optimisation and faster initial page loading times. Bringing together the Front and Backend with this Full Stack framework is really satisfying and I am now doing the <strong>Next.js & React</strong> course by Maximilian Schwarzmüller at Academind (also on Udemy).</p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={400} >
          <div className="interests">
            <p className="subtitle">When I&apos;m Not Coding</p>
            <p>I love trail and road <strong>running</strong> and try to go hiking with friends as much as possible. A group of us have a plan to walk a part of the Via Alpina route in Europe next year.</p>
            <p>When I&apos;m not in London I can&apos;t wait to get out on my bike. In 2017 I cycled solo from London to Santander, Spain, free-camping along the way and I also enjoy <strong>cycling</strong> up famous climbs from the Tour de France and other competitions.</p>
            <p>I have been <strong>skiing</strong> on some of the most challenging off-piste and backcountry routes around Europe and North America, often with serious climbing or ski-tours needed for access.</p>
            <div className="images" >
              <img src="https://res.cloudinary.com/dn11uqgux/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1634304565/project-setup-test/Screenshot_2021-10-15_at_09.10.42_ukuugt.png" title="Running in the Yorkshire Dales" />
              <img src="https://res.cloudinary.com/dn11uqgux/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1634304566/project-setup-test/Screenshot_2021-10-15_at_09.22.35_asfsm1.png" title="After Cycling Up the Famous Mount Ventoux" />
              <img src="https://res.cloudinary.com/dn11uqgux/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1634304566/project-setup-test/Screenshot_2021-10-15_at_09.26.47_b5lnim.png" title="Skiing in the Swiss Alps" />
            </div>
            <p className="link"> 
              <a target="_blank" href="https://www.strava.com/athletes/3730794" rel="noreferrer"><i className="fab fa-strava"></i> Follow Me on Strava</a>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}