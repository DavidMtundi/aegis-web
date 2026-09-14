export default function ProofStrip() {
  const proofs = [
    { value: 'Minutes', label: 'to change policy', detail: 'Thresholds update without an engineering release.' },
    { value: '100%', label: 'explainable alerts', detail: 'Rule, values, and transactions on every signal.' },
    { value: 'Full', label: 'decision trail', detail: 'Who decided, what changed, when — retained for review.' },
  ]

  return (
    <section className="section-tight bg-[var(--surface)]">
      <div className="container-x">
        <div className="stage-frame pad-panel">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 md:mb-10">
            <div className="max-w-xl">
              <p className="eyebrow">Operational proof</p>
              <h2 className="heading-lg !mb-0">Outcomes compliance teams can defend</h2>
            </div>
            <p className="text-[14px] text-[var(--text-dim)] max-w-sm leading-relaxed">
              Illustrative of how Aegis is designed to run — tune your own volumes in the impact
              calculator.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 border-t border-[var(--border)] pt-8">
            {proofs.map((item) => (
              <div key={item.label}>
                <div className="text-[1.85rem] md:text-[2.15rem] font-medium tracking-tight text-[var(--text)] tabular-nums mb-2 leading-none heading-display !text-[1.85rem] md:!text-[2.15rem]">
                  {item.value}
                </div>
                <div className="text-[15px] font-semibold text-[var(--text)] mb-2">{item.label}</div>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
