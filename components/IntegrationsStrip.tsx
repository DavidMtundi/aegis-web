export default function IntegrationsStrip() {
  const channels = [
    { label: 'ISO 20022', detail: 'Payment messages' },
    { label: 'Cards & P2P', detail: 'Retail rails' },
    { label: 'Mobile money', detail: 'M-Pesa & regional' },
    { label: 'Core banking', detail: 'Batch & stream' },
    { label: 'REST & webhooks', detail: 'Product hooks' },
    { label: 'Screening feeds', detail: 'Sanctions / PEP' },
  ]

  return (
    <section className="section-tight bg-[var(--bg)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
          <div className="max-w-xl">
            <p className="eyebrow">Integrations</p>
            <h2 className="heading-lg !mb-0">Fits the rails African institutions already run</h2>
          </div>
          <p className="text-[15px] text-[var(--text-muted)] max-w-sm leading-relaxed md:text-right">
            Ingest mobile money, cards and core banking into one model for detection and cases.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {channels.map((item) => (
            <div
              key={item.label}
              className="bg-[var(--surface)] px-5 py-6 md:px-6 md:py-7 text-center sm:text-left"
            >
              <div className="text-[15px] font-semibold text-[var(--text)] tracking-tight mb-1.5">
                {item.label}
              </div>
              <div className="text-[13px] text-[var(--text-dim)]">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
