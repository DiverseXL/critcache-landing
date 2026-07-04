import { useCallback, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFeaturesClick = useCallback((e) => {
    e.preventDefault()
    const el = document.getElementById('features')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0B0E0C]/80 backdrop-blur-md border-b border-[#1C2420]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 no-underline">
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 'bold',
              color: '#39FF6A',
              border: '1px solid rgba(57, 255, 106, 0.4)',
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              lineHeight: 1,
              background: 'rgba(57, 255, 106, 0.05)'
            }}
          >
            [✦]
          </div>
          <span className="font-mono font-normal tracking-tight" style={{ color: '#E8EDE9', fontSize: '15px' }}>
            critcache
          </span>
        </Link>
        <nav className="flex space-x-6 text-sm text-ash font-mono">
          <a
            href={isHome ? "#features" : "/#features"}
            onClick={isHome ? handleFeaturesClick : undefined}
            className="hover:text-crit transition-colors"
          >
            features
          </a>
          <Link to="/docs" className="hover:text-crit transition-colors">
            docs
          </Link>
          <a href="https://github.com/DiverseXL/critcache" target="_blank" rel="noreferrer" className="hover:text-crit transition-colors">
            github
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
