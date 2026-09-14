import Link from 'next/link'
import AegisMark from './icons/AegisMark'
import { platformItems, solutionsItems } from '@/lib/site-nav'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)] pt-16 pb-12">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 mb-14">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <AegisMark className="w-7 h-7" />
              <span className="text-lg font-bold tracking-tight text-[var(--text)]">aegis</span>
            </Link>
            <p className="text-[14px] text-[var(--text-muted)] max-w-xs leading-relaxed">
              AML monitoring and investigation for banks, SACCOs and fintechs in Kenya and across
              Africa.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-[var(--text)] mb-5">Platform</h4>
            <ul className="space-y-3.5 text-[14px] text-[var(--text-muted)]">
              {platformItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[var(--text)] transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-[var(--text)] mb-5">Solutions</h4>
            <ul className="space-y-3.5 text-[14px] text-[var(--text-muted)]">
              {solutionsItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[var(--text)] transition">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="hover:text-[var(--text)] transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-[var(--text)] mb-5">Company</h4>
            <ul className="space-y-3.5 text-[14px] text-[var(--text-muted)]">
              <li>
                <Link href="/how-it-works" className="hover:text-[var(--text)] transition">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/#resources" className="hover:text-[var(--text)] transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--text)] transition">
                  Request access
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--text)] transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4 text-[12px] text-[var(--text-dim)]">
          <div>© 2026 Aegis. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/#contact" className="hover:text-[var(--text)] transition">
              Privacy
            </Link>
            <Link href="/#contact" className="hover:text-[var(--text)] transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
