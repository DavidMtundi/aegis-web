export default function TrustStrip() {
  const items = [
    {
      title: 'Append-only audit trail',
      body: 'Every decision, rule change, and investigation action is retained with who, what, and when.',
    },
    {
      title: 'Compliance-owned policy',
      body: 'Rules are versioned configurations — not buried in application code only engineers can change.',
    },
    {
      title: 'Explainable by design',
      body: 'Alerts ship with the rule, measured values, and linked transactions for regulator-ready notes.',
    },
    {
      title: 'Strict tenant isolation',
      body: 'Multi-entity groups stay separated — one platform without data bleed across institutions.',
    },
  ]

  return (
    <section className="section-tight bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div className="max-w-xl">
            <p className="eyebrow">Built for confidence</p>
            <h2 className="heading-lg !mb-0">Security and governance that hold up under review</h2>
          </div>
          <p className="text-[15px] text-[var(--text-muted)] max-w-sm leading-relaxed md:text-right">
            Trust signals grounded in how Aegis runs AML — not borrowed badge walls.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {items.map((item) => (
            <div key={item.title} className="bg-[var(--surface)] pad-panel-sm">
              <div className="h-1.5 w-8 rounded-full bg-[var(--brand)] mb-5" aria-hidden />
              <h3 className="text-[16px] font-semibold text-[var(--text)] mb-2.5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
