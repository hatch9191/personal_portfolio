import { animateScroll as scroll } from 'react-scroll'


export default function Footer() {

  return (
    <div className="footer">
      <a
        href="mailto:harry.evans9191.com"
        subject="I was looking at your Portfolio...">
        <div className="email" title="Email Me"></div>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/harryevans9191/" rel="noreferrer">
        <div className="linkdin" title="LinkedIn"></div>
      </a>
      <a target="_blank" href="https://github.com/hatch9191" rel="noreferrer">
        <div className="github" title="GitHub"></div>
      </a>
      <a target="_blank" href="https://www.strava.com/athletes/3730794" rel="noreferrer">
        <div className="strava" title="Strava"></div>
      </a>
      <div 
        className="scrolltop" 
        title="Back To Top" 
        onClick={() => scroll.scrollToTop()}></div>
    </div>
  )
}