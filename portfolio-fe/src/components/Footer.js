import { animateScroll as scroll } from 'react-scroll'

export default function Footer() {

  return (
    <div className="footer">
      <div className="email" title="Email Me"></div>
      <div className="linkdin" title="LinkedIn"></div>
      <div className="github" title="GitHub"></div>
      <div className="strava" title="Strava"></div>
      <div 
        className="scrolltop" 
        title="Back To Top" 
        onClick={() => scroll.scrollToTop()}></div>
    </div>
  )
}