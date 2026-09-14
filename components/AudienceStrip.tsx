export default function AudienceStrip() {
  const audiences = ['Banks', 'SACCOs', 'Fintechs', 'Mobile money', 'MFIs']

  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="container-x py-14 md:py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-14 lg:gap-16">
          <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.14em] text-[var(--text-dim)] shrink-0">
            Built for
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 md:gap-x-10 lg:gap-x-12 text-[22px] md:text-[24px] lg:text-[26px] font-semibold tracking-tight text-[var(--text)]">
            {audiences.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-7 md:gap-10 lg:gap-12">
                {i > 0 && (
                  <span className="hidden sm:inline h-7 md:h-8 w-px bg-[var(--border-strong)]" aria-hidden />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
