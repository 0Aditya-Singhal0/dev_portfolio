import type { ReactNode } from 'react'

export function PageIntro({ eyebrow, title, children, aside }: { eyebrow: string; title: string; children: ReactNode; aside?: ReactNode }) {
  return <header className="page-intro shell"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-intro__copy">{children}</div></div>{aside ? <div className="page-intro__aside">{aside}</div> : null}</header>
}
