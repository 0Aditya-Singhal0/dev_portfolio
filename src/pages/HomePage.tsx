import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectVisual } from '../components/ProjectVisual'
import { experiences, projects } from '../data/portfolio'

export function HomePage() {
  const selectedProjects = projects.slice(0, 3)
  return <>
    <section className="home-hero shell">
      <div className="hero-wordmark" aria-hidden="true">Aditya.</div>
      <div className="home-hero__copy">
        <p className="hero-name">Hello, I'm Aditya Singhal</p>
        <div className="availability"><i />Open to software engineering roles</div>
        <h1>Engineering systems.<br /><em>Built for</em><br />the real world.</h1>
        <p className="hero-lede">I build backend platforms, applied AI products, and autonomous-system software. I turn prototypes into systems people can use.</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#selected-work">See selected work <ArrowDown aria-hidden="true" /></a>
          <a className="button button--quiet" href="mailto:aditya.singhal1909@gmail.com">Let's talk <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="hero-portrait__frame"><img src="/aditya-portrait.png" alt="Aditya Singhal" fetchPriority="high" /><span className="portrait-index" aria-hidden="true">AS / 01</span></div>
        <figcaption><span><MapPin aria-hidden="true" />Dehradun, India</span><span>Software engineer</span></figcaption>
      </figure>
    </section>
    <section className="proof-strip" aria-label="Selected career outcomes">
      <div className="shell">
        <div><b>1M+</b><span>platform outputs supported</span></div>
        <div><b>100+</b><span>client projects contributed to</span></div>
        <div><b>40%</b><span>latency reduction</span></div>
        <div><b>6</b><span>engineers led</span></div>
        <Link className="proof-context" to="/experience">The work behind the numbers <ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </section>
    <section id="selected-work" className="home-section shell">
      <div className="section-lead"><div><p className="eyebrow">Selected work</p><h2>Built. Tested.<br /><em>Explained.</em></h2></div><p>Explore the architecture, decisions, and constraints behind my work. Each case study includes an interactive system model.</p></div>
      <div className="featured-projects">
        {selectedProjects.map((project, index) => <Link className={'featured-project' + (index === 0 ? ' featured-project--lead' : '')} to={'/projects/' + project.slug} key={project.slug}>
          <ProjectVisual kind={project.visual} accent={project.accent} compact />
          <div className="featured-project__body">
            <div className="featured-project__meta"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.period} / {project.visibility}</span></div>
            <h3>{project.title}</h3><p>{project.summary}</p>
            <div className="featured-project__facts"><span>{project.role}</span><span>{project.stack.slice(0, 3).join(' · ')}</span></div>
            <span className="card-link">Explore case study <ArrowUpRight aria-hidden="true" /></span>
          </div>
        </Link>)}
      </div>
      <Link className="text-cta" to="/projects">All projects <ArrowRight aria-hidden="true" /></Link>
    </section>
    <section className="home-section home-section--dark">
      <div className="shell">
        <div className="section-lead"><div><p className="eyebrow">Experience</p><h2>From research<br />to production.</h2></div><p>Software architecture, live AI infrastructure, and autonomous transit research.</p></div>
        <div className="experience-synopsis">
          {experiences.slice(0, 2).map((experience) => <article key={experience.company}>
            <div><span>{experience.period}</span><span>{experience.location}</span></div>
            <div><p>{experience.company}</p><h3>{experience.role}</h3><p>{experience.summary}</p></div>
          </article>)}
        </div>
        <Link className="text-cta text-cta--light" to="/experience">Explore my experience <ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
    <section className="home-about shell">
      <p className="eyebrow">A little about me</p>
      <div><h2>I like the part where<br /><em>the pieces connect.</em></h2><div><p>My work spans software systems, AI, and robotics. I'm interested in how the model, infrastructure, and people using a product fit together.</p><Link className="text-cta" to="/about">More about me <ArrowUpRight aria-hidden="true" /></Link></div></div>
    </section>
    <section id="contact" className="home-contact shell">
      <p className="eyebrow">What's next?</p><h2>Let's build<br /><em>something useful.</em></h2>
      <p>Open to software engineering roles with technical ownership and thoughtful teams.</p>
      <a className="contact-email" href="mailto:aditya.singhal1909@gmail.com">aditya.singhal1909@gmail.com <ArrowUpRight aria-hidden="true" /></a>
      <a className="button button--quiet" href="/Aditya-Singhal-Resume.pdf" target="_blank" rel="noreferrer">View my résumé <Mail aria-hidden="true" /></a>
    </section>
  </>
}

