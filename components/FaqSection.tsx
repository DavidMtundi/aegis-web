'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is Aegis?',
    a: 'Aegis is AML software for banks, SACCOs, fintechs and payments operators in Kenya and across Africa. It monitors transactions across channels (including mobile money), raises explainable alerts, supports case investigation, and keeps an audit trail of every rule change and decision.',
  },
  {
    q: 'How does Aegis monitor transactions for AML?',
    a: 'Transactions are ingested and normalised (for example mobile money, cards, P2P and core banking), enriched with customer and screening context, then evaluated by versioned rule configurations. Matching activity raises explainable alerts that can be investigated and escalated into cases.',
  },
  {
    q: 'Does Aegis support mobile money and local payment rails?',
    a: 'Yes. Aegis is built for multi-channel African payments — including mobile money — on one canonical transaction model, so the same rule and case workflows cover how value actually moves in the region.',
  },
  {
    q: 'Who owns AML rules in Aegis?',
    a: 'Compliance officers. Rules are declarative configurations with drafting, testing, approval and activation workflows — not application code that only engineers can change. Thresholds can be expressed in local currency such as KES.',
  },
  {
    q: 'Can investigators see why an alert fired?',
    a: 'Yes. Every alert includes the rule version, satisfied conditions, measured values and linked transactions so analysts can write decisions and STR-ready notes that hold up under review.',
  },
  {
    q: 'How does Aegis support audits and supervisors?',
    a: 'Decisions, rule changes and investigation actions are recorded in an append-only audit trail covering who, what, when, why, before and after — so your team can demonstrate process to internal audit and supervisory review (for example CBK / FRC expectations around traceability).',
  },
]

export default function FaqSection({ showIntro = true }: { showIntro?: boolean }) {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className={`section-tight bg-[var(--surface)] ${showIntro ? '' : '!pt-12 md:!pt-16'}`}>
      <div className="container-x max-w-3xl">
        {showIntro && (
          <div className="section-intro !mb-10">
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-lg !mb-0">Common questions</h2>
          </div>
        )}

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q} className="py-1">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[15px] md:text-base text-[var(--text)] pr-4 leading-snug">
                    {item.q}
                  </span>
                  <span className="text-[var(--text-dim)] text-xl leading-none shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-8 text-[var(--text-muted)] leading-relaxed text-[15px] max-w-2xl">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
