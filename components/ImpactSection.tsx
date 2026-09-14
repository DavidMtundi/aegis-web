export default function ImpactSection() {
  const stats = [
    {
      value: 'Minutes',
      label: 'to tune a rule',
      detail: 'Compliance changes KES thresholds and lookbacks without waiting on engineering.',
    },
    {
      value: '100%',
      label: 'explainable alerts',
      detail: 'Every signal shows the rule, values, and linked transactions — ready for STR notes.',
    },
    {
      value: 'Immutable',
      label: 'audit trail',
      detail: 'Who decided, what changed, when — retained for CBK, FRC and internal review.',
    },
  ]

  return (
    <section className="section bg-[var(--surface)]">
      <div className="container-x flex flex-col gap-12 md:gap-14 lg:gap-16">
        <div className="max-w-3xl">
          <p className="eyebrow">What Aegis does</p>
          <h2 className="heading-display">
            One system to detect suspicious activity, investigate it, and prove what you decided.
          </h2>
          <p className="body-lg mt-5 max-w-2xl !mb-0">
            African institutions move value across mobile money, cards, P2P and core banking. Aegis
            normalises that traffic, runs compliance-owned AML rules, and keeps an investigation
            trail supervisors can follow.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 border-y border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`pad-cell ${i === 0 ? 'sm:!pl-0' : ''} ${i === stats.length - 1 ? 'sm:!pr-0' : ''}`}
            >
              <div className="text-[1.75rem] md:text-[2rem] font-semibold tracking-tight text-[var(--text)] tabular-nums mb-2.5 leading-none">
                {stat.value}
              </div>
              <div className="text-[15px] font-semibold text-[var(--text)] mb-3.5">{stat.label}</div>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-[280px]">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-[3px] border-[var(--brand)] pl-6 md:pl-8 max-w-3xl py-1">
          <p className="text-lg md:text-[1.25rem] leading-[1.7] text-[var(--text)]">
            “Aegis gives us real-time visibility into high-risk activity with evidence attached.
            Investigators spend time on cases that matter — not reconstructing why an alert fired.”
          </p>
          <footer className="mt-5 text-[14px] text-[var(--text-dim)]">
            — Financial Crime Team Lead, Digital bank (Kenya)
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
