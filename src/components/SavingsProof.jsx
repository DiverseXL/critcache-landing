import React, { useEffect, useRef, useState } from 'react'

/* ── OpenAI SVG logo (official flower/bloom mark) ── */
const OpenAILogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 41 41"
    fill="currentColor"
    style={{ width: '22px', height: '22px', color: '#ffffff' }}
    aria-label="OpenAI logo"
  >
    <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.205-3.371 10.079 10.079 0 0 0-10.212 4.965 9.964 9.964 0 0 0-6.635 4.832 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.205 3.371 10.079 10.079 0 0 0 10.212-4.966 9.965 9.965 0 0 0 6.635-4.831 10.079 10.079 0 0 0-1.24-11.818ZM20.46 37.098a7.464 7.464 0 0 1-4.797-1.737c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.491 7.51ZM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744ZM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.747-10.24Zm27.658 6.437-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13Zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763Zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225Zm1.829-3.943 4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V18Z" />
  </svg>
)

/* ── critcache "C" icon ── */
const CritcacheIcon = ({ color = '#9BA39C' }) => (
  <div
    style={{
      width: '34px',
      height: '34px',
      borderRadius: '8px',
      background: 'rgba(57,255,106,0.08)',
      border: '1px solid rgba(57,255,106,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'JetBrains Mono, monospace',
      fontWeight: 700,
      fontSize: '14px',
      color: '#39FF6A',
      flexShrink: 0,
    }}
  >
    C
  </div>
)

const bars = [
  {
    label: 'Direct to OpenAI',
    icon: 'openai',
    color: '#FF5C5C',
    glow: 'rgba(255, 92, 92, 0.40)',
    width: 100,
    amount: '$0.0840 / run',
  },
  {
    label: 'critcache pass 1',
    icon: 'critcache',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.40)',
    width: 58,
    amount: '$0.0490 / run',
  },
  {
    label: 'critcache pass 2',
    icon: 'critcache',
    color: '#39FF6A',
    glow: 'rgba(57, 255, 106, 0.45)',
    width: 11,
    amount: '$0.0089 / run',
  },
]

function SavingsProof() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{ position: 'relative', zIndex: 10, padding: '80px 32px' }}
    >
      <div
        ref={sectionRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'rgba(8, 11, 10, 0.18)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(57,255,106,0.15)',
          borderRadius: '20px',
          padding: '56px 64px',
          boxShadow: [
            '0 8px 40px rgba(0,0,0,0.40)',
            '0 1px 0 rgba(255,255,255,0.06) inset',
            '0 -1px 0 rgba(0,0,0,0.3) inset',
            '0 0 80px rgba(57,255,106,0.04)',
          ].join(', '),
        }}
      >
        {/* Header: pulsing dot + social proof text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '44px' }}>
          <span style={{ position: 'relative', display: 'flex', width: '10px', height: '10px' }}>
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                backgroundColor: '#39FF6A',
                opacity: 0.5,
                animation: 'ping 1.4s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                backgroundColor: '#39FF6A',
              }}
            />
          </span>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              color: '#9BA39C',
              letterSpacing: '0.02em',
            }}
          >
            20 repos analyzed this week
          </span>
        </div>

        {/* Bar rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {bars.map((bar, i) => (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: bar.icon === 'openai'
                    ? 'rgba(255,255,255,0.07)'
                    : 'rgba(57,255,106,0.07)',
                  border: bar.icon === 'openai'
                    ? '1px solid rgba(255,255,255,0.12)'
                    : '1px solid rgba(57,255,106,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {bar.icon === 'openai' ? (
                  <OpenAILogo />
                ) : (
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#39FF6A',
                    }}
                  >
                    C
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  width: '160px',
                  flexShrink: 0,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                  color: '#9BA39C',
                  whiteSpace: 'nowrap',
                }}
              >
                {bar.label}
              </span>

              {/* Bar track */}
              <div
                style={{
                  flex: 1,
                  height: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  position: 'relative',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    borderRadius: '999px',
                    backgroundColor: bar.color
                      .replace(')', ', 0.55)').replace('rgb', 'rgba'),
                    background: `linear-gradient(90deg, ${bar.color}55 0%, ${bar.color}99 100%)`,
                    boxShadow: animate
                      ? `0 0 16px 2px ${bar.glow}, 0 0 3px 0px ${bar.color}88`
                      : 'none',
                    width: animate ? `${bar.width}%` : '0%',
                    transition: `width 800ms ease-out ${i * 130}ms, box-shadow 600ms ease-out ${i * 130 + 200}ms`,
                  }}
                />
              </div>

              {/* Dollar amount */}
              <span
                style={{
                  width: '130px',
                  flexShrink: 0,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: bar.color,
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                }}
              >
                {bar.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p
          style={{
            marginTop: '40px',
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(155,163,156,0.60)',
            fontFamily: 'JetBrains Mono, monospace',
            lineHeight: '1.7',
            letterSpacing: '0.015em',
          }}
        >
          Same 5-file repo. Same model. BTL Runtime cache warming the difference.
        </p>
      </div>

      {/* Ping keyframe */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default SavingsProof
