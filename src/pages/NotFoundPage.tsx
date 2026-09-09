import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="not-found shell"><span>404</span><h1>This space does not exist yet.</h1><p>The route may have moved, or the project is still private.</p><Link className="button button--primary" to="/"><ArrowLeft aria-hidden="true" />Back home</Link></section>
}
