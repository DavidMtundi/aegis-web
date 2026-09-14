export default function GovernanceSection() {
  return (
    <section className="section bg-[var(--surface)]">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="eyebrow">Governance</p>
          <h2 className="heading-lg mb-5">
            Built for intelligence. Governed by compliance.
          </h2>
          <p className="body-lg">
            Aegis separates suggestion from enforcement. Patterns can be proposed. Only approved
            policy becomes active control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            {
              title: 'Deterministic rules',
              body: 'Explainable baseline detection that regulators expect and investigators can defend.',
            },
            {
              title: 'Human approval',
              body: 'No model or automation changes production policy without compliance sign-off.',
            },
            {
              title: 'Enforced by Aegis',
              body: 'Once approved, policy executes consistently across tenants with a full audit trail.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[16px] border border-[var(--border)] bg-[var(--bg-soft)] p-7 text-center">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl md:text-2xl font-semibold tracking-tight text-[var(--text)]">
          AI proposes. Compliance approves. Aegis enforces.
        </p>
      </div>
    </section>
  )
}
