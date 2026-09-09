import { ArrowLeft, ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ProjectLab } from '../components/ProjectLab'
import { ProjectVisual } from '../components/ProjectVisual'
import { projects } from '../data/portfolio'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  if (projectIndex < 0) return <Navigate to="/projects" replace />
  const project = projects[projectIndex]
  const next = projects[(projectIndex + 1) % projects.length]

  return <>
    <article className="case-study">
      <header className="case-hero shell">
        <Link className="back-link" to="/projects"><ArrowLeft aria-hidden="true" />All projects</Link>
        <div className="case-hero__grid">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__lede">{project.description}</p>
            <div className="case-actions">
              {project.repo ? <a className="button button--primary" href={project.repo} target="_blank" rel="noreferrer">View public source <ArrowUpRight aria-hidden="true" /></a> : <span className="private-note"><LockKeyhole aria-hidden="true" />Source kept private</span>}
            </div>
          </div>
          <dl className="case-facts">
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Period</dt><dd>{project.period}</dd></div>
            <div><dt>Source</dt><dd>{project.visibility}</dd></div>
          </dl>
        </div>
      </header>
      <div className="case-visual shell"><ProjectVisual kind={project.visual} accent={project.accent} /></div>
      <section className="case-metrics shell">
        {project.metrics.map((metric) => <div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}
      </section>
      <section className="case-content shell">
        <div className="case-block case-block--challenge"><p className="eyebrow">The problem</p><h2>{project.challenge}</h2></div>
        <div className="case-columns">
          <div><p className="eyebrow">What I did</p><ol>{project.approach.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol></div>
          <div><p className="eyebrow">What came out of it</p><ul>{project.results.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="stack-panel"><span>Working stack</span><div>{project.stack.map((item) => <i key={item}>{item}</i>)}</div></div>
      </section>
      <div className="shell"><ProjectLab kind={project.visual} accent={project.accent} /></div>
      <section className="visual-placeholder shell"><div><span>VISUALS WITHHELD</span><h2>Some diagrams, interface captures, and field photos remain confidential.</h2><p>Portfolio-safe visuals can be added when publication approval is available.</p></div><div className="visual-placeholder__canvas" aria-hidden="true"><i/><i/><i/><span>CONFIDENTIALITY BOUNDARY</span></div></section>
    </article>
    <Link className="next-project shell" to={'/projects/' + next.slug}><span>Next project</span><strong>{next.title}</strong><ArrowRight aria-hidden="true" /></Link>
  </>
}
