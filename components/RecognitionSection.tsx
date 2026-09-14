export default function RecognitionSection() {
  const items = [
    {
      title: 'Explainable by design',
      body: 'Every alert can answer why it fired — rule version, measured values and linked transactions.',
    },
    {
      title: 'Policy under human control',
      body: 'Compliance drafts, tests and approves rules. Nothing reaches production without sign-off.',
    },
    {
      title: 'Audit-ready trails',
      body: 'Immutable records of who decided, what changed, when it happened and why.',
    },
    {
      title: 'Multi-tenant isolation',
      body: 'Institutions share the platform with strict data boundaries enforced at the data-access layer.',
    },
  ]

  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow">Built for scrutiny</p>
          <h2 className="heading-lg mb-4">
            Compliance-grade monitoring that stays future-ready
          </h2>
          <p className="body-lg">
            Aegis is designed for the questions regulators and auditors actually ask — not just the
            throughput dashboards vendors like to show.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[16px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
