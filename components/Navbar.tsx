'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import AegisMark from './icons/AegisMark'
import { navGroups, simpleLinks, type NavGroup } from '@/lib/site-nav'

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MegaPanel({
  group,
  onNavigate,
}: {
  group: NavGroup
  onNavigate: () => void
}) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-3">
      <div className="rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-product)] overflow-hidden">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="pad-panel-sm bg-[var(--bg-soft)] border-b md:border-b-0 md:border-r border-[var(--border)]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--text-dim)] mb-3">
              {group.label}
            </p>
            <p className="text-[15px] font-semibold text-[var(--text)] mb-2">
              {group.id === 'platform' ? 'Detection to decision in one control loop' : 'Controls shaped to how you operate'}
            </p>
            <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">
              {group.id === 'platform'
                ? 'Rules, alerts and cases for African AML desks — one audit trail.'
                : 'Banks, SACCOs and fintechs across Kenya and the region.'}
            </p>
          </div>
          <div className="p-4 md:p-5 grid sm:grid-cols-2 gap-1">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="rounded-xl px-3.5 py-3 hover:bg-[var(--bg-soft)] transition-colors"
              >
                <div className="text-[14px] font-semibold text-[var(--text)] mb-1">{item.label}</div>
                <div className="text-[13px] text-[var(--text-muted)] leading-snug">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<NavGroup['id'] | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<NavGroup['id'] | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopMenu(null)
        setOpen(false)
      }
    }
    const onPointer = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setDesktopMenu(null)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onPointer)
    }
  }, [])

  const closeAll = () => {
    setDesktopMenu(null)
    setOpen(false)
    setMobileAccordion(null)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,18,32,0.08)]'
          : 'bg-white'
      }`}
    >
      <div className="container-x h-[64px] md:h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={closeAll}>
          <AegisMark className="w-7 h-7 md:w-8 md:h-8" />
          <span className="text-[19px] md:text-[21px] font-bold tracking-tight text-[var(--text)]">aegis</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium text-[var(--text-muted)]">
          {navGroups.map((group) => {
            const isOpen = desktopMenu === group.id
            return (
              <div key={group.id} className="relative">
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors ${
                    isOpen ? 'text-[var(--text)] bg-[var(--bg-soft)]' : 'hover:text-[var(--text)] hover:bg-[var(--bg-soft)]'
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`${menuId}-${group.id}`}
                  onClick={() => setDesktopMenu(isOpen ? null : group.id)}
                  onMouseEnter={() => setDesktopMenu(group.id)}
                >
                  {group.label}
                  <Chevron open={isOpen} />
                </button>
                {isOpen && (
                  <div id={`${menuId}-${group.id}`} onMouseLeave={() => setDesktopMenu(null)}>
                    <MegaPanel group={group} onNavigate={closeAll} />
                  </div>
                )}
              </div>
            )
          })}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 rounded-lg transition-colors hover:text-[var(--text)] hover:bg-[var(--bg-soft)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 md:gap-3">
          <Link href="/#contact" className="btn-primary !py-2.5 !px-5 !text-[13px]">
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-soft)] transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-white px-5 py-5 max-h-[calc(100vh-64px)] overflow-y-auto shadow-[0_16px_40px_rgba(11,18,32,0.08)]">
          <div className="space-y-2 mb-6">
            {navGroups.map((group) => {
              const expanded = mobileAccordion === group.id
              return (
                <div key={group.id} className="rounded-xl border border-[var(--border)] overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3.5 py-3 text-[15px] font-semibold text-[var(--text)] bg-[var(--bg-soft)]"
                    aria-expanded={expanded}
                    onClick={() => setMobileAccordion(expanded ? null : group.id)}
                  >
                    {group.label}
                    <Chevron open={expanded} />
                  </button>
                  {expanded && (
                    <div className="p-2 space-y-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 hover:bg-[var(--bg-soft)]"
                          onClick={closeAll}
                        >
                          <div className="text-[14px] font-semibold text-[var(--text)]">{item.label}</div>
                          <div className="text-[12px] text-[var(--text-muted)] mt-0.5">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3.5 py-3 text-[15px] font-medium text-[var(--text)] hover:bg-[var(--bg-soft)]"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <Link href="/#contact" className="btn-primary w-full" onClick={closeAll}>
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
