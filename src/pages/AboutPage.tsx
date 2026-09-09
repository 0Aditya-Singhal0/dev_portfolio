import { ArrowUpRight, MapPin } from 'lucide-react'
import { PageIntro } from '../components/PageIntro'
import { skillGroups, workingPrinciples } from '../data/portfolio'

export function AboutPage() {
  return <>
    <PageIntro eyebrow="About" title="I like the part where disciplines stop agreeing.">
      <p>That is usually where the real problem is hiding: between a model and its API, a vehicle and its scheduler, a client promise and the venue where it has to run.</p>
    </PageIntro>
    <section className="about-grid shell">
      <div className="portrait-placeholder">
        <div className="portrait-placeholder__frame"><img className="portrait-image" src="/aditya-portrait.png" alt="Aditya Singhal" /><span>ADITYA SINGHAL</span><i /></div>
        <p><MapPin aria-hidden="true" />Dehradun, India</p>
      </div>
      <div className="about-copy">
        <p className="large-copy">I started around robotics and reinforcement learning, then learned that the model is often the easiest part of a useful system.</p>
        <p>At Tagglabs, I moved into APIs, queues, cloud infrastructure, deployment, hiring, and client translation because live campaigns made every missing layer visible. At IIT Madras Research Park, the same instinct now runs into physical constraints: motion, comfort, embedded compute, communication, and a track that costs money to build.</p>
        <p>I’m at my best with high ownership, open technical discussion, and enough trust to test a better approach. I also value the boring signs of a healthy organization: stable commitments, clear processes, and people explaining why a decision exists.</p>
        <p>The thread through the work is not “AI engineer” or “backend engineer” alone. It is taking an ambiguous technical system, finding its constraints, and making it operable.</p>
      </div>
    </section>
    <section className="principles shell">
      <div className="section-lead"><div><p className="eyebrow">Working principles</p><h2>How I tend to work.</h2></div><p>Patterns shaped by research, live delivery, team leadership, and multidisciplinary product work.</p></div>
      <div className="principle-grid">{workingPrinciples.map((principle,index)=><article key={principle.title}><span>{String(index+1).padStart(2,'0')}</span><h3>{principle.title}</h3><p>{principle.body}</p></article>)}</div>
    </section>
    <section className="skills-space">
      <div className="shell">
        <div className="section-lead"><div><p className="eyebrow">Technical range</p><h2>A coherent stack, not a logo wall.</h2></div><p>Grouped by the work it enables.</p></div>
        <div className="skill-rows">{skillGroups.map((group)=><div key={group.label}><span>{group.label}</span><p>{group.items.join(' · ')}</p></div>)}</div>
      </div>
    </section>
    <section className="research-note shell">
      <div><span>RESEARCH NOTE / 01</span><h2>Four medical publications, with a clear boundary around the contribution.</h2></div>
      <p>Supported peer-reviewed medical research through biostatistical analysis and data visualization. The medical framing belonged to the clinical authors. My contribution was turning spreadsheet data into defensible calculations and figures.</p>
    </section>
    <section className="about-contact shell"><p className="eyebrow">Elsewhere</p><div><a href="https://github.com/0Aditya-Singhal0" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a><a href="https://www.linkedin.com/in/aditya-x-singhal/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href="mailto:aditya.singhal1909@gmail.com">Email <ArrowUpRight aria-hidden="true" /></a></div></section>
  </>
}
