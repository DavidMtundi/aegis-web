'use client'

import { useMemo, useState } from 'react'

const sectors = ['Banking', 'SACCO', 'Fintech / payments', 'Mobile money', 'Lending / MFI']
const volumes = [
  { label: '10k – 50k', value: 30000 },
  { label: '50k – 100k', value: 75000 },
  { label: '100k – 500k', value: 250000 },
  { label: '500k+', value: 750000 },
]
const teams = [
  { label: '1–4 analysts', value: 3 },
  { label: '5–9 analysts', value: 7 },
  { label: '10–24 analysts', value: 15 },
  { label: '25+ analysts', value: 30 },
]

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

const fieldClass =
  'w-full rounded-xl border border-[var(--border)] bg-white px-3.5 py-3.5 text-[15px] text-[var(--text)] outline-none focus:border-[var(--brand)]'

export default function SavingsCalculator() {
  const [sector, setSector] = useState(sectors[0])
  const [volumeIdx, setVolumeIdx] = useState(2)
  const [teamIdx, setTeamIdx] = useState(1)
  const [falsePositiveRate, setFalsePositiveRate] = useState(68)

  const result = useMemo(() => {
    const monthlyTx = volumes[volumeIdx].value
    const analysts = teams[teamIdx].value
    const alertsPerMonth = Math.round(monthlyTx * 0.012)
    const noisyAlerts = Math.round(alertsPerMonth * (falsePositiveRate / 100))
    const hoursSaved = Math.round(noisyAlerts * 0.18)
    const capacityGain = Math.min(72, Math.round(22 + (falsePositiveRate - 40) * 0.55 + analysts * 0.8))
    const reviewReduction = Math.min(85, Math.round(falsePositiveRate * 0.78))

    return { alertsPerMonth, noisyAlerts, hoursSaved, capacityGain, reviewReduction, monthlyTx, analysts }
  }, [volumeIdx, teamIdx, falsePositiveRate])

  const resultKey = `${result.hoursSaved}-${result.noisyAlerts}-${result.reviewReduction}-${result.capacityGain}`

  const secondary = [
    { label: 'Load cut', value: `${result.reviewReduction}%` },
    { label: 'Noise avoided', value: formatNumber(result.noisyAlerts) },
    { label: 'Capacity', value: `+${result.capacityGain}%` },
  ]

  return (
    <section id="impact-calculator" className="section bg-[var(--surface)]">
      <div className="container-x">
        <div className="section-intro max-w-xl">
          <p className="eyebrow">Estimate your impact</p>
          <h2 className="heading-lg">How much analyst time could you reclaim?</h2>
          <p className="body-lg">
            Model alert load for Kenyan and African desks — then see capacity freed when noisy alerts
            drop.
          </p>
        </div>

        <div className="calc-controls pad-panel-sm mb-8 md:mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-end">
            <label className="block">
              <span className="field-label">Sector</span>
              <select value={sector} onChange={(e) => setSector(e.target.value)} className={fieldClass}>
                {sectors.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="field-label">Monthly tx</span>
              <select value={volumeIdx} onChange={(e) => setVolumeIdx(Number(e.target.value))} className={fieldClass}>
                {volumes.map((v, i) => (
                  <option key={v.label} value={i}>{v.label}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="field-label">Team</span>
              <select value={teamIdx} onChange={(e) => setTeamIdx(Number(e.target.value))} className={fieldClass}>
                {teams.map((t, i) => (
                  <option key={t.label} value={i}>{t.label}</option>
                ))}
              </select>
            </label>
            <div className="pb-1.5">
              <div className="flex justify-between items-center mb-3.5">
                <span className="field-label !mb-0">False positives</span>
                <span className="text-[15px] font-bold text-[var(--brand)] tabular-nums">{falsePositiveRate}%</span>
              </div>
              <input
                type="range"
                min={35}
                max={90}
                value={falsePositiveRate}
                onChange={(e) => setFalsePositiveRate(Number(e.target.value))}
                className="w-full h-2 accent-[var(--brand)]"
                aria-label="False positive rate"
              />
            </div>
          </div>
        </div>

        <div className="stage-frame pad-panel">
          <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--brand)] mb-8 md:mb-10">
            Estimated monthly impact · {sector}
          </div>

          <div key={resultKey} className="calc-metric-in">
            <div className="text-[15px] font-semibold text-[var(--text-muted)] mb-4">Hours reclaimed</div>
            <div className="calc-hero-num">{formatNumber(result.hoursSaved)}</div>

            <div className="mt-8 md:mt-10 border-t border-[var(--border)] pt-6 md:pt-7 max-w-xl">
              <p className="text-[14px] leading-relaxed text-[var(--text-muted)]">
                Based on ~{formatNumber(result.alertsPerMonth)} alerts/month across {result.analysts} analysts
                at ~{formatNumber(result.monthlyTx)} transactions. Illustrative — not a guarantee.
              </p>
            </div>

            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 border-y border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
              {secondary.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-7 md:py-8 px-0 ${
                    i === 0
                      ? 'sm:pr-8 md:pr-10'
                      : i === secondary.length - 1
                        ? 'sm:pl-8 md:pl-10'
                        : 'sm:px-8 md:px-10'
                  }`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--text-dim)] mb-2.5">
                    {stat.label}
                  </div>
                  <div className="text-[1.5rem] md:text-[1.75rem] font-semibold tabular-nums text-[var(--text)] leading-none">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <a href="#contact" className="btn-primary">
              Talk through your numbers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
