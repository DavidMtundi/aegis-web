import Link from 'next/link'
import type { ProductPageContent } from '@/lib/product-pages'
import { getPagesByGroup } from '@/lib/product-pages'
import { platformItems, solutionsItems } from '@/lib/site-nav'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function relatedLabel(group: 'platform' | 'solutions', slug: string) {
  const items = group === 'platform' ? platformItems : solutionsItems
  return items.find((i) => i.href.endsWith(`/${slug}`))?.label ?? slug
}

export default function ProductPage({ page }: { page: ProductPageContent }) {
  const related = getPagesByGroup(page.group).filter((p) => p.slug !== page.slug).slice(0, 3)

  return (
    <div className="pt-[72px]">
      <section className="relative overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 ledger-rules pointer-events-none" />
        <div className="container-x relative section !pb-16 !pt-14 md:!pt-20">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="heading-display max-w-3xl mb-6">{page.title}</h1>
          <p className="body-lg max-w-2xl mb-0 !pb-12 md:!pb-14">{page.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
            <Link href="/#contact" className="btn-primary w-full sm:w-auto justify-center">
              Request access <ArrowIcon />
            </Link>
            <Link href={page.secondaryCta.href} className="btn-secondary w-full sm:w-auto justify-center">
              {page.secondaryCta.label} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--surface)] !pt-0">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 border-y border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
            {page.proof.map((stat, i) => (
              <div
                key={stat.label}
                className={`pad-cell ${i === 0 ? 'sm:!pl-0' : ''} ${i === page.proof.length - 1 ? 'sm:!pr-0' : ''}`}
              >
                <div className="text-[1.75rem] md:text-[2rem] font-semibold tracking-tight text-[var(--text)] tabular-nums mb-2.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-[15px] font-semibold text-[var(--text)] mb-3.5">{stat.label}</div>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-[280px]">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg)] !pt-0">
        <div className="container-x space-y-8 md:space-y-10">
          {page.features.map((feature) => (
            <article key={feature.title} className="stage-frame pad-panel">
              <h2 className="heading-md mb-4">{feature.title}</h2>
              <p className="text-[15px] md:text-base text-[var(--text-muted)] leading-relaxed mb-6 max-w-3xl">
                {feature.body}
              </p>
              <ul className="space-y-3">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[15px] text-[var(--text)]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)] shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-tight bg-[var(--surface)]">
          <div className="container-x">
            <p className="eyebrow mb-6">Related {page.group === 'platform' ? 'capabilities' : 'solutions'}</p>
            <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.group}/${item.slug}`}
                  className="rounded-2xl border border-[var(--border)] bg-white pad-panel-sm hover:border-[var(--border-strong)] transition-colors"
                >
                  <div className="text-[15px] font-semibold text-[var(--text)] mb-2">
                    {relatedLabel(item.group, item.slug)}
                  </div>
                  <p className="text-[14px] text-[var(--text-muted)] leading-relaxed line-clamp-3">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-[var(--bg-soft)]">
        <div className="container-x">
          <div className="stage-frame pad-panel flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Request access</p>
              <h2 className="heading-lg mb-3">Talk through this capability with our team</h2>
              <p className="body-lg mb-0">Compliance-first conversations — no generic sales pitch.</p>
            </div>
            <Link href="/#contact" className="btn-primary w-full justify-center shrink-0 md:w-auto">
              Request access <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
