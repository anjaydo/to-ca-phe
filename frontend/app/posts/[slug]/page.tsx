import type {Metadata, ResolvingMetadata} from 'next'
import {notFound} from 'next/navigation'
import {type PortableTextBlock} from 'next-sanity'
import {Suspense} from 'react'
import Link from 'next/link'
import {ArrowLeft, ArrowUpRight} from 'lucide-react'

import {MorePosts} from '@/app/components/Posts'
import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import {sanityFetch} from '@/sanity/lib/live'
import {postPagesSlugs, postQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'
import {dataAttr} from '@/sanity/lib/utils'

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: postPagesSlugs,
    // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  props: PageProps<'/posts/[slug]'>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params
  const {data: post} = await sanityFetch({
    query: postQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(post?.coverImage)

  return {
    authors:
      post?.author?.firstName && post?.author?.lastName
        ? [{name: `${post.author.firstName} ${post.author.lastName}`}]
        : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata
}

export default async function PostPage(props: PageProps<'/posts/[slug]'>) {
  const params = await props.params
  const [{data: post}] = await Promise.all([sanityFetch({query: postQuery, params})])

  if (!post?._id) {
    return notFound()
  }

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-outline-variant bg-surface py-16 md:py-24">
          <div className="grain absolute inset-0 opacity-20" />
          <div className="site-container relative">
            <Link href="/posts" className="eyebrow inline-flex items-center gap-2 text-primary"><ArrowLeft aria-hidden className="size-4" /> Chuyện ở Tổ</Link>
            <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_280px]">
              <div>
                <p className="eyebrow text-primary">{new Intl.DateTimeFormat('vi-VN', {day: '2-digit', month: 'long', year: 'numeric'}).format(new Date(post.date))}</p>
                <h1 data-sanity={dataAttr({id: post._id, type: 'post', path: 'title'}).toString()} className="mt-5 max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[.94] tracking-[-.05em] text-primary">{post.title}</h1>
              </div>
              <div className="border-l border-outline-variant pl-6">
                {post.excerpt && <p className="leading-7 text-on-surface-variant">{post.excerpt}</p>}
                {post.author?.firstName && <p className="eyebrow mt-6 text-primary">Bởi {post.author.firstName} {post.author.lastName}</p>}
              </div>
            </div>
          </div>
        </header>

        {post.coverImage?.asset?._ref && <div className="site-container py-8 md:py-12"><div data-sanity={dataAttr({id: post._id, type: 'post', path: 'coverImage'}).toString()} className="aspect-[16/9] overflow-hidden rounded-xl border border-outline-variant"><Image id={post.coverImage.asset._ref} alt={post.coverImage.alt || ''} className="size-full object-cover" width={1800} height={1013} mode="cover" hotspot={post.coverImage.hotspot} crop={post.coverImage.crop} /></div></div>}

        <div className="site-container grid gap-10 pb-20 pt-8 md:grid-cols-[180px_minmax(0,720px)] md:justify-center md:pb-28">
          <aside className="hidden md:block"><div className="sticky top-28"><p className="eyebrow text-primary">Tổ ghi chép</p><div className="mt-4 h-px bg-outline-variant" /><Link href="/posts" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Xem mọi bài viết <ArrowUpRight aria-hidden className="size-4" /></Link></div></aside>
          {post.content?.length ? <div data-sanity={dataAttr({id: post._id, type: 'post', path: 'content'}).toString()}><PortableText className="max-w-none prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-primary prose-p:leading-8" value={post.content as PortableTextBlock[]} /></div> : null}
        </div>
      </article>
      <section className="border-t border-outline-variant bg-surface-container-low">
        <div className="site-container py-20 md:py-28">
          <aside aria-label="Bài viết liên quan">
            <Suspense>
              <MorePosts skip={post._id} limit={2} />
            </Suspense>
          </aside>
        </div>
      </section>
    </>
  )
}
