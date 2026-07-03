import React, { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal'

const stepsData = [
  {
    number: '01',
    symbol: '>_',
    title: 'Analyze Codebases',
    body: 'Scan repositories in parallel. Identify exact and prefix token patterns, checking where you are duplicating expensive context windows across runs.',
  },
  {
    number: '02',
    symbol: '[~~]',
    title: 'Warm the BTL Cache',
    body: 'Warms runtime caches before compilation. Warm caches avoid redundant external fetches by serving local token mappings directly.',
  },
  {
    number: '03',
    symbol: '$',
    title: 'Save Instantly',
    body: 'Compare active code reviews and watch your API bills shrink. Proves absolute dollar receipts on every CLI command run.',
  },
]

function WorkCard({ step, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [displaySymbol, setDisplaySymbol] = useState(step.symbol)
  const typingTimer = useRef(null)

  useEffect(() => {
    if (isHovered) {
      // Start typing animation
      let currentLength = 0
      setDisplaySymbol('')
      
      const type = () => {
        currentLength++
        setDisplaySymbol(step.symbol.slice(0, currentLength))
        if (currentLength < step.symbol.length) {
          typingTimer.current = setTimeout(type, 100)
        }
      }
      
      typingTimer.current = setTimeout(type, 100)
    } else {
      // Reset to full symbol when not hovered
      if (typingTimer.current) {
        clearTimeout(typingTimer.current)
      }
      setDisplaySymbol(step.symbol)
    }

    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current)
      }
    }
  }, [isHovered, step.symbol])

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Dot (Green dot popping against cream cards, glow intensifies on hover) */}
      <div 
        style={{ 
          width: '10px', 
          height: '10px', 
          borderRadius: '50%', 
          background: '#39FF6A', 
          marginBottom: '32px', 
          boxShadow: isHovered 
            ? '0 0 16px 4px rgba(57, 255, 106, 0.9)' 
            : '0 0 10px rgba(57, 255, 106, 0.6)', 
          position: 'relative',
          top: '-5px',
          transition: 'all 300ms ease'
        }}
      />

      {/* Card Container */}
      <div 
        style={{ 
          background: '#F5F2EC', 
          border: isHovered ? '1px solid #39FF6A' : '1px solid #E2DDD5', 
          borderRadius: '12px', 
          padding: '32px', 
          width: '100%', 
          boxShadow: isHovered 
            ? '0 12px 30px rgba(57, 255, 106, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)' 
            : '0 4px 20px rgba(0, 0, 0, 0.05)', 
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all 300ms cubic-bezier(0.25, 1, 0.5, 1)',
          cursor: 'pointer'
        }}
      >
        {/* Card Header Row: Icon + Number Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Icon - Monospace text symbol with typing effect */}
          <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
            <span 
              style={{ 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '32px', 
                fontWeight: 'bold', 
                color: '#0B0E0C',
                userSelect: 'none'
              }}
            >
              {displaySymbol}
            </span>
            {isHovered && displaySymbol.length < step.symbol.length && (
              <span 
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '24px',
                  background: '#0B0E0C',
                  marginLeft: '4px',
                  animation: 'blink 500ms step-end infinite'
                }}
              />
            )}
          </div>

          {/* Step Number in small dark pill */}
          <div 
            style={{ 
              background: '#0B0E0C', 
              borderRadius: '999px', 
              padding: '2px 8px', 
              display: 'inline-flex', 
              alignItems: 'center',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 300ms ease'
            }}
          >
            <span 
              style={{ 
                fontFamily: 'JetBrains Mono, monospace', 
                color: '#39FF6A', 
                fontSize: '12px', 
                fontWeight: 'bold' 
              }}
            >
              {step.number}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div>
          <h3 
            style={{ 
              fontFamily: 'JetBrains Mono, monospace', 
              fontWeight: 'bold', 
              color: '#0B0E0C', 
              fontSize: '18px', 
              margin: '0 0 10px 0',
              transition: 'color 300ms ease'
            }}
          >
            {step.title}
          </h3>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              color: '#5C5850', 
              fontSize: '14px', 
              lineHeight: 1.6, 
              margin: 0 
            }}
          >
            {step.body}
          </p>
        </div>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <section 
      style={{ 
        background: '#080B0A', 
        padding: '100px 24px', 
        position: 'relative', 
        zIndex: 10 
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Eyebrow and Section Header */}
        <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span 
            style={{ 
              fontFamily: 'JetBrains Mono, monospace', 
              color: '#39FF6A', 
              fontSize: '13px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              display: 'block', 
              marginBottom: '12px' 
            }}
          >
            Workflow
          </span>
          <h2 
            style={{ 
              fontFamily: 'JetBrains Mono, monospace', 
              color: '#E8EDE9', 
              fontSize: 'clamp(28px, 3.5vw, 44px)', 
              fontWeight: 700, 
              margin: 0 
            }}
          >
            How it works
          </h2>
        </div>
        </Reveal>

        {/* Three-Column Cards Grid with Connector Line */}
        <div style={{ position: 'relative' }}>
          {/* Connector Line behind cards */}
          <div 
            style={{ 
              position: 'absolute', 
              top: '40px', 
              left: '10%', 
              right: '10%', 
              height: '1px', 
              background: '#0B0E0C', 
              opacity: 0.10, 
              zIndex: 1 
            }}
          />

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '32px', 
              position: 'relative', 
              zIndex: 2 
            }}
          >
            {stepsData.map((step, idx) => (
              <WorkCard key={idx} step={step} index={idx} />
            ))}
          </div>
        </div>

        {/* Mock Command Line below cards */}
        <Reveal delay={300}>
        <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '8px', 
              padding: '12px 20px', 
              fontFamily: 'JetBrains Mono, monospace', 
              fontSize: '13px', 
              color: '#9BA39C' 
            }}
          >
            <span style={{ color: '#39FF6A' }}>$</span> critcache status --check-warmth
          </div>
        </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
