import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getPageQuery, pageMetadataQuery, pagesSlugs, settingsQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'
import {client} from '@/sanity/lib/client'

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  return client.withConfig({useCdn: false, perspective: 'published', stega: false}).fetch(pagesSlugs)
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: PageProps<'/[slug]'>): Promise<Metadata> {
  const params = await props.params
  const [{data: page}, {data: settings}] = await Promise.all([
    sanityFetch({query: pageMetadataQuery, params, stega: false}),
    sanityFetch({query: settingsQuery, stega: false}),
  ])

  const seo = page?.seo || settings?.defaultSeo

  return {
    title: seo?.metaTitle || page?.name,
    description: seo?.metaDescription || settings?.footerIntro,
    openGraph: {images: resolveOpenGraphImage(seo?.openGraphImage || settings?.ogImage)},
  } satisfies Metadata
}

export default async function Page(props: PageProps<'/[slug]'>) {
  const params = await props.params
  const {data: page} = await sanityFetch({query: getPageQuery, params})

  if (!page?._id) notFound()

  return <PageBuilderPage page={page} />
}
