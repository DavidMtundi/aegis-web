import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductPage from '@/components/ProductPage'
import { getPagesByGroup, getProductPage } from '@/lib/product-pages'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPagesByGroup('platform').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getProductPage('platform', slug)
  if (!page) return { title: 'Not found' }
  return {
    title: `${page.title.split(/[.!?]/)[0]} | Aegis`,
    description: page.metaDescription,
  }
}

export default async function PlatformSlugPage({ params }: Props) {
  const { slug } = await params
  const page = getProductPage('platform', slug)
  if (!page) notFound()
  return <ProductPage page={page} />
}
