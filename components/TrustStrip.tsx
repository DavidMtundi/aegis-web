export default function TrustStrip() {
  const items = [
    {
      n: '01',
      title: 'Append-only audit trail',
      body: 'Who changed what, and when — retained for every review.',
    },
    {
      n: '02',
      title: 'Compliance-owned policy',
      body: 'Versioned rules your team owns — not buried in engineer-only code.',
    },
    {
      n: '03',
      title: 'Explainable by design',
      body: 'Rule, values, and linked transactions on every alert — ready for regulator notes.',
    },
    {
      n: '04',
      title: 'Strict tenant isolation',
      body: 'Bank, SACCO, or group entities stay separated — no data bleed.',
    },
  ]

  return (
    <section className="section-tight bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-0 !pb-12 md:!pb-14 lg:!pb-16">
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
            <div
              key={item.title}
              className="bg-[var(--surface)] !px-6 !pt-7 !pb-9 md:!px-8 md:!pt-8 md:!pb-11"
            >
              <span className="block text-[12px] font-semibold tracking-[0.14em] text-[var(--brand)] mb-5 tabular-nums">
                {item.n}
              </span>
              <h3 className="text-[17px] font-semibold text-[var(--text)] mb-3 tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-[var(--text-muted)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
