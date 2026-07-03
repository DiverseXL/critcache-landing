import { useState, useEffect } from 'react'

function ArrowUpIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  )
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check initial state
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: 'rgba(57, 255, 106, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(57, 255, 106, 0.25)',
        boxShadow: [
          '0 4px 16px rgba(0, 0, 0, 0.35)',
          '0 0 20px rgba(57, 255, 106, 0.06)',
          'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        ].join(', '),
        color: '#39FF6A',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        transition: 'opacity 300ms ease, transform 300ms cubic-bezier(0.25, 1, 0.5, 1)',
        pointerEvents: visible ? 'auto' : 'none',
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(57, 255, 106, 0.18)'
        e.currentTarget.style.borderColor = 'rgba(57, 255, 106, 0.45)'
        e.currentTarget.style.boxShadow = [
          '0 6px 24px rgba(0, 0, 0, 0.4)',
          '0 0 30px rgba(57, 255, 106, 0.12)',
          'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        ].join(', ')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(57, 255, 106, 0.1)'
        e.currentTarget.style.borderColor = 'rgba(57, 255, 106, 0.25)'
        e.currentTarget.style.boxShadow = [
          '0 4px 16px rgba(0, 0, 0, 0.35)',
          '0 0 20px rgba(57, 255, 106, 0.06)',
          'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        ].join(', ')
      }}
    >
      <ArrowUpIcon />
    </button>
  )
}
