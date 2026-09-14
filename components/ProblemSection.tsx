export default function ProblemSection() {
  const pipeline = [
    {
      title: 'Onboarding & screening',
      body: 'KYC/KYB and watchlist checks set the baseline so monitoring judges activity against what you already know.',
    },
    {
      title: 'Risk evaluation & ongoing monitoring',
      body: 'Scores refresh as transactions and behaviour change — not just at onboarding.',
    },
    {
      title: 'Alerts & case creation',
      body: 'Suspicious patterns raise explainable alerts and can promote straight into investigation workflows.',
    },
    {
      title: 'Investigation & reporting',
      body: 'Evidence, decisions and rationale stay recorded for auditors, MLROs and regulators.',
    },
  ]

  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow">Control framework</p>
          <h2 className="heading-lg mb-5">
            Minimize risk and adapt as regulations evolve
          </h2>
          <p className="body-lg">
            Aegis keeps detection, investigation and auditability in one loop — so policy changes
            stay fast without sacrificing defensibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {pipeline.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-[16px] border border-[var(--border)] bg-white p-6 md:p-7 shadow-[var(--shadow-card)]"
            >
              <div className="text-sm font-bold text-[var(--brand)] mb-3">0{idx + 1}</div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{item.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
