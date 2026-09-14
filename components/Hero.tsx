'use client'

import { useEffect, useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatusPill({
  label,
  tone,
}: {
  label: string
  tone: 'approved' | 'review' | 'pending'
}) {
  const styles = {
    approved: 'bg-emerald-50 text-emerald-700',
    review: 'bg-amber-50 text-amber-800',
    pending: 'bg-violet-50 text-violet-700',
  }[tone]

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold ${styles}`}>
      {tone === 'approved' && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {label}
    </span>
  )
}

function MonitoringSlide() {
  const rows = [
    { score: 92, entity: 'Apex Logistics Ltd', status: 'review' as const, statusLabel: 'Under review', type: 'RTGS', amount: 'KES 1.45M' },
    { score: 18, entity: 'Grace Wanjiku', status: 'approved' as const, statusLabel: 'Cleared', type: 'M-Pesa', amount: 'KES 12,400' },
    { score: 76, entity: 'Serenity Holdings', status: 'pending' as const, statusLabel: 'Awaiting evidence', type: 'SWIFT', amount: 'USD 48,200' },
  ]

  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-3">
        <div className="text-sm font-semibold text-[var(--text)]">Live monitoring</div>
        <div className="text-[11px] font-medium text-[var(--text-dim)] tabular-nums shrink-0">Updated 2s ago</div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--bg)]">
        <div className="min-w-[480px]">
          <div className="hero-table-row grid grid-cols-[48px_1.5fr_1.1fr_0.7fr_0.9fr] gap-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-dim)] border-b border-[var(--border)]">
            <span>Score</span>
            <span>Entity</span>
            <span>Status</span>
            <span>Rail</span>
            <span>Amount</span>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {rows.map((row) => (
              <div
                key={row.entity}
                className="hero-table-row grid grid-cols-[48px_1.5fr_1.1fr_0.7fr_0.9fr] gap-2 items-center text-[13px] text-[var(--text-muted)]"
              >
                <span
                  className={`font-bold tabular-nums text-[14px] ${
                    row.score >= 70 ? 'text-red-600' : row.score >= 40 ? 'text-amber-600' : 'text-emerald-600'
                  }`}
                >
                  {row.score}
                </span>
                <span className="font-semibold text-[var(--text)] truncate">{row.entity}</span>
                <StatusPill label={row.statusLabel} tone={row.status} />
                <span>{row.type}</span>
                <span className="font-semibold tabular-nums text-[var(--text)]">{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AlertSlide() {
  return (
    <div>
      <div className="mb-6 text-sm font-semibold text-[var(--text)]">Explainable alert</div>
      <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] hero-alert-panel">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="min-w-0">
            <div className="text-xs font-mono text-[var(--brand)] mb-2">ALT-9804</div>
            <h4 className="text-lg font-bold text-[var(--text)] leading-snug">Rapid Movement of Funds</h4>
            <p className="text-sm text-[var(--text-muted)] mt-2">Apex Logistics Ltd</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[10px] uppercase tracking-wide text-[var(--text-dim)] mb-1.5">Risk</div>
            <div className="text-3xl font-bold tabular-nums text-red-600 leading-none">92</div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Credit', value: 'KES 1.45M ≥ 500k' },
            { label: 'Debit', value: 'KES 1.32M ≥ 400k' },
            { label: 'Count', value: '17 ≥ 5 in lookback' },
          ].map((item) => (
            <div
              key={item.label}
              className="hero-condition-row flex items-center gap-3 rounded-xl bg-white border border-[var(--border)]"
            >
              <span className="shrink-0 text-emerald-600 font-bold text-sm">✓</span>
              <span className="text-[13px] font-semibold text-[var(--text-dim)] shrink-0">{item.label}</span>
              <span className="hero-condition-value ml-auto text-right text-[13px] font-medium text-[var(--text)] leading-snug pl-3">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CaseSlide() {
  return (
    <div>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-[var(--text-dim)]">Open case</div>
          <div className="text-2xl font-bold text-[var(--text)] mt-2 tracking-tight">CAS-8821</div>
        </div>
        <StatusPill label="In investigation" tone="review" />
      </div>

      <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8 pb-8 border-b border-[var(--border)]">
        {[
          { label: 'Linked alerts', value: '2' },
          { label: 'Risk score', value: '92', accent: true },
          { label: 'Owner', value: 'MLRO' },
        ].map((item) => (
          <div key={item.label}>
            <div className="text-[11px] uppercase tracking-wide text-[var(--text-dim)] mb-2">{item.label}</div>
            <div className={`text-xl font-semibold tabular-nums ${item.accent ? 'text-red-600' : 'text-[var(--text)]'}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <ul className="space-y-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[var(--brand)] mt-0.5">•</span>
          <span>Velocity rule correlated with screening hit</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[var(--brand)] mt-0.5">•</span>
          <span>Decision pending MLRO sign-off</span>
        </li>
      </ul>
    </div>
  )
}

const slideMeta = [
  { id: 'monitor', label: 'Monitoring' },
  { id: 'alert', label: 'Alerts' },
  { id: 'case', label: 'Cases' },
] as const

function ProductCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideMeta.length)
    }, 6200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="relative w-full max-w-[560px] ml-auto">
      <div className="stage-frame relative pad-panel min-h-[400px] flex flex-col">
        <div className="flex-1 transition-opacity duration-300">
          {index === 0 && <MonitoringSlide />}
          {index === 1 && <AlertSlide />}
          {index === 2 && <CaseSlide />}
        </div>
        <div className="mt-8 flex items-center justify-between gap-3 pt-6 border-t border-[var(--border)]">
          <div className="flex items-center gap-1">
            {slideMeta.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.label}`}
                onClick={() => setIndex(i)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full"
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-[var(--brand)]' : 'w-1.5 bg-[var(--border-strong)]'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setIndex((i) => (i - 1 + slideMeta.length) % slideMeta.length)}
              className="h-11 w-11 rounded-full border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg)] text-lg"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setIndex((i) => (i + 1) % slideMeta.length)}
              className="h-11 w-11 rounded-full border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg)] text-lg"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-[72px] overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 ledger-rules opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_at_75%_0%,rgba(43,99,241,0.05),transparent_55%)] pointer-events-none" />

      <div className="container-x relative section !pb-20 !pt-16 md:!pt-24 md:!pb-28">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-14 xl:gap-20 items-center">
          <div className="max-w-xl">
            <div className="pill fade-up mb-8">AML monitoring · Kenya & Africa</div>

            <h1 className="heading-xl mb-8 text-[var(--text)] !leading-[1.15]">
              Monitor mobile money, cards and banking rails — without drowning in{' '}
              <span className="text-[var(--text-muted)]">false positives.</span>
            </h1>

            <p className="body-lg mb-0 max-w-md !pb-12 md:!pb-14 !leading-relaxed">
              AML monitoring and case investigation for banks, SACCOs and fintechs across Kenya and
              Africa. Compliance owns the rules. Every decision leaves a trail you can defend.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none !mt-0">
              <a href="#contact" className="btn-primary !rounded-xl w-full sm:w-auto justify-center">
                Request access <ArrowIcon />
              </a>
              <a href="/platform/transaction-monitoring" className="btn-secondary !rounded-xl w-full sm:w-auto justify-center">
                See the platform <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="min-w-0 relative z-10">
            <ProductCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
