import Fade from 'react-reveal/Fade'

export default function Experience() {
  return (
    <div className="container experience-container">
      <div className="experience-text">
        <p className="title">Experience</p>
        <Fade duration={2000}>
          <div className="feast-it">
            <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1642417873/project-setup-test/feast-it_owler_20190814_023801_original_kduvzl.png" alt="feast -t" title="Feast It" />
            <div>
              <p className="subtitle">Full Stack Developer – Dec 2021 - onwards</p>
              <p className="text">I am working as Full Stack Developer in an Agile dev setup in this fast-growing and diverse start-up. This role is primarily remote-based, with some office days whilst there is a high level of autonomy and freedom to work on project or technologies that interest you or you want to know more about.</p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={200}>
          <div className="ga">
            <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1633999212/project-setup-test/ga_fvmvgx.png" alt="general assembly" title="General Assembly"/>
            <div>
              <p className="subtitle">Software Engineering Immersive Student, General Assembly, London – June 2021 - Sept 2021</p>
              <p className="text">A full time (9am-5pm daily) deep-dive into the fundamentals of some of the most commonly used Full Stack programming languages and their uses.</p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={400}>
          <div className="soho">
            <img src="https://res.cloudinary.com/dn11uqgux/image/upload/v1633999208/project-setup-test/soho_vqjgmv.jpg" alt="soho house" title="Soho House" />
            <div>
              <p className="subtitle">Front Office Supervisor, Soho Farmhouse, Oxfordshire – Feb 2020 - July 2021</p>
              <p className="text">I assisted in managing a department of 38 line staff at this 130-Bed Hotel with a yearly occupancy rate of 99%, 5 busy restaurants and numerous activities and events.</p>
            </div>
          </div>
        </Fade>
        
      </div>
    </div>
  )
}