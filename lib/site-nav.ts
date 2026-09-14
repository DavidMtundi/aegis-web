export type NavItem = {
  label: string
  href: string
  description: string
}

export type NavGroup = {
  id: 'platform' | 'solutions'
  label: string
  items: NavItem[]
}

export const platformItems: NavItem[] = [
  {
    label: 'Transaction Monitoring',
    href: '/platform/transaction-monitoring',
    description: 'Detect typologies across channels with policy you control.',
  },
  {
    label: 'Explainable Alerts',
    href: '/platform/explainable-alerts',
    description: 'Every signal ships with rule, values, and evidence.',
  },
  {
    label: 'Case Management',
    href: '/platform/case-management',
    description: 'Investigate, decide, and retain an audit-ready trail.',
  },
  {
    label: 'Rule Engine',
    href: '/platform/rule-engine',
    description: 'Versioned AML rules owned by compliance, not engineering.',
  },
  {
    label: 'Screening',
    href: '/platform/screening',
    description: 'Sanctions, PEP, and watchlist context at evaluation time.',
  },
]

export const solutionsItems: NavItem[] = [
  {
    label: 'Banks',
    href: '/solutions/banks',
    description: 'High-volume AML for Kenyan and regional banking groups.',
  },
  {
    label: 'SACCOs',
    href: '/solutions/saccos',
    description: 'Member-first monitoring without enterprise complexity.',
  },
  {
    label: 'Fintechs',
    href: '/solutions/fintechs',
    description: 'API-first AML for wallets, lenders and payments apps.',
  },
]

export const navGroups: NavGroup[] = [
  { id: 'platform', label: 'Platform', items: platformItems },
  { id: 'solutions', label: 'Solutions', items: solutionsItems },
]

export const simpleLinks = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
]
