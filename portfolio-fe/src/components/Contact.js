import Fade from 'react-reveal/Fade'

export default function Contact() {
  return (
    <div className="container contacts-container">
      <div className="contact-text">
        <p className="title">Contact Me</p>
        <a
          href="mailto:harry.evans9191.com"
          subject="I was looking at your Portfolio...">
          <Fade duration={2000} >
            <div className="email" >
              <img alt="Email Me" title="Email Me" src="https://res.cloudinary.com/dn11uqgux/image/upload/v1634006167/project-setup-test/email_inbox_letter_send_icon_rctils.png" />
              <p className="subtitle">harry.evans9191@gmail.com</p>
            </div>
          </Fade>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/harryevans9191/" rel="noreferrer">
          <Fade duration={2000} delay={300} >
            <div className="linkdin">
              <img alt="LinkedIn" title="LinkedIn" src="https://res.cloudinary.com/dn11uqgux/image/upload/v1634006167/project-setup-test/linkedin_network_social_network_linkedin_logo_icon_izevbl.png" />
              <p className="subtitle">linkedin.com/in/harryevans9191/</p>
            </div>
          </Fade>
        </a>
        <a target="_blank" href="https://github.com/hatch9191" rel="noreferrer">
          <Fade duration={2000} delay={600} >
            <div className="github">
              <img alt="GitHub" title="GitHub" src="https://res.cloudinary.com/dn11uqgux/image/upload/v1634006167/project-setup-test/social_github_icon_kiz1ng.png" />
              <p className="subtitle">github.com/hatch9191</p>
            </div>
          </Fade>
        </a>
      </div>
    </div>
  )
}