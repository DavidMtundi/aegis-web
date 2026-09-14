import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const resources = [
  {
    type: 'Guide',
    title: 'How explainable AML alerts change investigation quality',
    meta: '8 min read',
    href: '/platform/explainable-alerts',
  },
  {
    type: 'Playbook',
    title: 'Tuning rules without engineering releases',
    meta: 'Practical checklist',
    href: '/platform/rule-engine',
  },
  {
    type: 'Overview',
    title: 'From transaction to case: the Aegis control loop',
    meta: 'Architecture walkthrough',
    href: '/how-it-works',
  },
]

export default function ResourcesSection() {
  return (
    <section id="resources" className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="section-intro max-w-2xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 md:mb-5">
            <p className="eyebrow !mb-0">Resources</p>
            <Link
              href="/faq"
              className="text-[14px] font-semibold text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors inline-flex items-center gap-1.5"
            >
              Browse FAQ <ArrowIcon />
            </Link>
          </div>
          <h2 className="heading-lg">Learn how modern monitoring should work</h2>
          <p className="body-lg">
            Short reads on explainable alerts, rule governance and the path from mobile money
            transaction to case — written for African compliance teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {resources.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white pad-panel flex flex-col min-h-[240px] hover:bg-[var(--bg)] transition-colors"
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--brand)] mb-5">
                {item.type}
              </div>
              <h3 className="text-[18px] font-semibold text-[var(--text)] leading-snug tracking-tight mb-4 group-hover:text-[var(--brand)] transition-colors">
                {item.title}
              </h3>
              <div className="mt-auto pt-8 flex items-center justify-between gap-3">
                <span className="text-[14px] text-[var(--text-dim)]">{item.meta}</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] group-hover:border-[var(--brand)] group-hover:text-[var(--brand)] transition-colors">
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
