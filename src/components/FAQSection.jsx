import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const faqs = [
  {
    question: 'What exactly is critcache?',
    answer: 'critcache is a CLI tool that fans out AI code review across your entire repository through BTL Runtime. It caches token patterns across review runs so you never pay twice for the same analysis, and it proves every dollar it saves you with live receipts.',
  },
  {
    question: 'How does BTL Runtime caching work?',
    answer: 'BTL Runtime warms local caches before compilation by identifying exact and prefix token matches across your codebase. When you re-run a review on the same repo, cached token mappings serve the result instantly — no redundant external API calls, no double billing.',
  },
  {
    question: 'What AI models does critcache support?',
    answer: 'critcache works with any LLM provider that exposes a standard chat completion API. Out of the box it supports OpenAI, Anthropic, and any OpenAI-compatible endpoint. The caching layer is model-agnostic, so you can switch providers without losing your warm cache.',
  },
  {
    question: 'Is critcache open source?',
    answer: 'Yes. critcache is MIT-licensed and fully open source. You can inspect the code, contribute, fork it, or self-host the entire stack. No subscriptions, no hidden tiers — just a CLI that ships on npm.',
  },
  {
    question: 'Does it work in CI/CD pipelines?',
    answer: 'Absolutely. critcache is designed to run in any environment where Node.js is available. Drop it into your GitHub Actions, GitLab CI, or Jenkins pipeline and it will cache intelligently across runs — even across different branches with shared history.',
  },
  {
    question: 'How do I get started?',
    answer: 'Run `npx critcache analyze` in your project directory. The CLI will scan your repo, warm the BTL cache, and produce a full token-efficiency report. No install, no setup — just one command and you\'ll see exactly where you\'re saving.',
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 300ms ease',
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div
      style={{
        borderBottom: index < faqs.length - 1 ? '1px solid rgba(57, 255, 106, 0.08)' : 'none',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          color: open ? '#E8EDE9' : '#9BA39C',
          transition: 'color 200ms ease',
        }}
      >
        <span
          style={{
            fontFamily: "'Pixelbasel', monospace",
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.4,
            letterSpacing: '0.01em',
          }}
        >
          {faq.question}
        </span>
        <span
          style={{
            color: open ? '#39FF6A' : '#5C5850',
            transition: 'color 200ms ease',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ChevronIcon open={open} />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          maxHeight: open ? '300px' : '0px',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 350ms ease, opacity 300ms ease, padding 300ms ease',
          paddingTop: open ? '0' : '0',
          paddingBottom: open ? '20px' : '0',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            lineHeight: 1.7,
            color: '#9BA39C',
            margin: 0,
            maxWidth: '680px',
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

function FAQSection() {
  return (
    <section
      style={{
        background: '#080B0A',
        padding: '100px 24px',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.10)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>          {/* Eyebrow */}
        <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#39FF6A',
              fontSize: '13px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Questions?
          </span>
          <h2
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#E8EDE9',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Frequently asked questions
          </h2>
        </div>
        </Reveal>

        {/* Glassmorphism card containing the FAQ accordion */}
        <Reveal delay={200}>
        <div
          style={{
            background: 'rgba(8, 11, 10, 0.18)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(57, 255, 106, 0.12)',
            borderRadius: '16px',
            padding: '8px 32px',
            boxShadow: [
              '0 8px 32px rgba(0, 0, 0, 0.4)',
              'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
            ].join(', '),
          }}
        >
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
        </Reveal>

        {/* Bottom CTA hint */}
        <p
          style={{
            marginTop: '36px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#5C5850',
            lineHeight: 1.6,
          }}
        >
          Still have questions?{' '}
          <Link
            to="/docs"
            style={{
              color: '#39FF6A',
              textDecoration: 'none',
              fontWeight: 500,
            }}
            className="hover:opacity-70 transition-opacity duration-150"
          >
            Check the docs
          </Link>
        </p>
      </div>
    </section>
  )
}

export default FAQSection
