import type { Metadata } from 'next'
import FaqSection from '@/components/FaqSection'
import SimpleContentPage from '@/components/SimpleContentPage'

export const metadata: Metadata = {
  title: 'FAQ | Aegis AML for Kenya & Africa',
  description:
    'What Aegis is, how AML monitoring works across mobile money and banking rails, who owns rules, and how audit trails support supervisory review.',
}

export default function FaqPage() {
  return (
    <SimpleContentPage
      eyebrow="FAQ"
      title="What Aegis is — and how it works"
      description="Straight answers for compliance and technology teams evaluating AML monitoring in Kenya and across Africa."
      secondaryCta={{ href: '/how-it-works', label: 'See how it works' }}
    >
      <FaqSection showIntro={false} />
    </SimpleContentPage>
  )
}
