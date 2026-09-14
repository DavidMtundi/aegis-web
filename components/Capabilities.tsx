export default function Capabilities() {
  const features = [
    { title: 'KYC / KYB', desc: 'Customer and business verification with UBO mapping for investigators.' },
    { title: 'Sanctions & PEP screening', desc: 'Multi-source screening with normalized matches and clear disposition paths.' },
    { title: 'Risk scoring', desc: 'Dynamic customer and entity risk with a full history of score changes.' },
    { title: 'Transaction monitoring', desc: 'AML detection on normalized canonical transactions across channels.' },
    { title: 'AML rule engine', desc: 'Configurable, versioned, explainable rules owned by compliance.' },
    { title: 'Alert management', desc: 'Prioritized queues with evidence, severity and investigation actions.' },
    { title: 'Case management', desc: 'End-to-end investigation workflows with regulatory-ready trails.' },
    { title: 'Customer 360', desc: 'A single investigative view of identity, risk, alerts and relationships.' },
    { title: 'Network analysis', desc: 'Relationship mapping across entities, accounts and counterparties.' },
  ]

  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow">Capabilities</p>
          <h2 className="heading-lg mb-4">Everything compliance teams need</h2>
          <p className="body-lg">
            One platform covering onboarding risk, ongoing monitoring and investigation — without
            stitching together disconnected tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-[16px] border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)] transition-colors shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{feat.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
