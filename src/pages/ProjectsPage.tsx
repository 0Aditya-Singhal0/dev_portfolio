import { useState } from 'react'
import { ArrowRight, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageIntro } from '../components/PageIntro'
import { ProjectVisual } from '../components/ProjectVisual'
import { projects } from '../data/portfolio'

const filters = ['All', ...new Set(projects.map((project) => project.category))] as const

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return <>
    <PageIntro eyebrow="Project spaces" title="Work you can walk into.">
      <p>Production systems, research prototypes, and product builds. Every card opens a separate case study with decisions, limits, and an interactive model.</p>
    </PageIntro>
    <section className="project-index shell">
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((item) => <button type="button" aria-pressed={filter === item} className={filter === item ? 'active' : undefined} onClick={() => setFilter(item)} key={item}>{item}</button>)}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => <Link className="project-tile" to={'/projects/' + project.slug} key={project.slug}>
          <ProjectVisual kind={project.visual} accent={project.accent} compact />
          <div className="project-tile__line"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span>{project.visibility !== 'Public' ? <LockKeyhole aria-label="Private source" /> : null}{project.period}</span></div>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          <div className="project-tile__footer"><span>{project.stack.slice(0, 3).join(' · ')}</span><span>Case study <ArrowRight aria-hidden="true" /></span></div>
        </Link>)}
      </div>
      <div className="placeholder-card">
        <div><span>IN PROGRESS</span><h2>The next case study is taking shape.</h2><p>New work appears here only when the implementation and publication boundary are ready.</p></div>
        <div className="placeholder-grid" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      </div>
    </section>
  </>
}


