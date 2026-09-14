'use client'

import { useState } from 'react'

const fieldClass =
  'w-full rounded-xl border border-[var(--border)] bg-white px-5 py-4 text-[15px] text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none focus:border-[var(--brand)]'

const institutions = ['Bank', 'SACCO', 'Fintech / payments', 'Mobile money operator', 'MFI / lender', 'Other']

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="section bg-[var(--bg-soft)]">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-[var(--border)] overflow-hidden bg-white shadow-[var(--shadow-card)]">
          <div className="pad-panel lg:!p-14">
            <p className="eyebrow">Request access</p>
            <h2 className="heading-lg mb-5">Talk through AML for your Kenyan or African institution</h2>
            <p className="body-lg mb-8">
              Share how you move value today — mobile money, cards, SACCO deposits, or banking rails —
              and we will walk through monitoring, investigation and audit needs with your compliance
              team.
            </p>
            <ul className="space-y-3.5 text-[15px] text-[var(--text)]">
              {[
                'Map typologies to how your members or customers actually transact',
                'Review alert volumes and migration from spreadsheets or legacy monitors',
                'No generic sales pitch — compliance-first conversation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)] shrink-0" />
                  <span className="leading-relaxed text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pad-panel lg:!p-14 bg-[var(--bg)] border-t lg:border-t-0 lg:border-l border-[var(--border)] flex flex-col justify-center">
            {submitted ? (
              <div>
                <p className="eyebrow">Request received</p>
                <h3 className="heading-md mb-3">Thanks — we will be in touch</h3>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                  A compliance specialist will follow up on your work email. If you need something
                  sooner, reply to the confirmation once it arrives.
                </p>
              </div>
            ) : (
              <>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-2.5">
                      <span className="field-label !mb-0">Full name</span>
                      <input type="text" required name="name" autoComplete="name" className={fieldClass} />
                    </label>
                    <label className="flex flex-col gap-2.5">
                      <span className="field-label !mb-0">Work email</span>
                      <input
                        type="email"
                        required
                        name="email"
                        autoComplete="email"
                        placeholder="you@institution.com"
                        className={fieldClass}
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2.5">
                    <span className="field-label !mb-0">Institution type</span>
                    <select name="institution" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select type
                      </option>
                      {institutions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2.5">
                    <span className="field-label !mb-0">What should we cover?</span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Alert volumes, migration, screening, case workflows…"
                      className={`${fieldClass} resize-y min-h-[96px]`}
                    />
                  </label>
                  <button type="submit" className="btn-primary w-full !rounded-xl !py-4 mt-1">
                    Request access
                  </button>
                </form>
                <p className="text-[13px] text-[var(--text-dim)] mt-5 leading-relaxed">
                  We only use this to schedule a compliance conversation — not a drip campaign.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
