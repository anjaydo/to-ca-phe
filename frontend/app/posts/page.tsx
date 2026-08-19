import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import PageBuilder from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {blogMetadataQuery, getBlogPageQuery, settingsQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  const [{data: page}, {data: settings}] = await Promise.all([
    sanityFetch({query: blogMetadataQuery, stega: false}),
    sanityFetch({query: settingsQuery, stega: false}),
  ])
  const seo = page?.seo || settings?.defaultSeo

  return {
    title: seo?.metaTitle || page?.name || `Chuyện ở Tổ — ${settings?.brandName || 'Tổ'}`,
    description: seo?.metaDescription || settings?.footerIntro,
    openGraph: {images: resolveOpenGraphImage(seo?.openGraphImage || settings?.ogImage)},
  }
}

export default async function BlogPage() {
  const {data: page} = await sanityFetch({query: getBlogPageQuery})
  if (!page?._id) notFound()
  return <div className="overflow-hidden"><PageBuilder page={page} /></div>
}
