import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'

import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery, allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import OnBoarding from '@/app/components/Onboarding'
import {dataAttr} from '@/sanity/lib/utils'
import Image from './SanityImage'

const Post = ({post}: {post: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, coverImage} = post

  return (
    <article
      className="group h-full overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      <Link className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href={`/posts/${slug}`}>
        <div
          className="relative aspect-[16/10] overflow-hidden bg-secondary-container"
          data-sanity={dataAttr({id: _id, type: 'post', path: 'coverImage'}).toString()}
        >
          {coverImage?.asset?._ref ? (
            <Image
              id={coverImage.asset._ref}
              alt={coverImage.alt || ''}
              width={720}
              mode="cover"
              crop={coverImage.crop}
              hotspot={coverImage.hotspot}
              className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="grain grid size-full place-items-center text-6xl font-extrabold text-on-secondary-container/25" aria-hidden="true">Tổ</div>
          )}
          <span className="eyebrow absolute left-5 top-5 rounded-full bg-surface/90 px-3 py-2 text-primary backdrop-blur-sm">Tổ ghi chép</span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <time className="eyebrow text-primary" dateTime={date}>
            <DateComponent dateString={date} />
          </time>
          <h3
            className="mt-3 text-2xl font-bold leading-tight tracking-[-0.025em] text-on-surface transition-colors group-hover:text-primary sm:text-3xl"
            data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
          >
            {title || 'Bài viết chưa có tiêu đề'}
          </h3>
          <p
            className="mt-4 line-clamp-3 text-base leading-7 text-on-surface-variant"
            data-sanity={dataAttr({id: _id, type: 'post', path: 'excerpt'}).toString()}
          >
            {excerpt || 'Một câu chuyện mới từ Tổ đang được hoàn thiện.'}
          </p>
          <span className="mt-8 inline-flex items-center gap-2 border-t border-outline-variant pt-5 text-sm font-bold text-primary">
            Đọc câu chuyện
            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  )
}

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode
  heading?: string
  subHeading?: string
}) => (
  <div>
    {heading && <h2 className="text-3xl text-primary sm:text-4xl lg:text-5xl">{heading}</h2>}
    {subHeading && <p className="mt-2 text-lg leading-8 text-on-surface-variant">{subHeading}</p>}
    <div className="grid gap-6 pt-10 md:grid-cols-2">{children}</div>
  </div>
)

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Posts heading="Đọc tiếp ở Tổ">
      {data?.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}

export const AllPosts = async () => {
  const {data} = await sanityFetch({query: allPostsQuery})

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Posts
      heading="Recent Posts"
      subHeading={`${data.length === 1 ? 'This blog post is' : `These ${data.length} blog posts are`} populated from your Sanity Studio.`}
    >
      {data.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}
