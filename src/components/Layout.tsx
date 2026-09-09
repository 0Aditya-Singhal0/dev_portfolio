import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, Download, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
]

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    mainRef.current?.focus({ preventScroll: true })
    const page = location.pathname === '/' ? 'Software engineer' : location.pathname.startsWith('/projects/') ? 'Project case study' : location.pathname.slice(1).replace('-', ' ')
    document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} | Aditya Singhal`
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="identity" to="/" aria-label="Aditya Singhal, home">
          <span className="identity__mark" aria-hidden="true">AS</span>
          <span><strong>Aditya Singhal</strong><small>Software engineer</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'active' : undefined}>{item.label}</NavLink>
          ))}
          <a className="nav-resume" href="/Aditya-Singhal-Resume.pdf" target="_blank" rel="noreferrer">
            Résumé <Download aria-hidden="true" />
          </a>
        </nav>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        {open ? (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
            <a href="/Aditya-Singhal-Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Résumé <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        ) : null}
      </header>
      <main ref={mainRef} id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer shell">
        <div>
          <p>Based in Dehradun, India. Open to software engineering roles.</p>
          <div>
            <a href="mailto:aditya.singhal1909@gmail.com">Email</a>
            <a href="https://github.com/0Aditya-Singhal0" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aditya-x-singhal/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <p className="site-footer__note">Software systems, applied AI, and autonomous-system engineering.</p>
      </footer>
    </div>
  )
}
