import React, { useState } from 'react'
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

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
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
  )
}

const sectionHeadingStyle = {
  fontFamily: 'JetBrains Mono, monospace',
  fontWeight: 'bold',
  color: '#E8EDE9',
  fontSize: '20px',
  borderBottom: '1px solid #1C2420',
  paddingBottom: '12px',
  marginBottom: '20px',
}

const codeBlockStyle = {
  background: '#0F1410',
  border: '1px solid #1C2420',
  borderRadius: '12px',
  padding: '20px 24px',
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: '14px',
  color: '#39FF6A',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
}

const glassStyle = {
  background: 'rgba(8, 11, 10, 0.22)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(57, 255, 106, 0.15)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
}

function OptionsTable({ rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', marginTop: '16px' }}>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid #1C2420' }}>
            <td style={{ padding: '10px 12px 10px 0', color: '#39FF6A', verticalAlign: 'top', width: '180px' }}>{row.option}</td>
            <td style={{ padding: '10px 12px', color: '#9BA39C', verticalAlign: 'top', width: '160px' }}>{row.default}</td>
            <td style={{ padding: '10px 0 10px 12px', color: '#9BA39C', verticalAlign: 'top' }}>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Docs() {
  return (
    <div style={{ background: '#0B0E0C', minHeight: '100vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px' }}>

        {/* Back link */}
        <Link
          to="/"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#9BA39C',
            fontSize: '14px',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '32px',
            transition: 'color 200ms',
          }}
          onMouseEnter={e => e.target.style.color = '#39FF6A'}
          onMouseLeave={e => e.target.style.color = '#9BA39C'}
        >
          ← back
        </Link>

        {/* Page title */}
        <h1 style={{ fontFamily: "'Pixelbasel', monospace", fontSize: '48px', color: '#E8EDE9', margin: '0 0 8px 0', fontWeight: 'normal' }}>
          critcache docs
        </h1>

        {/* Subtitle */}
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '16px', margin: '0 0 64px 0', lineHeight: 1.5 }}>
          Everything you need to run your first repo audit.
        </p>

        {/* ── Section 1: What is critcache ── */}
        <h2 style={sectionHeadingStyle}>What is critcache</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 48px 0' }}>
          critcache is a CLI tool that shows developers when BTL Runtime has turned a slow AI workflow into a near-instant one — surfacing live cache hits, latency reductions, and cost savings for every request.
          <br /><br />
          It walks your codebase, picks the most relevant files, fires concurrent analysis calls through BTL Runtime's caching layer, and prints a live timing and savings receipt per file as results land. Run it twice with compare and watch response time drop from 4-5 seconds to under 1 second on cached files.
        </p>

        {/* ── Section 2: Requirements ── */}
        <h2 style={sectionHeadingStyle}>Requirements</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 48px 0' }}>
          {[
            'Node.js v18 or higher',
            'A BTL Runtime API key (GATEWAY_API_KEY)',
            'npx (comes with npm)',
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#9BA39C', lineHeight: 1.8 }}>
              <span style={{ color: '#39FF6A', marginRight: '8px' }}>›</span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Section 3: Installation ── */}
        <h2 style={sectionHeadingStyle}>Installation</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '0 0 20px 0', lineHeight: 1.6 }}>
          No global install required. Run directly with npx:
        </p>
        <div style={codeBlockStyle}>
          <span>$ npx critcache analyze .</span>
          <CopyButton text="npx critcache analyze ." />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '13px', margin: '8px 0 12px 0', lineHeight: 1.4 }}>
          This will analyze up to 20 files in the current directory by default.
        </p>
        <div style={{ background: '#0F1410', borderRadius: '12px', padding: '16px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9BA39C', lineHeight: 1.6, marginBottom: '48px', border: '1px solid #1C2420' }}>
          <strong style={{ color: '#E8EDE9' }}>Windows PowerShell users:</strong> set env vars like this before running:
          <div style={{ background: '#0B0E0C', borderRadius: '8px', padding: '12px 16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#39FF6A', marginTop: '8px', lineHeight: 2 }}>
            $env:GATEWAY_API_KEY = "your_btl_key"<br />
            $env:CRITCACHE_MOCK = "1"<br />
            npx critcache analyze .
          </div>
        </div>

        {/* ── Section 4: Commands ── */}
        <h2 style={sectionHeadingStyle}>Commands</h2>

        {/* Sub-section: analyze */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '32px 0 16px 0' }}>analyze</h3>
        <div style={codeBlockStyle}>
          <span>$ npx critcache analyze &lt;repo-path&gt;</span>
          <CopyButton text="npx critcache analyze <repo-path>" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Walks the repo, picks the top files by relevance, fires parallel AI review agents through BTL Runtime, and prints live cache-tier and savings data per file. Writes a full report to critcache-report.md in your current directory.
        </p>
        <OptionsTable
          rows={[
            { option: '--max-files, -m', default: '20', description: 'Maximum files to analyze' },
            { option: '--concurrency, -c', default: '6', description: 'Parallel requests at once' },
            { option: '--output, -o', default: 'critcache-report.md', description: 'Report output path' },
          ]}
        />

        {/* Sub-section: compare */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>compare</h3>
        <div style={codeBlockStyle}>
          <span>$ npx critcache compare &lt;repo-path&gt;</span>
          <CopyButton text="npx critcache compare <repo-path>" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Runs the full analysis twice, back to back, on the same file set. Pass 1 is cold — mostly cache misses. Pass 2 is warm — the same prompts hit BTL Runtime's cache and return in milliseconds. Prints a before/after delta table showing cache hit rate, cost, and wall time for both passes.
        </p>
        <OptionsTable
          rows={[
            { option: '--max-files, -m', default: '20', description: 'Maximum files to analyze' },
            { option: '--concurrency, -c', default: '6', description: 'Parallel requests at once' },
          ]}
        />

        {/* Sub-section: mock mode */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>mock mode</h3>
        <div style={{ ...codeBlockStyle, marginBottom: '8px' }}>
          <span>$ CRITCACHE_MOCK=1 npx critcache analyze .</span>
          <CopyButton text="CRITCACHE_MOCK=1 npx critcache analyze ." />
        </div>
        <div style={codeBlockStyle}>
          <span>$ CRITCACHE_MOCK=1 npx critcache compare .</span>
          <CopyButton text="CRITCACHE_MOCK=1 npx critcache compare ." />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 48px 0', lineHeight: 1.6 }}>
          No API key required. Simulates the full pipeline locally — file discovery, parallel agents, live renderer, synthesis pass, and report writer all run exactly as in production, but LLM calls are replaced with a local mock that simulates realistic cache hit behavior. Pass 1 shows cache misses, pass 2 shows cache hits — the cold-to-warm story works correctly in mock mode.
        </p>

        {/* Sub-section: watch */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>watch</h3>
        <div style={codeBlockStyle}>
          <span>$env:GATEWAY_API_KEY = "your_btl_key"</span>
          <CopyButton text={'$env:GATEWAY_API_KEY = "your_btl_key"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache watch .</span>
          <CopyButton text="npx critcache watch ." />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Sits in your terminal while you code. Every time you save a file, critcache re-analyzes it through BTL Runtime and shows whether it was a cache hit or miss. First save: ~3800ms miss. Second save: ~400ms hit. That is BTL Runtime cache warming in real time — no commands needed, just save and watch.
        </p>
        <OptionsTable
          rows={[
            { option: '--max-files, -m', default: '20', description: 'Maximum files to watch' },
            { option: '--debounce, -d', default: '600', description: 'Debounce delay in ms after a file save' },
            { option: '--sarif', default: '—', description: 'Write live-updating .sarif on each change' },
          ]}
        />

        {/* Sub-section: review-pr */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>review-pr</h3>
        <div style={codeBlockStyle}>
          <span>$env:GATEWAY_API_KEY = "your_btl_key"</span>
          <CopyButton text={'$env:GATEWAY_API_KEY = "your_btl_key"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache review-pr . main</span>
          <CopyButton text="npx critcache review-pr . main" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Reviews only the files changed between your current branch and a target branch. The daily-driver mode for PR review — focuses analysis on what actually changed, not the whole repo. Uses git diff under the hood, no GitHub API required.
        </p>
        <OptionsTable
          rows={[
            { option: '--concurrency, -c', default: '6', description: 'Parallel requests at once' },
            { option: '--output, -o', default: 'critcache-pr-report.md', description: 'Report output path' },
            { option: '--sarif', default: '—', description: 'Also write a .sarif report' },
          ]}
        />
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '14px', margin: '24px 0 0 0', lineHeight: 1.5, fontWeight: 600 }}>
          Examples:
        </p>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache review-pr . main</span>
          <CopyButton text="npx critcache review-pr . main" />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache review-pr . origin/main</span>
          <CopyButton text="npx critcache review-pr . origin/main" />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache review-pr . HEAD~1</span>
          <CopyButton text="npx critcache review-pr . HEAD~1" />
        </div>

        {/* Sub-section: models */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>models</h3>
        <div style={codeBlockStyle}>
          <span>$env:GATEWAY_API_KEY = "your_btl_key"</span>
          <CopyButton text={'$env:GATEWAY_API_KEY = "your_btl_key"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache models</span>
          <CopyButton text="npx critcache models" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Lists all models available on BTL Runtime — 200+ models across OpenAI, Anthropic, DeepSeek, Gemini, Mistral and more. Use any model ID as your BTL_MODEL env var.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '14px', margin: '24px 0 8px 0', lineHeight: 1.5, fontWeight: 600 }}>
          PowerShell example to set a specific model:
        </p>
        <div style={codeBlockStyle}>
          <span>$env:BTL_MODEL = "claude-sonnet-4-6"</span>
          <CopyButton text={'$env:BTL_MODEL = "claude-sonnet-4-6"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache analyze .</span>
          <CopyButton text="npx critcache analyze ." />
        </div>

        {/* Sub-section: stats */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>stats</h3>
        <div style={codeBlockStyle}>
          <span>$env:GATEWAY_API_KEY = "your_btl_key"</span>
          <CopyButton text={'$env:GATEWAY_API_KEY = "your_btl_key"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache stats</span>
          <CopyButton text="npx critcache stats" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Shows cumulative spend and savings across all critcache runs in your BTL Runtime workspace — total requests, benchmark cost, cached input tokens, cache hit rate, and current per-token pricing for every model at your BTL Runtime tier. Pulls live data from both GET /v1/usage/summary and GET /v1/account/pricing.
        </p>

        {/* Sub-section: providers */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>providers</h3>
        <div style={codeBlockStyle}>
          <span>$env:GATEWAY_API_KEY = "your_btl_key"</span>
          <CopyButton text={'$env:GATEWAY_API_KEY = "your_btl_key"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache providers</span>
          <CopyButton text="npx critcache providers" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Shows the health and routing status of all providers connected to BTL Runtime — OpenAI, Anthropic, DeepSeek, OpenRouter, Fireworks, Google AI Studio and more. BTL Runtime automatically routes each request to the cheapest healthy provider. Use as a pre-flight check before running analysis to confirm your preferred providers are healthy.
        </p>

        {/* Sub-section: coach */}
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '16px', margin: '48px 0 16px 0' }}>coach</h3>
        <div style={codeBlockStyle}>
          <span>$env:CRITCACHE_MOCK = "1"</span>
          <CopyButton text={'$env:CRITCACHE_MOCK = "1"'} />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache coach</span>
          <CopyButton text="npx critcache coach" />
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', margin: '16px 0 0 0', lineHeight: 1.6 }}>
          Scores your prompt architecture for BTL Runtime cacheability (0–100). Shows concrete findings about what is helping or hurting your cache hit rate, specific recommendations to improve it, and an estimated cache hit rate after improvements. Uses BTL Runtime itself to reason about your own prompt architecture — the only tool that coaches you on your BTL Runtime caching strategy.
        </p>

        {/* ── Section 5a: SARIF output ── */}
        <h2 style={sectionHeadingStyle}>SARIF output</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
          Add <code style={{ color: '#39FF6A' }}>--sarif</code> to any analysis command to write a SARIF v2.1 report alongside the markdown report. SARIF is the standard format consumed natively by GitHub Code Scanning, VS Code, GitLab, and Azure DevOps.
        </p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '14px', margin: '0 0 12px 0' }}>
          PowerShell:
        </p>
        <div style={codeBlockStyle}>
          <span>npx critcache analyze . --sarif</span>
          <CopyButton text="npx critcache analyze . --sarif" />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache review-pr . main --sarif</span>
          <CopyButton text="npx critcache review-pr . main --sarif" />
        </div>
        <div style={{ ...codeBlockStyle, marginTop: '8px' }}>
          <span>npx critcache watch . --sarif</span>
          <CopyButton text="npx critcache watch . --sarif" />
        </div>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '14px', margin: '24px 0 12px 0' }}>
          GitHub Actions CI example:
        </p>
        <div style={{ ...codeBlockStyle, flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
          <pre style={{ margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#39FF6A', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{`- name: Run critcache
  run: npx critcache review-pr . main --sarif
  env:
    GATEWAY_API_KEY: \${{ secrets.BTL_KEY }}

- name: Upload to Code Scanning
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: critcache-pr-report.sarif`}</pre>
          <CopyButton text="- name: Run critcache\n  run: npx critcache review-pr . main --sarif\n  env:\n    GATEWAY_API_KEY: \${{ secrets.BTL_KEY }}\n\n- name: Upload to Code Scanning\n  uses: github/codeql-action/upload-sarif@v3\n  with:\n    sarif_file: critcache-pr-report.sarif" />
        </div>

        {/* ── Section 5b: Custom review rules ── */}
        <h2 style={sectionHeadingStyle}>Custom review rules</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
          Create a <code style={{ color: '#39FF6A' }}>.critcacherules</code> file in your repo root to focus analysis on what matters to your team:
        </p>
        <div style={{ ...codeBlockStyle, flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
          <pre style={{ margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#9BA39C', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{`# Security
- Flag hardcoded credentials, API keys, or tokens
- Check for SQL injection vulnerabilities in raw queries

# Performance
- Look for N+1 query patterns in database calls
- Flag synchronous operations in async contexts

# Team standards
- This is a financial application — treat any unvalidated input as high severity`}</pre>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '14px', margin: '16px 0 48px 0', lineHeight: 1.6, fontStyle: 'italic' }}>
          Rules are appended to the fixed system prompt and hashed into the prompt fingerprint. Changing your rules file shows as a fingerprint change and correctly busts the BTL Runtime cache — ensuring fresh analysis that reflects your updated standards.
        </p>

        {/* ── Section 5c: Prompt fingerprints ── */}
        <h2 style={sectionHeadingStyle}>Prompt fingerprints</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
          Every analyze, compare, review-pr, and watch run prints a prompt fingerprint box showing the hash of the four cache-determining components — system prompt, schema, model, and temperature. If any of these change between runs, critcache warns you immediately and tells you which component changed.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
          This is the "git blame for cache misses" — instead of wondering why your cache hit rate dropped, critcache tells you exactly what changed and broke it.
        </p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '14px', margin: '24px 0 12px 0' }}>
          Example output when cache is stable:
        </p>
        <div style={{ ...codeBlockStyle, flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
          <pre style={{ margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#9BA39C', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{`┌─ Prompt Fingerprint ─────────────────────────────┐
│ system       3a16f7a  ✓ stable
│ schema       3a16f7a  ✓ stable
│ model        deepseek-chat-v3  ✓ stable
│ temperature  0  ✓ stable
│ rules        e825f7a  active
│ overall      617bc23  ✓ cache-friendly
│ last run     just now
└───────────────────────────────────────────────────┘
  ✓ Prompt unchanged — BTL Runtime cache should warm normally.`}</pre>
        </div>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8EDE9', fontSize: '14px', margin: '32px 0 12px 0' }}>
          Example output when cache is busted:
        </p>
        <div style={{ ...codeBlockStyle, flexDirection: 'column', alignItems: 'stretch', gap: '4px' }}>
          <pre style={{ margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#E8EDE9', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{`│ model        btl-2 → deepseek-chat-v3  ⚠ changed
│ overall      ce7d994  ✗ cache busted
⚠ Prompt fingerprint changed since last run.
  Changed: model
  Expect cache misses until the prompt stabilizes.`}</pre>
        </div>

        {/* ── Section 6: Environment variables ── */}
        <h2 style={sectionHeadingStyle}>Environment variables</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#0F1410' }}>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Variable</th>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Required</th>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Default</th>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['GATEWAY_API_KEY', 'Yes*', '—', 'Your BTL Runtime API key'],
              ['BTL_BASE_URL', 'No', 'https://api.badtheorylabs.com/v1', 'BTL Runtime base URL'],
              ['BTL_MODEL', 'No', 'btl-2', 'Model to use for analysis'],
              ['CRITCACHE_MOCK', 'No', '—', 'Set to 1 to enable mock mode (no key needed)'],
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#0B0E0C' : '#0F1410' }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: '10px 12px', color: '#9BA39C', border: '1px solid #1C2420' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '13px', fontStyle: 'italic', margin: '8px 0 12px 0', lineHeight: 1.4 }}>
          * Not required when CRITCACHE_MOCK=1 is set.
        </p>
        <div style={{ background: '#0F1410', borderRadius: '12px', padding: '16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#39FF6A', lineHeight: 2, marginBottom: '48px', border: '1px solid #1C2420' }}>
          <div style={{ color: '#9BA39C', fontSize: '12px', marginBottom: '4px' }}># Windows PowerShell — set env vars before running</div>
          $env:GATEWAY_API_KEY = "your_btl_key"<br />
          $env:BTL_MODEL = "btl-2"<br />
          $env:CRITCACHE_MOCK = "1"&nbsp;&nbsp;# mock mode, no key needed
        </div>

        {/* ── Section 6: How BTL Runtime caching works ── */}
        <h2 style={sectionHeadingStyle}>How BTL Runtime caching works</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
          BTL Runtime is the engine. critcache is the dashboard.
          <br /><br />
          Every time your AI app makes a request, BTL Runtime knows: did this response come from cache? How much faster was it? Those details are buried in response headers most developers never look at. critcache makes them visible — per call, live in your terminal.
          <br /><br />
          critcache sends every file through the same fixed system prompt and JSON schema. This is an explicit architectural decision: keeping the instruction scaffolding byte-identical across every call is what makes BTL Runtime's exact and prefix caching fire reliably.
          <br /><br />
          On the first run, calls take 4-5 seconds and are cache misses. On subsequent runs, the same prompt hits BTL's cache and returns in under 1 second — a 6x speed improvement. Run compare to see this happen live on your own repo.
          <br /><br />
          BTL Runtime's savings mechanisms that critcache exposes:
          <br />
          - Exact response cache — identical requests served instantly
          <br />
          - Provider prompt cache — prefix reuse at the upstream level
          <br />
          - Request compaction — history compressed before hitting the provider
          <br />
          - Output budget shaping — runaway completions capped automatically
          <br /><br />
          Every response includes headers critcache reads live:
        </p>
        <div style={{
          background: '#0F1410',
          borderRadius: '12px',
          padding: '16px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
          color: '#39FF6A',
          lineHeight: 2,
        }}>
          x-btl-cache-tier       — cache status per call<br />
          x-btl-benchmark-cost   — what you would have paid without caching<br />
          x-btl-customer-charge  — what you actually paid<br />
          x-btl-saved            — the difference, per call
        </div>

        {/* ── Section 7: BTL Runtime endpoints used ── */}
        <h2 style={sectionHeadingStyle}>BTL Runtime endpoints used</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px 0' }}>
          critcache uses 5 confirmed BTL Runtime API endpoints:
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#0F1410' }}>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Endpoint</th>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Command</th>
              <th style={{ padding: '10px 12px', color: '#E8EDE9', textAlign: 'left', border: '1px solid #1C2420', fontWeight: 600 }}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['POST /v1/chat/completions', 'analyze, compare, review-pr, watch, coach', 'Per-file AI code review, repo synthesis, cache coach reasoning'],
              ['GET /v1/models', 'models', 'Lists all available model slugs across 200+ providers'],
              ['GET /v1/usage/summary', 'stats', 'Cumulative workspace spend, savings, and cache hit breakdown'],
              ['GET /v1/account/pricing', 'stats', 'Current per-token pricing for all models at your BTL Runtime tier'],
              ['GET /v1/providers', 'providers', 'Health and routing status of all connected providers'],
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#0B0E0C' : '#0F1410' }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: '10px 12px', color: '#9BA39C', border: '1px solid #1C2420' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9BA39C', fontSize: '15px', lineHeight: 1.7, margin: '24px 0 12px 0' }}>
          BTL Runtime savings mechanisms confirmed active in this workspace:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 48px 0' }}>
          {[
            'Exact response cache — 22 hits confirmed, serving repeated file analyses in under 1 second vs 8+ seconds cold',
            'Provider prompt cache — prefix reuse at the upstream provider level',
            'Request compaction — conversation history compressed before hitting the provider',
            'Output budget shaping — runaway completions capped automatically',
            'Smart routing — automatically routes to cheapest healthy provider per request',
          ].map((item, i) => (
            <li key={i} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#9BA39C', lineHeight: 1.8 }}>
              <span style={{ color: '#39FF6A', marginRight: '8px' }}>›</span>
              {item}
            </li>
          ))}
        </ul>

        {/* ── Bottom CTA ── */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#9BA39C', fontSize: '14px', margin: '0 0 20px 0', lineHeight: 1.5 }}>
            Ready to run it?
          </p>
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
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#9BA39C' }}># No key needed — try it now</span>
          </div>
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
              maxWidth: '460px',
              margin: '8px auto',
            }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#39FF6A', fontWeight: 600 }}>
              $env:CRITCACHE_MOCK = "1"
            </span>
            <CopyButton text={'$env:CRITCACHE_MOCK = "1"'} />
          </div>
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
              maxWidth: '460px',
              margin: '0 auto 16px auto',
            }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#39FF6A', fontWeight: 600 }}>
              npx critcache compare .
            </span>
            <CopyButton text="npx critcache compare ." />
          </div>
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
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#9BA39C' }}># Full experience</span>
          </div>
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
              maxWidth: '460px',
              margin: '8px auto',
            }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#39FF6A', fontWeight: 600 }}>
              $env:GATEWAY_API_KEY = "your_btl_key"
            </span>
            <CopyButton text={'$env:GATEWAY_API_KEY = "your_btl_key"'} />
          </div>
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
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#39FF6A', fontWeight: 600 }}>
              npx critcache compare .
            </span>
            <CopyButton text="npx critcache compare ." />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
            <a
              href="https://www.npmjs.com/package/critcache"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#9BA39C',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 200ms',
              }}
              onMouseEnter={e => e.target.style.color = '#39FF6A'}
              onMouseLeave={e => e.target.style.color = '#9BA39C'}
            >
              view on npm
            </a>
            <a
              href="https://github.com/DiverseXL/critcache"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#9BA39C',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 200ms',
              }}
              onMouseEnter={e => e.target.style.color = '#39FF6A'}
              onMouseLeave={e => e.target.style.color = '#9BA39C'}
            >
              view on github
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Docs
