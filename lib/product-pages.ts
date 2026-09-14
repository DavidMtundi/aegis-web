export type ProofStat = {
  value: string
  label: string
  detail: string
}

export type FeatureBlock = {
  title: string
  body: string
  points: string[]
}

export type ProductPageContent = {
  slug: string
  group: 'platform' | 'solutions'
  eyebrow: string
  title: string
  description: string
  metaDescription: string
  secondaryCta: { label: string; href: string }
  proof: ProofStat[]
  features: FeatureBlock[]
}

const platformPages: ProductPageContent[] = [
  {
    slug: 'transaction-monitoring',
    group: 'platform',
    eyebrow: 'Platform · Detection',
    title: 'AML transaction monitoring that cuts noise, not coverage',
    description:
      'Evaluate normalised African payment traffic — mobile money, cards, P2P and core banking — against versioned scenarios. Thresholds stay in KES (or your local currency) and under compliance control.',
    metaDescription:
      'Aegis AML transaction monitoring for Kenya and Africa — mobile money and banking rails, configurable rules, fewer false positives, audit-ready detection.',
    secondaryCta: { label: 'See explainable alerts', href: '/platform/explainable-alerts' },
    proof: [
      { value: 'Minutes', label: 'to tune a scenario', detail: 'Change thresholds without an engineering release.' },
      { value: 'Multi-channel', label: 'ingestion', detail: 'Mobile money, cards, P2P and core banking on one model.' },
      { value: 'Backtest', label: 'before go-live', detail: 'Simulate alert volume against historical traffic.' },
    ],
    features: [
      {
        title: 'Typology-ready scenario packs',
        body: 'Start from known AML patterns, then tune lookbacks, amounts, and customer segments to your risk appetite.',
        points: [
          'Structuring, velocity, dormancy, and sanctions adjacency templates',
          'Segment-aware thresholds for retail, SME, and high-risk cohorts',
          'Draft → review → activate with change control',
        ],
      },
      {
        title: 'Detection with customer context',
        body: 'Monitoring judges activity against what you already know — KYC/KYB profile, risk score, and screening hits — not isolated payments.',
        points: [
          'Customer 360 available at evaluation time',
          'Counterparty and network signals on high-severity alerts',
          'Attempted and declined transactions included where available',
        ],
      },
      {
        title: 'Built for audit and scale',
        body: 'Every evaluation is reproducible: which rule, which data, which version — retained for examiners and internal QA.',
        points: [
          'Immutable rule versioning',
          'Tenant isolation for multi-entity groups',
          'On-prem or private cloud deployment options',
        ],
      },
    ],
  },
  {
    slug: 'explainable-alerts',
    group: 'platform',
    eyebrow: 'Platform · Investigation',
    title: 'Alerts analysts can defend — with evidence attached',
    description:
      'Stop reconstructing why something fired. Every alert shows the rule, observed values, linked transactions, and recommended next steps.',
    metaDescription:
      'Explainable AML alerts from Aegis — rule evidence, linked transactions, and clear disposition paths for investigators.',
    secondaryCta: { label: 'See case management', href: '/platform/case-management' },
    proof: [
      { value: '100%', label: 'explainable signals', detail: 'Rule, values, and linked txs on every alert.' },
      { value: 'Prioritised', label: 'queues', detail: 'Severity and risk score surface the work that matters.' },
      { value: 'Faster', label: 'first review', detail: 'Less time gathering context; more time deciding.' },
    ],
    features: [
      {
        title: 'Matched conditions, not black boxes',
        body: 'Investigators see each condition that contributed — amounts, counts, lookbacks — with pass/fail against threshold.',
        points: [
          'Condition-level evidence cards',
          'Linked transaction strip for rapid drill-down',
          'Clear mapping back to the active rule version',
        ],
      },
      {
        title: 'Disposition that holds up',
        body: 'Approve, escalate, or clear with a rationale that is retained for audit — not lost in email threads.',
        points: [
          'Structured disposition reasons',
          'Escalation to case with full alert payload',
          'History of who reviewed what and when',
        ],
      },
    ],
  },
  {
    slug: 'case-management',
    group: 'platform',
    eyebrow: 'Platform · Workflow',
    title: 'One workspace to investigate, decide, and file',
    description:
      'Correlate alerts into cases, attach evidence, assign owners, and keep a regulator-ready trail from first signal to final decision.',
    metaDescription:
      'Aegis case management for financial crime — correlated alerts, Customer 360, and audit-ready investigation workflows.',
    secondaryCta: { label: 'See rule engine', href: '/platform/rule-engine' },
    proof: [
      { value: 'Linked', label: 'alerts per case', detail: 'Correlate related signals into one investigation.' },
      { value: 'Owned', label: 'workflows', detail: 'MLRO and analyst roles with clear handoffs.' },
      { value: 'Retained', label: 'rationale', detail: 'Decisions and evidence stay examinable.' },
    ],
    features: [
      {
        title: 'Investigation workspace',
        body: 'Customer 360, linked alerts, notes, and documents in one place — so nothing falls between queues.',
        points: [
          'Case status and ownership',
          'UBO / network context where available',
          'Checklist workflows for consistent review',
        ],
      },
      {
        title: 'From case to filing readiness',
        body: 'Package the story regulators need: what fired, what was reviewed, who decided, and why.',
        points: [
          'Exportable investigation summary',
          'Immutable activity log',
          'Handoff points for STR / SAR processes',
        ],
      },
    ],
  },
  {
    slug: 'rule-engine',
    group: 'platform',
    eyebrow: 'Platform · Policy',
    title: 'AML rules owned by compliance — versioned and testable',
    description:
      'Declarative scenarios with drafts, approvals, and backtests. Policy changes stay auditable without burying logic in application code.',
    metaDescription:
      'Aegis AML rule engine — declarative scenarios, version control, approval workflows, and historical backtesting.',
    secondaryCta: { label: 'See transaction monitoring', href: '/platform/transaction-monitoring' },
    proof: [
      { value: 'Declarative', label: 'scenarios', detail: 'Compliance authors rules without code deploys.' },
      { value: 'Versioned', label: 'policy', detail: 'Every activation is attributable and reversible.' },
      { value: 'Tested', label: 'before live', detail: 'Backtest against historical traffic first.' },
    ],
    features: [
      {
        title: 'Author → approve → activate',
        body: 'Analysts draft; managers approve; production only runs signed-off versions.',
        points: [
          'Draft and compare diffs between versions',
          'Approval trail retained for examiners',
          'Instant rollback to a prior version',
        ],
      },
      {
        title: 'Simulate impact before you ship',
        body: 'Understand alert volume and false-positive pressure before a threshold change goes live.',
        points: [
          'Historical backtest windows',
          'Segment-level volume estimates',
          'Side-by-side comparison of candidate rules',
        ],
      },
    ],
  },
  {
    slug: 'screening',
    group: 'platform',
    eyebrow: 'Platform · Screening',
    title: 'Watchlist context that feeds monitoring and cases',
    description:
      'Sanctions, PEP, and adverse-media style hits normalised into the same control loop as transaction monitoring — so alerts and cases inherit screening context.',
    metaDescription:
      'Aegis screening for AML — sanctions and PEP context integrated with transaction monitoring and case workflows.',
    secondaryCta: { label: 'See transaction monitoring', href: '/platform/transaction-monitoring' },
    proof: [
      { value: 'Normalised', label: 'matches', detail: 'Consistent disposition paths across sources.' },
      { value: 'Linked', label: 'to monitoring', detail: 'Screening hits enrich evaluation and alerts.' },
      { value: 'Auditable', label: 'clearance', detail: 'Who cleared what, with rationale retained.' },
    ],
    features: [
      {
        title: 'Screen once, reuse everywhere',
        body: 'Onboarding and ongoing screening results are available when rules evaluate and when investigators open a case.',
        points: [
          'Customer and counterparty screening hooks',
          'Match strength and list provenance on the record',
          'Clear / escalate dispositions with audit trail',
        ],
      },
      {
        title: 'Fewer blind spots between teams',
        body: 'Monitoring, screening, and case teams share one entity view instead of reconciling siloed tools.',
        points: [
          'Shared Customer 360',
          'Screening adjacency on high-severity alerts',
          'Consistent retention policy',
        ],
      },
    ],
  },
]

const solutionsPages: ProductPageContent[] = [
  {
    slug: 'banks',
    group: 'solutions',
    eyebrow: 'Solutions · Banks',
    title: 'High-volume AML monitoring for banks in Kenya and the region',
    description:
      'Configurable policy, strict tenant isolation, and migration paths from legacy monitors — built for multi-channel African payment operations.',
    metaDescription:
      'Aegis for banks in Kenya and Africa — high-volume AML transaction monitoring, tenant isolation, and audit-ready controls.',
    secondaryCta: { label: 'See transaction monitoring', href: '/platform/transaction-monitoring' },
    proof: [
      { value: 'ISO 20022', label: 'ready ingestion', detail: 'Normalise modern payment messages into detection.' },
      { value: 'Strict', label: 'tenant isolation', detail: 'Multi-entity groups without data bleed.' },
      { value: 'Flexible', label: 'deploy', detail: 'On-prem or private cloud where required.' },
    ],
    features: [
      {
        title: 'Enterprise control, operational speed',
        body: 'Compliance changes policy quickly; engineering is not the bottleneck for every threshold tweak.',
        points: [
          'Versioned rule governance',
          'Explainable alerts for large analyst teams',
          'Case workflows aligned to MLRO escalation',
        ],
      },
      {
        title: 'Migrate without a cliff edge',
        body: 'Run parallel monitoring long enough to compare outputs before you cut over from legacy systems.',
        points: [
          'Canonical transaction model for mapping',
          'Backtest and shadow-mode friendly design',
          'Audit trail from day one',
        ],
      },
    ],
  },
  {
    slug: 'saccos',
    group: 'solutions',
    eyebrow: 'Solutions · SACCOs',
    title: 'SACCO AML monitoring without enterprise complexity',
    description:
      'Start from typology templates, tune to how your members save and transfer money, and keep an audit trail that stands up to Kenyan and regional supervision.',
    metaDescription:
      'Aegis for SACCOs in Kenya and Africa — turnkey AML monitoring, member-aware scenarios, and manageable compliance workflows.',
    secondaryCta: { label: 'See rule engine', href: '/platform/rule-engine' },
    proof: [
      { value: 'Templates', label: 'to start', detail: 'Pre-built scenarios for common member typologies.' },
      { value: 'Turnkey', label: 'onboarding', detail: 'Get monitoring live without a huge programme.' },
      { value: 'Managed', label: 'screening options', detail: 'Watchlist context without building it alone.' },
    ],
    features: [
      {
        title: 'Right-sized for SACCO operations',
        body: 'Powerful enough for regulators; simple enough for lean compliance teams common in the SACCO sector.',
        points: [
          'Clear alert queues for small investigation desks',
          'Case notes and disposition without clutter',
          'Policy changes your compliance officer can own',
        ],
      },
      {
        title: 'Grow controls as you grow members',
        body: 'Add mobile money, agency banking and new products without re-platforming your AML stack.',
        points: [
          'Multi-channel monitoring including mobile money',
          'Segment thresholds for member cohorts',
          'Shared evidence model across alerts and cases',
        ],
      },
    ],
  },
  {
    slug: 'fintechs',
    group: 'solutions',
    eyebrow: 'Solutions · Fintechs',
    title: 'API-first AML for African fintechs and payments apps',
    description:
      'Webhooks, sandboxing and real-time hooks so wallets, lenders and payment products stay compliant as they scale — including mobile money corridors.',
    metaDescription:
      'Aegis for African fintechs — API-first AML monitoring for wallets and payments, with webhooks, sandbox and explainable alerts.',
    secondaryCta: { label: 'See explainable alerts', href: '/platform/explainable-alerts' },
    proof: [
      { value: 'REST', label: '& webhooks', detail: 'Integrate monitoring into existing services.' },
      { value: 'Sandbox', label: 'for builders', detail: 'Test scenarios before production traffic.' },
      { value: 'Real-time', label: 'hooks', detail: 'Decision points where your product needs them.' },
    ],
    features: [
      {
        title: 'Ship product, stay compliant',
        body: 'Compliance configuration stays declarative while engineering integrates through stable APIs.',
        points: [
          'Event-driven alert and case notifications',
          'Idempotent ingestion patterns',
          'Environment separation for test vs live',
        ],
      },
      {
        title: 'Explainability for fast-moving teams',
        body: 'When growth creates alert volume, investigators still see why something fired.',
        points: [
          'Evidence-rich alerts',
          'Case correlation across product lines',
          'Audit trail that survives rapid releases',
        ],
      },
    ],
  },
]

export const allProductPages: ProductPageContent[] = [...platformPages, ...solutionsPages]

export function getProductPage(group: 'platform' | 'solutions', slug: string) {
  return allProductPages.find((p) => p.group === group && p.slug === slug)
}

export function getPagesByGroup(group: 'platform' | 'solutions') {
  return allProductPages.filter((p) => p.group === group)
}
