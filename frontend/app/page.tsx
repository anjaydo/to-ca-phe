import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import PageBuilder from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getHomePageQuery, homeMetadataQuery, settingsQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  const [{data: page}, {data: settings}] = await Promise.all([
    sanityFetch({query: homeMetadataQuery, stega: false}),
    sanityFetch({query: settingsQuery, stega: false}),
  ])
  const seo = page?.seo || settings?.defaultSeo
  let openGraphImage = null
  try {
    openGraphImage = resolveOpenGraphImage(
      !!seo?.openGraphImage?.asset
        ? seo?.openGraphImage
        : settings?.ogImage
          ? settings.ogImage
          : null,
    )
  } catch (error) {
    console.error('Error resolving Open Graph image:', error)
  }
  return {
    title: seo?.metaTitle || page?.name || settings?.brandName,
    description: seo?.metaDescription || settings?.footerIntro,
    openGraph: {images: openGraphImage ? [openGraphImage] : []},
  }
}

export default async function HomePage() {
  const {data: page} = await sanityFetch({query: getHomePageQuery})
  if (!page?._id) notFound()
  return (
    <div className="overflow-hidden">
      <PageBuilder page={page} />
    </div>
  )
}
