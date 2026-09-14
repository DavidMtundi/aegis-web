import Link from 'next/link'
import type { ReactNode } from 'react'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type Props = {
  eyebrow: string
  title: string
  description: string
  secondaryCta: { href: string; label: string }
  children: ReactNode
}

export default function SimpleContentPage({
  eyebrow,
  title,
  description,
  secondaryCta,
  children,
}: Props) {
  return (
    <div className="pt-[72px]">
      <section className="relative overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 ledger-rules pointer-events-none" />
        <div className="container-x relative section !pb-14 !pt-14 md:!pt-20 md:!pb-16">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-display max-w-3xl mb-6">{title}</h1>
          <p className="body-lg max-w-2xl mb-0 !pb-12 md:!pb-14">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
            <Link href="/#contact" className="btn-primary w-full sm:w-auto justify-center">
              Request access <ArrowIcon />
            </Link>
            <Link href={secondaryCta.href} className="btn-secondary w-full sm:w-auto justify-center">
              {secondaryCta.label} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {children}

      <section className="section bg-[var(--bg-soft)]">
        <div className="container-x">
          <div className="stage-frame pad-panel flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Request access</p>
              <h2 className="heading-lg mb-3">Talk through your compliance programme with our team</h2>
              <p className="body-lg mb-0">Compliance-first conversations — no generic sales pitch.</p>
            </div>
            <Link href="/#contact" className="btn-primary w-full justify-center shrink-0 md:w-auto">
              Request access <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
