import AegisMark from './AegisMark'

/** @deprecated Prefer AegisMark — kept so existing imports keep working */
export default function ShieldIcon({ className = '' }: { className?: string }) {
  return <AegisMark className={className} />
}
