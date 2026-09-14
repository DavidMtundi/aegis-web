export default function HowItWorks({ showIntro = true }: { showIntro?: boolean }) {
  const steps = [
    { num: '01', title: 'Ingest', desc: 'Normalise mobile money, cards, P2P and core banking traffic.' },
    { num: '02', title: 'Enrich', desc: 'Attach customer, risk and screening context.' },
    { num: '03', title: 'Detect', desc: 'Evaluate versioned AML rules your team owns.' },
    { num: '04', title: 'Investigate', desc: 'Case workflows with Customer 360 and evidence.' },
    { num: '05', title: 'Decide', desc: 'Keep an STR-ready rationale supervisors can follow.' },
  ]

  return (
    <section
      id="how-it-works"
      className={`section bg-[var(--surface)] ${showIntro ? '' : '!pt-12 md:!pt-16 lg:!pt-20'}`}
    >
      <div className="container-x">
        {showIntro && (
          <div className="section-intro max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="heading-lg">From payment to investigation in one pipeline</h2>
            <p className="body-lg">
              Aegis turns raw transactions into explainable alerts and cases. Compliance approves
              policy. The platform enforces it — with a trail your auditors can follow.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`pad-cell bg-[var(--bg)] hover:bg-white transition-colors ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="text-[12px] font-bold text-[var(--brand)] mb-4 tabular-nums">{step.num}</div>
              <h3 className="text-[16px] font-semibold text-[var(--text)] mb-2.5">{step.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
