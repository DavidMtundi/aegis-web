'use client'

import { useState } from 'react'

const tabs = [
  {
    id: 'rules',
    label: 'Rule engine',
    title: 'Rule bundles for every scenario',
    summary:
      'Start from typology-ready scenarios — structuring, rapid movement, dormancy, sanctions adjacency — then tune KES thresholds and lookbacks to your risk appetite.',
    points: [
      'Declarative rules owned by compliance, not buried in application code',
      'Versioned drafts with analyst → manager approval before activation',
      'Backtest against historical mobile money and banking traffic before go-live',
      'KYC/KYB and screening context available at evaluation time',
    ],
    panel: 'rules',
  },
  {
    id: 'alerts',
    label: 'Explainable alerts',
    title: 'Alerts that explain themselves',
    summary:
      'When a rule fires, investigators see the satisfied conditions, measured values, and linked transactions — ready for case notes and regulatory scrutiny.',
    points: [
      'Evidence graph attached to every alert',
      'Severity and risk scoring derived from policy, not a black box',
      'Suppress, escalate, or promote to case without leaving context',
      'Prioritized queues for high-volume monitoring desks',
    ],
    panel: 'alerts',
  },
  {
    id: 'cases',
    label: 'Case management',
    title: 'One place to investigate and decide',
    summary:
      'Correlate alerts into cases, review Customer 360 context, and record every action in an append-only audit log.',
    points: [
      'Case workflows built for investigation teams',
      'Customer and entity risk history in one view',
      'Exportable decision rationale for audits and STR packages',
      'Network relationships across entities and counterparties',
    ],
    panel: 'cases',
  },
] as const

function RulesPanel() {
  return (
    <div className="bg-[#0f1117] h-full min-h-[320px] sm:min-h-[380px] flex flex-col min-w-0">
      <div className="px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 flex items-center justify-between gap-3 border-b border-white/10 min-w-0">
        <span className="font-mono text-[11px] sm:text-[12px] text-zinc-400 tracking-wide truncate">
          RAPID_MOVEMENT_001.json
        </span>
        <span className="rounded-full bg-emerald-500/15 text-emerald-400 px-3 py-1 text-[10px] font-sans font-bold tracking-wide shrink-0">
          ACTIVE
        </span>
      </div>
      <div className="flex-1 px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-9 lg:px-12 lg:py-10 overflow-x-auto min-w-0">
        <pre className="font-mono text-[12px] sm:text-[13px] leading-[1.7] text-zinc-300 whitespace-pre">{`{
  "code": "RAPID_MOVEMENT_001",
  "name": "Rapid Movement of Funds",
  "focus": "ACCOUNT",
  "schedule": { "frequency": "7d", "lookback": "14d" },
  "conditions": {
    "all": [
      { "field": "credit_amount", "op": ">=", "value": 500000 },
      { "field": "debit_amount", "op": ">=", "value": 400000 },
      { "field": "transaction_count", "op": ">=", "value": 5 }
    ]
  },
  "severity": "HIGH"
}`}</pre>
      </div>
    </div>
  )
}

function AlertsPanel() {
  return (
    <div className="bg-[var(--bg)] h-full min-h-[320px] sm:min-h-[380px] px-6 py-7 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 min-w-0">
      <div className="flex items-start justify-between gap-4 mb-7 min-w-0">
        <div className="min-w-0">
          <div className="text-xs font-mono text-[var(--brand)] mb-2 break-all sm:break-normal">ALT-9804 · RAPID_MOVEMENT_001</div>
          <h4 className="text-lg font-bold text-[var(--text)]">Rapid Movement of Funds</h4>
          <p className="text-[14px] text-[var(--text-muted)] mt-2">Focal entity: Apex Logistics Ltd</p>
        </div>
        <span className="rounded-full bg-red-50 text-red-700 text-xs font-bold px-3 py-1.5 shrink-0">HIGH</span>
      </div>
      <div className="space-y-3.5">
        {[
          'credit_amount KES 1,450,000 ≥ 500,000',
          'debit_amount KES 1,320,000 ≥ 400,000',
          'transaction_count 17 ≥ 5',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3.5 text-[14px] border border-[var(--border)]">
            <span className="text-emerald-600 font-bold mt-0.5">✓</span>
            <span className="text-[var(--text)]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CasesPanel() {
  return (
    <div className="bg-[var(--bg)] h-full min-h-[320px] sm:min-h-[380px] px-6 py-7 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-[var(--text-dim)]">Open case</div>
          <div className="text-xl font-bold text-[var(--text)] mt-1.5">CAS-8821</div>
        </div>
        <span className="rounded-full bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1.5">
          In investigation
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3.5 mb-7">
        <div className="rounded-xl bg-white border border-[var(--border)] px-4 py-3.5">
          <div className="text-[11px] uppercase tracking-wide text-[var(--text-dim)] mb-1.5">Linked alerts</div>
          <div className="font-semibold text-[var(--text)] text-lg">2</div>
        </div>
        <div className="rounded-xl bg-white border border-[var(--border)] px-4 py-3.5">
          <div className="text-[11px] uppercase tracking-wide text-[var(--text-dim)] mb-1.5">Risk score</div>
          <div className="font-semibold text-red-600 text-lg">92 / 100</div>
        </div>
      </div>
      <ul className="space-y-3 text-[14px] text-[var(--text-muted)] leading-relaxed">
        <li>• Screening hit correlated with velocity rule</li>
        <li>• UBO network reviewed against watchlists</li>
        <li>• Decision pending MLRO sign-off</li>
      </ul>
    </div>
  )
}

export default function FeatureTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('rules')
  const current = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <section id="platform" className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="section-intro max-w-2xl">
          <p className="eyebrow">Platform</p>
          <h2 className="heading-lg">Detection, investigation and governance in one AML control loop</h2>
          <p className="body-lg">
            Aegis connects rules, alerts and cases so Kenyan and African compliance teams can change
            policy quickly, investigate with evidence, and keep a trail for supervisory review.
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3 border-b border-[var(--border-strong)] overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`relative px-4 sm:px-5 py-4 sm:py-5 text-[15px] sm:text-base font-semibold whitespace-nowrap transition-colors ${
                active === tab.id
                  ? 'text-[var(--brand)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute left-4 right-4 sm:left-5 sm:right-5 -bottom-px h-[2px] bg-[var(--brand)] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="stage-frame mt-0 rounded-t-none border-t-0 grid lg:grid-cols-2 overflow-hidden min-w-0">
          <div className="bg-white px-5 py-7 sm:px-7 sm:py-8 md:px-10 md:py-11 lg:px-12 lg:py-12 min-w-0">
            <h3 className="heading-md mb-4">{current.title}</h3>
            <p className="text-[var(--text-muted)] mb-8 md:mb-10 leading-relaxed text-[15px] md:text-base max-w-md">
              {current.summary}
            </p>
            <ul className="space-y-5">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-[var(--text)]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-[var(--border)] min-h-[320px] sm:min-h-[380px] min-w-0 overflow-hidden">
            {current.panel === 'rules' && <RulesPanel />}
            {current.panel === 'alerts' && <AlertsPanel />}
            {current.panel === 'cases' && <CasesPanel />}
          </div>
        </div>
      </div>
    </section>
  )
}
