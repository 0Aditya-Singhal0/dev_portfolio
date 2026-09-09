import type { CSSProperties } from 'react'
import type { ProjectVisualKind } from '../data/portfolio'

export function ProjectVisual({ kind, accent, compact = false }: { kind: ProjectVisualKind; accent: string; compact?: boolean }) {
  return (
    <div className={'project-visual project-visual--' + kind + (compact ? ' project-visual--compact' : '')} style={{ '--visual-accent': accent } as CSSProperties} aria-hidden="true">
      {kind === 'pipeline' ? <PipelineVisual /> : null}
      {kind === 'transit' ? <TransitVisual /> : null}
      {kind === 'queue' ? <QueueVisual /> : null}
      {kind === 'product' ? <ProductVisual /> : null}
      {kind === 'fitness' ? <FitnessVisual /> : null}
      {kind === 'swarm' ? <SwarmVisual /> : null}
      {kind === 'health' ? <HealthVisual /> : null}
    </div>
  )
}

function PipelineVisual() {
  return <><div className="visual-orbit" /><div className="visual-doc"><i /><i /><i /><i /></div><div className="visual-flow">{['Parse','Plan','Voice','Render'].map((item, index) => <span key={item} style={{ '--i': index } as React.CSSProperties}>{item}</span>)}</div><div className="visual-output"><b>04:18</b><span>lesson.mov</span></div></>
}

function TransitVisual() {
  return <><div className="transit-grid" /><svg viewBox="0 0 600 300" preserveAspectRatio="none"><path d="M-20 220 C 130 220, 105 80, 245 92 S 430 250, 640 78" /><path className="transit-path--ghost" d="M-20 245 C 150 245, 120 110, 255 120 S 430 280, 640 110" /></svg><span className="pod pod--one" /><span className="pod pod--two" /><div className="transit-readout"><b>TDMA</b><span>segment 08 booked</span></div></>
}

function QueueVisual() {
  return <><div className="queue-top"><span>Live queue</span><b>14 req/s</b></div><div className="queue-lines">{[0,1,2,3,4].map((item) => <i key={item} style={{ '--i': item } as React.CSSProperties} />)}</div><div className="queue-workers">{['01','02','03'].map((item) => <span key={item}><i />worker {item}</span>)}</div></>
}

function ProductVisual() {
  return <><div className="phone-card"><span>ROS / MOVEIT</span><h4>Plan, validate, pick, place.</h4><button type="button" tabIndex={-1}>Simulation ready</button></div><div className="product-count"><b>01</b><span>motion plan</span></div></>
}

function FitnessVisual() {
  return <><div className="pose"><i className="head"/><i className="torso"/><i className="arm arm--left"/><i className="arm arm--right"/><i className="leg leg--left"/><i className="leg leg--right"/>{[0,1,2,3,4,5,6].map((item)=><b key={item} style={{ '--i': item } as React.CSSProperties}/>)}</div><div className="fitness-score"><b>92</b><span>form score</span></div></>
}

function SwarmVisual() {
  return <><div className="swarm-map">{[0,1,2,3,4].map((item)=><span key={item} style={{ '--i': item } as React.CSSProperties}><i /></span>)}</div><div className="swarm-label">leader / follower policy</div></>
}

function HealthVisual() {
  return <><div className="health-card"><span>TRIAGE / 04</span><h4>Check red flags before advice.</h4><div><i className="active"/><i/><i/><i/></div></div><div className="health-pulse"><i/><span>clinician review</span></div></>
}
