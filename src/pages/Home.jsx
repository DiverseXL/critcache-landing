import React, { useState } from 'react'
import Antigravity from '../components/Antigravity'
import SavingsProof from '../components/SavingsProof'
import CLISection from '../components/CLISection'
import HowItWorks from '../components/HowItWorks'
import { Link } from 'react-router-dom'

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// Common glassmorphism styling parameters
const glassStyle = {
  background: 'rgba(8, 11, 10, 0.22)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(57, 255, 106, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
}

function Home() {
  const [guideOpen, setGuideOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npx critcache analyze').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Hero Section with Antigravity background */}
      <section className="relative min-h-[90vh] overflow-hidden flex flex-col items-center justify-center px-6 py-12 text-center">
        {/* Antigravity background container */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Antigravity
            count={800}
            magnetRadius={10}
            ringRadius={10}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={2}
            lerpSpeed={0.1}
            color="#39FF6A"
            autoAnimate={true}
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">

          <h1 className="font-mono text-8xl sm:text-[9rem] md:text-[16rem] font-extrabold tracking-tighter text-paper leading-[1.0] mb-10 animate-headline-reveal" style={{ fontFamily: "'Pixelbasel', monospace" }}>
            critcache
          </h1>

          <p className="text-base sm:text-lg text-ash max-w-[520px] mb-10 leading-relaxed">
            A CLI that fans out AI code review across your repo through BTL Runtime — 
            and proves every dollar it saves you, live.
          </p>

          {/* Install Command Box */}
          <div className="w-full max-w-[580px] mb-2" style={{ position: 'relative' }}>
            <div
              style={{
                ...glassStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '10px',
                padding: '14px 18px',
                gap: '12px',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#39FF6A', fontWeight: 600 }}>
                  $
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#E8EDE9' }}>
                  npx critcache analyze
                </span>
              </div>
              <button
                onClick={handleCopy}
                title="Copy to clipboard"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: copied ? '#39FF6A' : '#9BA39C',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 200ms',
                  flexShrink: 0,
                }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>

            {/* Right-aligned Toggle Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
              <button
                onClick={() => setGuideOpen(!guideOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#9BA39C',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 0',
                }}
              >
                Install guide {guideOpen ? '▴' : '▾'}
              </button>
            </div>

            {/* Expandable Section */}
            <div
              style={{
                maxHeight: guideOpen ? '200px' : '0px',
                opacity: guideOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 300ms ease, opacity 250ms ease, margin-top 250ms ease',
                marginTop: guideOpen ? '8px' : '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '12px',
                paddingRight: '4px',
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#39FF6A' }}>
                  $ cd your-project
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#9BA39C', marginTop: '2px' }}>
                  Open your project folder
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#39FF6A' }}>
                  $ npx critcache compare
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#9BA39C', marginTop: '2px' }}>
                  Run twice — watch cache hits climb
                </div>
              </div>
            </div>
          </div>

          {/* Glass Terminal Card */}
          <div
            className="w-full max-w-[560px] font-mono text-left mb-10 transition-all duration-300 hover:border-crit/40 hover:scale-[1.01] animate-hero-reveal"
            style={{
              ...glassStyle,
              borderRadius: '12px',
              padding: '18px 20px',
              marginTop: '20px',
              opacity: 0,
            }}
          >
            <div className="flex items-center space-x-2 border-b border-rule/10 pb-3 mb-3 text-xs text-ash">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
              <span className="ml-2 font-mono">bash</span>
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
              <div className="flex items-center space-x-2">
                <span className="text-crit font-bold">$</span>
                <span className="text-paper">npx critcache analyze .</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-crit">●</span>
                  <span className="text-paper">src/btl-client.ts</span>
                  <span className="text-ash/60">[exact]</span>
                  <span className="text-crit">$0.0113 saved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-crit">●</span>
                  <span className="text-paper">src/runner.ts</span>
                  <span className="text-ash/60">[exact]</span>
                  <span className="text-crit">$0.0113 saved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#F59E0B]">◐</span>
                  <span className="text-paper">src/walker.ts</span>
                  <span className="text-ash/60">[prefix]</span>
                  <span className="text-crit">$0.0089 saved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-crit">●</span>
                  <span className="text-paper">src/cli.ts</span>
                  <span className="text-ash/60">[exact]</span>
                  <span className="text-crit">$0.0113 saved</span>
                </div>
              </div>
              <div className="text-ash/60 pl-4">Synthesizing repo-level findings…</div>
              <div className="pt-2 border-t border-rule/10 pl-4 space-y-0.5">
                <div className="text-paper"><span className="text-ash/60">Total saved</span>  <span className="text-crit font-bold">$0.0428</span></div>
                <div className="text-paper"><span className="text-ash/60">Cache hits</span>    <span className="text-crit">3/4 (75%)</span></div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10">
            <Link
              to="/docs"
              className="px-6 py-3 rounded bg-crit text-void font-mono font-bold hover:bg-crit/90 transition-all shadow-lg shadow-crit/20 hover:scale-[1.02]"
            >
              Get Started
            </Link>
            <Link
              to="/docs"
              className="px-6 py-3 rounded bg-void border border-rule/30 text-paper font-mono hover:bg-rule/5 transition-all"
            >
              Read Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Thin section line */}
      <div className="border-t border-white/10 max-w-7xl mx-auto"></div>

      <SavingsProof />

      <div className="border-t border-white/10 max-w-7xl mx-auto"></div>

      <HowItWorks />

      <div className="border-t border-white/10 max-w-7xl mx-auto"></div>

      <CLISection />
    </>
  )
}

export default Home
