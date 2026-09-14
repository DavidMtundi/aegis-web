import type { Metadata } from 'next'
import HowItWorks from '@/components/HowItWorks'
import SimpleContentPage from '@/components/SimpleContentPage'

export const metadata: Metadata = {
  title: 'How it works | Aegis AML for Kenya & Africa',
  description:
    'See how Aegis turns mobile money, cards and banking transactions into explainable alerts and audit-ready cases for African compliance teams.',
}

export default function HowItWorksPage() {
  return (
    <SimpleContentPage
      eyebrow="How it works"
      title="From payment to investigation in one pipeline"
      description="Aegis ingests multi-channel African payments, runs compliance-owned AML rules, and keeps an investigation trail supervisors can follow."
      secondaryCta={{ href: '/platform/transaction-monitoring', label: 'See the platform' }}
    >
      <HowItWorks showIntro={false} />
    </SimpleContentPage>
  )
}
