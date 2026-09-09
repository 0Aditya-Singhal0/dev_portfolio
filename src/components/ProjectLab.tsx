import { useMemo, useState, type CSSProperties } from 'react'
import type { ProjectVisualKind } from '../data/portfolio'

export function ProjectLab({ kind, accent }: { kind: ProjectVisualKind; accent: string }) {
  return <section className="project-lab" style={{ '--visual-accent': accent } as CSSProperties} aria-label="Interactive project model">
    {kind === 'pipeline' ? <PipelineLab /> : null}
    {kind === 'transit' ? <TransitLab /> : null}
    {kind === 'queue' ? <QueueLab /> : null}
    {kind === 'product' ? <ProductLab /> : null}
    {kind === 'fitness' ? <FitnessLab /> : null}
    {kind === 'swarm' ? <SwarmLab /> : null}
    {kind === 'health' ? <HealthLab /> : null}
  </section>
}

const pipelineStages = [
  ['01 / ingest', 'Recover document structure, figures, and source references.'],
  ['02 / direct', 'Plan modules, pedagogy, narration, and scene intent.'],
  ['03 / sync', 'Align generated speech, scenes, and approved assets.'],
  ['04 / verify', 'Render, run QA, and replay only the failed stage.'],
]
function PipelineLab() {
  const [active, setActive] = useState(0)
  return <div className="lab-grid"><div aria-live="polite"><p className="lab-kicker">Pipeline explorer</p><h2>{pipelineStages[active][0]}</h2><p>{pipelineStages[active][1]}</p></div><div className="lab-stage-list" role="group" aria-label="Pipeline stage">{pipelineStages.map((stage,index)=><button key={stage[0]} type="button" aria-pressed={active===index} className={active===index?'active':undefined} onClick={()=>setActive(index)}><span>{String(index+1).padStart(2,'0')}</span>{stage[0].split(' / ')[1]}<i aria-hidden="true" /></button>)}</div></div>
}

function TransitLab() {
  const [speed, setSpeed] = useState(62)
  const headway = Math.max(7, Math.round(28 - speed / 4))
  return <div className="lab-grid"><div><p className="lab-kicker">Motion sandbox</p><div aria-live="polite"><h2>{speed} km/h</h2><p>Target cruise speed with a simulated {headway}-second segment headway.</p></div><label className="range-label">Cruise target<input type="range" min="20" max="80" value={speed} onChange={(event)=>setSpeed(Number(event.target.value))}/></label></div><div className="mini-track" aria-hidden="true"><span className="mini-pod" style={{ left: `${Math.min(82,speed)}%` }}/><i/><i/><i/><div><b>{headway}s</b><span>headway</span></div></div></div>
}

function QueueLab() {
  const [workers, setWorkers] = useState(3)
  const latency = Math.max(4, Math.round(31 / workers))
  return <div className="lab-grid"><div><p className="lab-kicker">Queue planner</p><div aria-live="polite"><h2>{workers} workers</h2><p>A simplified view of how worker count changes queue pressure. The real system also accounted for GPU cost and delivery APIs.</p></div><div className="segmented" role="group" aria-label="Worker count">{[1,2,3,4,5].map((item)=><button type="button" aria-pressed={workers===item} className={workers===item?'active':undefined} onClick={()=>setWorkers(item)} key={item}>{item}</button>)}</div></div><div className="queue-sim" aria-hidden="true"><div className="queue-sim__requests">{Array.from({length:8}).map((_,index)=><i key={index} style={{opacity:index < workers+2 ? 1:.25}} />)}</div><div className="queue-sim__metric"><b>~{latency}s</b><span>illustrative wait</span></div></div></div>
}

function ProductLab() {
  const [planned, setPlanned] = useState(false)
  return <div className="lab-grid"><div><p className="lab-kicker">Manipulation sandbox</p><h2 aria-live="polite">{planned ? 'Path validated.' : 'Plan a safe path.'}</h2><p>This simplified model illustrates the feedback loop around a simulated pose goal. It does not control a physical robot.</p><button type="button" className="lab-action" aria-pressed={planned} onClick={()=>setPlanned((value)=>!value)}>{planned ? 'Reset simulation' : 'Validate motion plan'}</button></div><div className={`signup-ticket ${planned?'complete':''}`} aria-hidden="true"><span>{planned?'PATH READY':'MOVEIT / SIM'}</span><b>{planned?'CLEAR':'Awaiting goal'}</b><i /></div></div>
}

function FitnessLab() {
  const [reps, setReps] = useState(8)
  const score = 84 + (reps % 4) * 3
  return <div className="lab-grid"><div><p className="lab-kicker">Rep analysis</p><h2 aria-live="polite">{reps} clean reps</h2><p>Phase-aware feedback is more useful than a pose label. Add a rep to see the session summary update.</p><button type="button" className="lab-action" onClick={()=>setReps((value)=>value+1)}>Add simulated rep</button></div><div className="rep-dial" aria-label={`Form score ${score}`} style={{'--score': String(score*3.6) + 'deg'} as CSSProperties}><div><b>{score}</b><span>form score</span></div></div></div>
}

function SwarmLab() {
  const [mode, setMode] = useState<'classical'|'learning'>('classical')
  return <div className="lab-grid"><div><p className="lab-kicker">Control comparison</p><div aria-live="polite"><h2>{mode === 'classical' ? 'Classical fallback' : 'Learning experiment'}</h2><p>{mode === 'classical' ? 'Predictable leader-follower control met the demo window.' : 'TD3 and PPO work stayed in simulation when the multi-agent path was not dependable enough.'}</p></div><div className="segmented" role="group" aria-label="Control model"><button type="button" aria-pressed={mode==='classical'} className={mode==='classical'?'active':undefined} onClick={()=>setMode('classical')}>Classical</button><button type="button" aria-pressed={mode==='learning'} className={mode==='learning'?'active':undefined} onClick={()=>setMode('learning')}>Learning</button></div></div><div className={`swarm-sim ${mode}`} aria-hidden="true"><i/><i/><i/><i/><span>{mode==='classical'?'stable formation':'exploration noise'}</span></div></div>
}

function HealthLab() {
  const [symptoms, setSymptoms] = useState<string[]>(['fever'])
  const redFlag = symptoms.includes('chest pain')
  const toggle=(item:string)=>setSymptoms((current)=>current.includes(item)?current.filter((value)=>value!==item):[...current,item])
  const items=useMemo(()=>['fever','cough','chest pain'],[])
  return <div className="lab-grid"><div><p className="lab-kicker">Safety model</p><div aria-live="polite"><h2>{redFlag?'Escalate now':'Continue triage'}</h2><p>{redFlag?'A deterministic red-flag rule stops the conversational flow and directs the patient to urgent care.':'The assistant can keep asking bounded questions and retrieve approved guidance.'}</p></div><div className="check-row" role="group" aria-label="Symptoms">{items.map((item)=><button type="button" aria-pressed={symptoms.includes(item)} className={symptoms.includes(item)?'active':undefined} onClick={()=>toggle(item)} key={item}>{item}</button>)}</div></div><div className={`safety-state ${redFlag?'urgent':''}`} aria-hidden="true"><i/><b>{redFlag?'HARD OVERRIDE':'RAG + QUESTIONS'}</b><span>{redFlag?'No autonomous advice':'Evidence before answer'}</span></div></div>
}
