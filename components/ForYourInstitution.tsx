import Link from 'next/link'

export default function ForYourInstitution() {
  const segments = [
    {
      label: 'Banks',
      href: '/solutions/banks',
      body: 'High-volume monitoring for Kenyan and regional banking groups — configurable policy, tenant isolation, and migration from legacy monitors.',
      points: ['ISO 20022-ready ingestion', 'Strict tenant isolation', 'On-prem or private cloud'],
    },
    {
      label: 'SACCOs',
      href: '/solutions/saccos',
      body: 'Right-sized AML for member institutions — typology templates, clear queues, and an audit trail that stands up to supervision.',
      points: ['Pre-built scenario packs', 'Tune to member behaviour', 'Lean compliance teams'],
    },
    {
      label: 'Fintechs & payments',
      href: '/solutions/fintechs',
      body: 'API-first monitoring for wallets, lenders and payment apps — keep product velocity without a second compliance stack.',
      points: ['REST APIs & webhooks', 'Mobile money ready', 'Sandbox before go-live'],
    },
  ]

  return (
    <section id="solutions" className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="section-intro max-w-2xl">
          <p className="eyebrow">Solutions</p>
          <h2 className="heading-lg">Built for how finance actually works in Kenya and Africa</h2>
          <p className="body-lg">
            One platform, strict isolation — whether you run a bank, a SACCO, or a high-growth
            payments product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {segments.map((seg) => (
            <Link
              key={seg.label}
              href={seg.href}
              className="bg-white pad-panel block hover:bg-[var(--bg)] transition-colors"
            >
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--brand)] mb-4">
                {seg.label}
              </div>
              <p className="text-[var(--text-muted)] mb-7 leading-relaxed text-[15px]">{seg.body}</p>
              <ul className="space-y-3">
                {seg.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-[14px] text-[var(--text)]">
                    <span className="h-1 w-1 rounded-full bg-[var(--brand)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
