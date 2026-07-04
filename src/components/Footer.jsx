import Antigravity from './Antigravity'

function Footer() {
  return (
    <footer>
      {/* Part 1 — Brand closing section with parallax depth effect */}
      <div className="w-full h-[420px] bg-[#0B0E0C] relative overflow-hidden">
        {/* Layer 1 (z-10) — giant critcache watermark */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center pb-[42px]">
          <span
            className="select-none leading-none"
            style={{
              fontFamily: "'Pixelbasel', monospace",
              fontSize: 'clamp(72px, 14vw, 160px)',
              color: '#E8EDE9',
              opacity: 0.2,
            }}
          >
            critcache
          </span>
        </div>

        {/* Layer 2 (z-20) — Antigravity particle field */}
        <div className="absolute top-[35%] left-0 right-0 bottom-0 z-20 pointer-events-none">
          <Antigravity
            count={600}
            magnetRadius={8}
            ringRadius={8}
            waveSpeed={0.3}
            waveAmplitude={0.8}
            particleSize={2}
            lerpSpeed={0.08}
            color="#39FF6A"
            autoAnimate={true}
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={2}
            particleShape="capsule"
            fieldStrength={8}
          />
        </div>

        {/* Layer 3 (z-30) — bottom gradient fog */}
        <div
          className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none"
          style={{
            height: '40%',
            background: 'linear-gradient(to top, #0B0E0C 50%, transparent)',
          }}
        />

        {/* Layer 4 (z-30) — top fade */}
        <div
          className="absolute top-0 left-0 right-0 z-30 pointer-events-none"
          style={{
            height: '80px',
            background: 'linear-gradient(to bottom, #0B0E0C 0%, transparent)',
          }}
        />

        {/* Above all layers (z-40) — tagline */}
        <div className="absolute top-0 left-0 right-0 z-40 text-center pt-12 font-mono text-[#9BA39C] text-[15px]">
          Open source. No subscriptions. Just receipts.
        </div>
      </div>

      {/* Part 2 — Minimal links bar */}
      <div className="w-full bg-[#0B0E0C] border-t border-[#1C2420]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="font-mono text-[#9BA39C] text-[13px]">critcache</span>
          <div className="flex gap-8 font-mono text-[#9BA39C] text-[13px]">
            <a href="https://www.npmjs.com/package/critcache" target="_blank" rel="noreferrer" className="hover:text-[#E8EDE9] transition-colors duration-150">npm</a>
            <a href="https://github.com/DiverseXL/critcache" target="_blank" rel="noreferrer" className="hover:text-[#E8EDE9] transition-colors duration-150">github</a>
            <a href="/docs" className="hover:text-[#E8EDE9] transition-colors duration-150">docs</a>
            <a href="#" className="hover:text-[#E8EDE9] transition-colors duration-150">MIT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
