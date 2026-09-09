import { ArrowUpRight, Download } from 'lucide-react'
import { PageIntro } from '../components/PageIntro'
import { experiences } from '../data/portfolio'

export function ExperiencePage() {
  return <>
    <PageIntro eyebrow="Experience" title="The résumé is the index. This is the story." aside={<a className="button button--quiet" href="/Aditya-Singhal-Resume.pdf" target="_blank" rel="noreferrer">Download résumé <Download aria-hidden="true" /></a>}>
      <p>What changed, what I owned, and how each environment shaped the engineer I am now.</p>
    </PageIntro>
    <section className="experience-page shell">
      <aside className="experience-nav" aria-label="Experience index">
        <span>Jump to</span>
        {experiences.map((experience, index) => <a key={experience.company} href={'#role-' + index}>{String(index + 1).padStart(2, '0')} {experience.company.split(' · ')[0]}</a>)}
      </aside>
      <div className="experience-stories">
        {experiences.map((experience, index) => <article id={'role-' + index} className="experience-story" key={experience.company}>
          <header>
            <div><span>{String(index + 1).padStart(2, '0')}</span><span>{experience.period}</span><span>{experience.location}</span></div>
            <p>{experience.company}</p>
            <h2>{experience.role}</h2>
            <p className="experience-story__summary">{experience.summary}</p>
          </header>
          <p className="experience-story__narrative">{experience.narrative}</p>
          <div className="story-metrics">{experience.metrics.map((metric)=><div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div>
          <div className="story-moments">{experience.moments.map((moment)=><section key={moment.title}><h3>{moment.title}</h3><p>{moment.body}</p></section>)}</div>
          <div className="story-stack">{experience.stack.map((item)=><span key={item}>{item}</span>)}</div>
        </article>)}
      </div>
    </section>
    <section className="experience-cta shell"><p className="eyebrow">Talk through the work</p><h2>Need the technical version of any story?</h2><a href="mailto:aditya.singhal1909@gmail.com">Email Aditya <ArrowUpRight aria-hidden="true" /></a></section>
  </>
}
