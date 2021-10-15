import Fade from 'react-reveal/Fade'

export default function Hero() {
  return (
    <div className="container hero-container">
      <div className="hero">
        <div className="home">
          <p className="title">Hi, I&apos;m Harry Evans</p>
          <Fade duration={2000} delay={300} >
            <div>
              <p className="subtitle">Full Stack Engineer</p>
              <p className="subtitle">Hackney, East London</p>
            </div>
          </Fade>
        </div>
        <div className="profile-image">
          <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1633111761/project-setup-test/hpycwemhsjmkdlcsawi6.jpg" alt="Harry Evans" />
        </div>
      </div>
    </div>
  )
}