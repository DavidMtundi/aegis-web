'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Aegis gives us real-time visibility into high-risk activity with evidence attached. Investigators spend time on cases that matter — not reconstructing why an alert fired.',
    role: 'Financial Crime Team Lead',
    org: 'Digital bank · Kenya',
  },
  {
    quote:
      'Rules live with compliance, not engineering. We can tune thresholds, backtest impact, and activate with an approval trail our auditors understand.',
    role: 'Head of Compliance',
    org: 'Regional SACCO · East Africa',
  },
  {
    quote:
      'The difference is explainability. Every alert shows the rule, the values and the transactions — which makes case notes and regulatory responses far faster.',
    role: 'MLRO',
    org: 'Payments fintech · Kenya',
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="section-intro max-w-2xl">
          <p className="eyebrow">Customer voice</p>
          <h2 className="heading-lg">Why compliance desks in Kenya and Africa choose Aegis</h2>
          <p className="body-lg">
            Representative voices from banking, SACCO and fintech programmes — focused on mobile
            money scale, explainability and investigation speed.
          </p>
        </div>

        {/* Desktop: three cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <figure
              key={item.role}
              className="rounded-2xl border border-[var(--border)] bg-white pad-panel-sm flex flex-col"
            >
              <blockquote className="text-[17px] leading-[1.65] text-[var(--text)] flex-1">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="text-[15px] font-semibold text-[var(--text)]">{item.role}</div>
                <div className="text-[14px] text-[var(--text-dim)] mt-1">{item.org}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="lg:hidden">
          <blockquote className="rounded-2xl border border-[var(--border)] bg-white pad-panel">
            <p className="heading-display !text-[clamp(1.35rem,3.5vw,1.75rem)] !leading-[1.4]">
              “{current.quote}”
            </p>
            <footer className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-6 border-t border-[var(--border)]">
              <div>
                <div className="text-[15px] font-semibold text-[var(--text)]">{current.role}</div>
                <div className="text-[14px] text-[var(--text-dim)] mt-1.5">{current.org}</div>
              </div>
              <div className="flex items-center gap-0.5 -ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  >
                    <span
                      className={`h-2 rounded-full transition-all ${
                        i === index ? 'w-6 bg-[var(--brand)]' : 'w-2 bg-[var(--border-strong)]'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
