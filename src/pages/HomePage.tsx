import { useState } from 'react'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectVisual } from '../components/ProjectVisual'
import { experiences, projects } from '../data/portfolio'

const focusModes = [
  { label: 'System', title: 'Make the whole thing work.', body: 'APIs, queues, review gates, deployment, simulation, and the people operating them.' },
  { label: 'Constraint', title: 'Find the shape of the problem.', body: 'A venue without internet, a pod with limited compute, or a model that cannot be trusted on its own.' },
  { label: 'Delivery', title: 'Ship the honest version.', body: 'Commit to what is possible, build the recovery path, and make the result operable by someone else.' },
]

export function HomePage() {
  const [mode, setMode] = useState(0)
  const selectedProjects = projects.slice(0, 3)

  return <>
    <section className="home-hero shell">
      <div className="home-hero__copy">
        <div className="availability"><i />Open to software engineering roles <span><MapPin aria-hidden="true" />Dehradun, India</span></div>
        <p className="hero-name">Aditya Singhal</p>
        <h1>I build ambitious systems that still work when reality gets messy.</h1>
        <p className="hero-lede">Backend platforms, applied AI, and autonomous-system software. My best work sits where a promising prototype has to become a dependable product.</p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/projects">Explore projects <ArrowRight aria-hidden="true" /></Link>
          <a className="button button--quiet" href="mailto:aditya.singhal1909@gmail.com">Start a conversation <Mail aria-hidden="true" /></a>
        </div>
      </div>
      <div className="workbench" aria-label="How Aditya approaches engineering problems">
        <div className="workbench__bar"><span>WORKBENCH / 01</span><i /><i /><i /></div>
        <div className="workbench__content">
          <span className="workbench__number">{'0' + (mode + 1)}</span>
          <h2>{focusModes[mode].title}</h2>
          <p>{focusModes[mode].body}</p>
        </div>
        <div className="workbench__tabs" role="group" aria-label="Engineering focus">
          {focusModes.map((item, index) => <button type="button" aria-pressed={mode === index} className={mode === index ? 'active' : undefined} key={item.label} onClick={() => setMode(index)}><span>{'0' + (index + 1)}</span>{item.label}</button>)}
        </div>
      </div>
    </section>

    <section className="proof-strip" aria-label="Selected career proof">
      <div className="shell">
        <div><b>1M+</b><span>platform outputs supported</span></div>
        <div><b>100+</b><span>client projects contributed to</span></div>
        <div><b>40%</b><span>latency reduction</span></div>
        <div><b>6</b><span>engineers led</span></div>
        <p>Production engineering across AI media, autonomous systems, research prototypes, and product launches.</p>
      </div>
    </section>

    <section className="home-section shell">
      <div className="section-lead"><div><p className="eyebrow">Selected work</p><h2>Three systems worth opening.</h2></div><p>Each project has its own route, technical decisions, and a small interactive model. Private repositories are described without exposing source.</p></div>
      <div className="featured-projects">
        {selectedProjects.map((project, index) => <Link className="featured-project" to={'/projects/' + project.slug} key={project.slug}>
          <ProjectVisual kind={project.visual} accent={project.accent} compact />
          <div className="featured-project__meta"><span>{'0' + (index + 1)}</span><span>{project.visibility}</span></div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <span className="card-link">Open case study <ArrowRight aria-hidden="true" /></span>
        </Link>)}
      </div>
      <Link className="text-cta" to="/projects">View all project spaces <ArrowRight aria-hidden="true" /></Link>
    </section>

    <section className="home-section home-section--dark">
      <div className="shell">
        <div className="section-lead"><div><p className="eyebrow">Experience</p><h2>Scope grew because the work held up.</h2></div><p>From robotics simulation to live AI infrastructure and autonomous transit architecture.</p></div>
        <div className="experience-synopsis">
          {experiences.slice(0, 2).map((experience) => <article key={experience.company}>
            <div><span>{experience.period}</span><span>{experience.location}</span></div>
            <div><p>{experience.company}</p><h3>{experience.role}</h3><p>{experience.summary}</p></div>
          </article>)}
        </div>
        <Link className="text-cta text-cta--light" to="/experience">Read the full experience stories <ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>

    <section className="home-contact shell">
      <p className="eyebrow">Contact</p>
      <h2>Need someone who can connect the model, the system, and the delivery?</h2>
      <p>I’m looking for software engineering work with real ownership, open technical discussion, and problems that resist a one-layer answer.</p>
      <a className="button button--primary" href="mailto:aditya.singhal1909@gmail.com">Email Aditya <Mail aria-hidden="true" /></a>
    </section>
  </>
}
