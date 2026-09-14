import Hero from '@/components/Hero'
import AudienceStrip from '@/components/AudienceStrip'
import TrustStrip from '@/components/TrustStrip'
import ImpactSection from '@/components/ImpactSection'
import FeatureTabs from '@/components/FeatureTabs'
import IntegrationsStrip from '@/components/IntegrationsStrip'
import SavingsCalculator from '@/components/SavingsCalculator'
import ProofStrip from '@/components/ProofStrip'
import TestimonialsSection from '@/components/TestimonialsSection'
import HowItWorks from '@/components/HowItWorks'
import ForYourInstitution from '@/components/ForYourInstitution'
import ResourcesSection from '@/components/ResourcesSection'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceStrip />
      <TrustStrip />
      <ImpactSection />
      <FeatureTabs />
      <IntegrationsStrip />
      <SavingsCalculator />
      <ProofStrip />
      <TestimonialsSection />
      <HowItWorks />
      <ForYourInstitution />
      <ResourcesSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
