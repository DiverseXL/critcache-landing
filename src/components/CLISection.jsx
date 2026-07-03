import React, { useCallback, useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   Brand SVG logos (Simple Icons paths)
───────────────────────────────────────────── */
const OpenAILogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
)

const AnthropicLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
    <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
  </svg>
)

const CursorLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
    <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
  </svg>
)

const ClaudeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
  </svg>
)

const CopilotLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
    <path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z" />
  </svg>
)

const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
    <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
  </svg>
)

/* ─────────────────────────────────────────────
   Tool logo grid data
───────────────────────────────────────────── */
const TOOLS = [
  { name: 'OpenAI',      Logo: OpenAILogo,   bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.13)', color: '#ffffff' },
  { name: 'Anthropic',   Logo: AnthropicLogo, bg: 'rgba(205,133,63,0.10)', border: 'rgba(205,133,63,0.22)',  color: '#CD853F' },
  { name: 'Cursor',      Logo: CursorLogo,   bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.13)', color: '#ffffff' },
  { name: 'Claude Code', Logo: ClaudeLogo,   bg: 'rgba(255,130,80,0.10)',  border: 'rgba(255,130,80,0.22)',  color: '#FF8250' },
  { name: 'Copilot',     Logo: CopilotLogo,  bg: 'rgba(120,119,198,0.10)', border: 'rgba(120,119,198,0.22)', color: '#7877C6' },
  { name: 'Gemini',      Logo: GeminiLogo,   bg: 'rgba(66,133,244,0.10)',  border: 'rgba(66,133,244,0.22)',  color: '#4285F4' },
]

/* ─────────────────────────────────────────────
   Terminal animation config
───────────────────────────────────────────── */
const COMMAND      = '› npx critcache compare .'
const CHAR_DELAY   = 40    // ms per character
const POST_TYPE    = 600   // pause after typing finishes
const LINE_DELAY   = 300   // ms between each revealed line
const END_PAUSE    = 3000  // pause at end before fade
const FADE_MS      = 700   // fade-out duration

const OUTPUT_LINES = [
  { type: 'plain',  text: 'Scanning repo...',                color: '#9BA39C' },
  { type: 'hit',    icon: '●', iconColor: '#39FF6A', file: 'src/btl-client.ts', tag: '[exact]',  amount: '$0.0113 saved' },
  { type: 'hit',    icon: '●', iconColor: '#39FF6A', file: 'src/runner.ts',     tag: '[exact]',  amount: '$0.0113 saved' },
  { type: 'hit',    icon: '◐', iconColor: '#F59E0B', file: 'src/walker.ts',     tag: '[prefix]', amount: '$0.0089 saved' },
  { type: 'hit',    icon: '●', iconColor: '#39FF6A', file: 'src/cli.ts',        tag: '[exact]',  amount: '$0.0113 saved' },
  { type: 'spacer' },
  { type: 'stat',   label: 'Cache hits',   value: '3/4 (75%)', valueColor: '#9BA39C', bold: false },
  { type: 'stat',   label: 'Total saved',  value: '$0.0428',   valueColor: '#39FF6A', bold: true  },
]

/* ─────────────────────────────────────────────
   Animated terminal window
───────────────────────────────────────────── */
function TerminalWindow() {
  const [typed,    setTyped]    = useState('')
  const [cursor,   setCursor]   = useState(true)   // blink state
  const [revealed, setRevealed] = useState(0)
  const [phase,    setPhase]    = useState('typing') // typing | revealing | done | fading
  const [opacity,  setOpacity]  = useState(1)
  const timers = useRef([])

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms)
    timers.current.push(id)
  }

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setTyped('')
    setRevealed(0)
    setPhase('typing')
    setOpacity(1)
    setCursor(true)
  }, [])

  const runSequence = useCallback(() => {
    reset()
    let i = 0

    const typeChar = () => {
      i++
      setTyped(COMMAND.slice(0, i))
      if (i < COMMAND.length) {
        later(typeChar, CHAR_DELAY)
      } else {
        // typing done
        setCursor(false)
        setPhase('revealing')
        let line = 0
        const revealLine = () => {
          line++
          setRevealed(line)
          if (line < OUTPUT_LINES.length) {
            later(revealLine, LINE_DELAY)
          } else {
            setPhase('done')
            later(() => {
              setPhase('fading')
              setOpacity(0)
              later(runSequence, FADE_MS + 100)
            }, END_PAUSE)
          }
        }
        later(revealLine, POST_TYPE)
      }
    }
    later(typeChar, CHAR_DELAY)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset])

  // start on mount
  useEffect(() => {
    runSequence()
    return () => timers.current.forEach(clearTimeout)
  }, [runSequence])

  // cursor blink — only during typing
  useEffect(() => {
    if (phase !== 'typing') return
    const id = setInterval(() => setCursor(p => !p), 500)
    return () => clearInterval(id)
  }, [phase])

  const renderLine = (line, idx) => {
    if (idx >= revealed) return null

    if (line.type === 'spacer') return (
      <div key={idx} style={{ height: '0.8em' }} />
    )

    if (line.type === 'plain') return (
      <div key={idx} style={{ color: line.color, paddingLeft: '18px' }}>
        {line.text}
      </div>
    )

    if (line.type === 'hit') return (
      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0', paddingLeft: '18px' }}>
        <span style={{ color: line.iconColor, marginRight: '8px' }}>{line.icon}</span>
        <span style={{ color: '#E8EDE9', minWidth: '155px', display: 'inline-block' }}>{line.file}</span>
        <span style={{ color: '#9BA39C', minWidth: '64px', display: 'inline-block' }}>{line.tag}</span>
        <span style={{ color: '#39FF6A' }}>{line.amount}</span>
      </div>
    )

    if (line.type === 'stat') return (
      <div key={idx} style={{ display: 'flex', paddingLeft: '18px' }}>
        <span style={{ color: '#9BA39C', minWidth: '120px', display: 'inline-block' }}>{line.label}</span>
        <span style={{ color: line.valueColor, fontWeight: line.bold ? 700 : 400 }}>{line.value}</span>
      </div>
    )

    return null
  }

  return (
    <div
      style={{
        background: '#0F1410',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(57,255,106,0.13)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,0,0,0.3)',
        opacity,
        transition: `opacity ${FADE_MS}ms ease`,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.025)',
          gap: '8px',
        }}
      >
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57', flexShrink: 0 }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E', flexShrink: 0 }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA41', flexShrink: 0 }} />
        <span
          style={{
            marginLeft: '10px',
            fontSize: '12px',
            color: '#9BA39C',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.02em',
          }}
        >
          critcache — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div
        style={{
          padding: '22px 20px 28px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
          lineHeight: '1.75',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
        }}
      >
        {/* Command + blinking cursor */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ color: '#39FF6A' }}>{typed}</span>
          {phase === 'typing' && (
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '14px',
                background: '#39FF6A',
                marginLeft: '2px',
                verticalAlign: 'middle',
                opacity: cursor ? 1 : 0,
                transition: 'opacity 60ms',
              }}
            />
          )}
        </div>

        {/* Output lines */}
        {OUTPUT_LINES.map((line, idx) => renderLine(line, idx))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Copy button
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
function CLISection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npx critcache analyze').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="features"
      style={{
        background: '#0B0E0C',
        width: '100%',
        padding: '80px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* NEW badge */}
          <div>
            <span
              style={{
                display: 'inline-block',
                background: '#39FF6A',
                color: '#060A07',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '3px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
              }}
            >
              NEW
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 700,
                color: '#E8EDE9',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Introducing critcache
              <br />
              <span style={{ color: '#39FF6A' }}>CLI</span>
            </h2>
          </div>

          {/* Subhead */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#9BA39C',
              maxWidth: '420px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Parallel AI code review across your entire repo.
            Powered by BTL Runtime caching.
          </p>

          {/* Tool grid label */}
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#9BA39C',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                margin: '0 0 14px 0',
              }}
            >
              CATCHES WASTE FROM THESE TOOLS
            </p>

            {/* 2×3 logo grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                gap: '10px',
                width: 'fit-content',
              }}
            >
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 14px 8px 10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    minWidth: '130px',
                  }}
                >
                  {/* SVG logo badge */}
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '7px',
                      background: tool.bg,
                      border: `1px solid ${tool.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: tool.color,
                      flexShrink: 0,
                    }}
                  >
                    <tool.Logo />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: '#C4CCC5',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Install command box */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(57,255,106,0.04)',
                border: '1px solid rgba(57,255,106,0.18)',
                borderRadius: '10px',
                padding: '14px 16px',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '14px',
                    color: '#39FF6A',
                    fontWeight: 600,
                  }}
                >
                  $
                </span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '14px',
                    color: '#E8EDE9',
                  }}
                >
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

            {/* Follow-up steps */}
            <div
              style={{
                marginTop: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                paddingLeft: '4px',
              }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  color: '#9BA39C',
                }}
              >
                $ cd your-project
              </span>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '13px',
                  color: '#9BA39C',
                }}
              >
                $ npx critcache compare
              </span>
            </div>
          </div>

          {/* Caption */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(155,163,156,0.55)',
              margin: 0,
            }}
          >
            No dashboard. No billing portal. Just receipts.
          </p>
        </div>

        {/* ── RIGHT COLUMN — animated terminal ── */}
        <div>
          <TerminalWindow />
        </div>
      </div>

      {/* Responsive fallback for narrow screens */}
      <style>{`
        @media (max-width: 768px) {
          #features > div {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default CLISection
