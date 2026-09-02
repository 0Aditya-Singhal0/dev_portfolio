import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Download,
  Mail,
  MapPin,
} from 'lucide-react'

import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Separator } from './components/ui/separator'
import { experience, metrics, projects, skillGroups } from './data/portfolio'

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
} as const

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aditya Singhal, home">
          AS<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <Button asChild size="sm">
            <a href="mailto:aditya.singhal1909@gmail.com">Let&apos;s talk</a>
          </Button>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="hero__copy reveal reveal--1">
            <div className="location-line">
              <MapPin aria-hidden="true" size={16} />
              Chennai, India
              <span aria-hidden="true">/</span>
              <span>Open to software engineering roles</span>
            </div>
            <p className="hero__role">Software engineer · backend and AI systems</p>
            <h1 id="hero-title">
              I build systems that move from <span>ambitious idea</span> to reliable production.
            </h1>
            <p className="hero__lede">
              I work across backend platforms, applied AI, and simulation-heavy engineering. My
              recent work includes autonomous transit software at IIT Madras Research Park and
              production AI services that generated more than one million campaign outputs.
            </p>
            <div className="hero__actions">
              <Button asChild size="lg">
                <a href="#work">
                  View selected work <ArrowDown aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/Aditya-Singhal-Resume.pdf" {...externalLinkProps}>
                  Résumé <Download aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="hero__links" aria-label="Professional links">
              <a href="https://github.com/0Aditya-Singhal0" {...externalLinkProps}>
                <CodeXml aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/aditya-x-singhal/" {...externalLinkProps}>
                <BriefcaseBusiness aria-hidden="true" /> LinkedIn
              </a>
              <a href="mailto:aditya.singhal1909@gmail.com">
                <Mail aria-hidden="true" /> Email
              </a>
            </div>
          </div>

          <div className="metric-grid reveal reveal--2" aria-label="Career highlights">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.context}</p>
              </div>
            ))}
            <div className="metric-grid__note">
              <span>Current focus</span>
              <p>Autonomous systems, retrieval products, and dependable backend architecture.</p>
            </div>
          </div>
        </section>

        <section id="work" className="section shell">
          <SectionHeading
            eyebrow="01 / Selected work"
            title="Proof, not promises."
            description="A short list of systems with a clear technical problem, my contribution, and the result."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <Card className="project-card" key={project.title}>
                <div className="project-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <Badge variant="secondary">{project.type}</Badge>
                    <span>{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-card__summary">{project.summary}</p>
                  <ul>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                  <div className="tag-row" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-card__link">
                  {project.href ? (
                    <Button asChild variant="ghost" size="icon">
                      <a
                        href={project.href}
                        aria-label={`View ${project.title} on GitHub`}
                        {...externalLinkProps}
                      >
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    </Button>
                  ) : (
                    <span>Production work</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <Button asChild variant="outline" className="section-cta">
            <a href="https://github.com/0Aditya-Singhal0?tab=repositories" {...externalLinkProps}>
              Explore all public repositories <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </section>

        <section id="experience" className="section section--ink">
          <div className="shell">
            <SectionHeading
              eyebrow="02 / Experience"
              title="Built in production, across disciplines."
            />
            <div className="timeline">
              {experience.map((role) => (
                <article className="timeline__item" key={`${role.company}-${role.role}`}>
                  <div className="timeline__when">
                    <span>{role.period}</span>
                    <span>{role.location}</span>
                  </div>
                  <div className="timeline__body">
                    <p>{role.company}</p>
                    <h3>{role.role}</h3>
                    <p>{role.description}</p>
                    <div className="tag-row tag-row--dark">
                      {role.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section shell">
          <SectionHeading
            eyebrow="03 / Technical focus"
            title="A focused stack for shipping systems."
            description="Grouped by how I use the technology, not as a checklist of every tool I have opened."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <p>{group.title}</p>
                <h3>{group.lead}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="education-strip">
            <div>
              <span>Education</span>
              <p>B.Tech, Computer Science and Engineering (AI)</p>
            </div>
            <div>
              <span>Amrita University</span>
              <p>2019–2023 · Coimbatore, India</p>
            </div>
            <div>
              <span>Research</span>
              <p>Biostatistics contributor · Journal of Medical Society, 2023</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact shell">
          <p className="eyebrow">04 / Contact</p>
          <h2>Have a hard engineering problem?</h2>
          <p>
            I&apos;m interested in software engineering roles where backend depth, applied AI, and
            sound system design matter.
          </p>
          <div className="contact__actions">
            <Button asChild size="lg">
              <a href="mailto:aditya.singhal1909@gmail.com">
                Start a conversation <Mail aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link" href="tel:+919819832806">
              +91 98198 32806
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <Separator />
        <div>
          <p>Designed and built by Aditya Singhal.</p>
          <div>
            <a href="#top">Back to top</a>
            <a href="https://github.com/0Aditya-Singhal0" {...externalLinkProps}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aditya-x-singhal/" {...externalLinkProps}>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
