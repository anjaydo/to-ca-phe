import {stegaClean} from '@sanity/client/stega'
import {
  ArrowRight,
  ArrowUpRight,
  Cookie,
  PlugZap,
  Snowflake,
  Sparkles,
  Square,
  Sun,
  UsersRound,
  Wifi,
} from 'lucide-react'
import Link from 'next/link'
import type {ComponentType} from 'react'

import Cta from '@/app/components/Cta'
import Info from '@/app/components/InfoSection'
import ResolvedLink from '@/app/components/ResolvedLink'
import Image from '@/app/components/SanityImage'
import {dataAttr} from '@/sanity/lib/utils'
import type {DereferencedLink, ExtractPageBuilderType, PageBuilderSection} from '@/sanity/lib/types'
import type {AccessibleImage, Post} from '@/sanity.types'

type BlockProps = {index: number; block: PageBuilderSection; pageId: string; pageType: string}
type ButtonValue = {buttonText?: string; link?: DereferencedLink | null} | null | undefined
type ImageValue = AccessibleImage | Post['coverImage'] | null | undefined

function SanityPicture({
  image,
  className,
  width = 1400,
}: {
  image: ImageValue
  className?: string
  width?: number
}) {
  const id = image?.asset?._ref
  if (!id) return null
  return (
    <Image
      id={id}
      alt={image.alt || ''}
      width={width}
      crop={image.crop}
      hotspot={image.hotspot}
      mode="cover"
      className={className}
    />
  )
}

function Action({button, className = 'button-primary'}: {button: ButtonValue; className?: string}) {
  if (!button?.buttonText || !button.link) return null
  return (
    <ResolvedLink link={button.link} className={className}>
      {button.buttonText}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </ResolvedLink>
  )
}

function SectionHeading({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow?: string
  heading?: string
  intro?: string
}) {
  return (
    <div>
      {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
      {heading && <h2 className="section-title mt-3 whitespace-pre-line">{heading}</h2>}
      {intro && <p className="mt-5 max-w-xl leading-7 text-on-surface-variant">{intro}</p>}
    </div>
  )
}

function Hero({block}: {block: ExtractPageBuilderType<'heroBlock'>}) {
  if (stegaClean(block.variant) === 'immersive') {
    return (
      <header className="hero relative flex h-[100dvh] items-center justify-center overflow-hidden border-b border-primary/50 px-5 py-24 md:min-h-[calc(100svh-81px)]">
        <div className="absolute inset-0">
          <SanityPicture image={block.image} className="size-full object-cover" width={2000} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,18,.55),rgba(10,31,18,.8))]" />
        <div className="grain absolute inset-0 opacity-25" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          {block.eyebrow && (
            <span className="eyebrow mb-7 rounded-full border border-secondary-fixed/50 bg-on-primary-fixed/75 px-4 py-2 text-secondary-fixed backdrop-blur-sm">
              {block.eyebrow}
            </span>
          )}
          <h1 className="max-w-5xl whitespace-pre-line text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.94] tracking-[-.055em] text-primary-fixed">
            {block.heading}
            {block.accentHeading && (
              <span className="block text-secondary-fixed">{block.accentHeading}</span>
            )}
          </h1>
          {block.description && (
            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-fixed-dim md:text-xl md:leading-8">
              {block.description}
            </p>
          )}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Action button={block.primaryCta} />
            <Action button={block.secondaryCta} className="button-secondary" />
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="relative overflow-hidden border-b border-outline-variant bg-surface py-20 md:py-28">
      <div className="grain absolute inset-0 opacity-20" />
      <div className="site-container relative grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <div>
          {block.eyebrow && <p className="eyebrow text-primary">{block.eyebrow}</p>}
          <h1 className="mt-5 max-w-5xl whitespace-pre-line text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.92] tracking-[-.055em] text-primary">
            {block.heading}
            {block.accentHeading && (
              <span className="block text-secondary">{block.accentHeading}</span>
            )}
          </h1>
          {block.description && (
            <p className="mt-7 max-w-2xl text-lg leading-8 text-on-surface-variant">
              {block.description}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          {block.badge && (
            <span className="eyebrow rounded-full bg-secondary-container px-4 py-2 text-on-secondary-container">
              {block.badge}
            </span>
          )}
          <Action button={block.primaryCta} />
          <Action button={block.secondaryCta} className="button-secondary" />
        </div>
      </div>
    </header>
  )
}

function Ticker({block}: {block: ExtractPageBuilderType<'announcementTickerBlock'>}) {
  return (
    <div className="marquee border-b border-secondary-container/25 bg-secondary-container py-3 text-on-secondary-container -translate-y-10">
      <div className="marquee-track eyebrow flex w-max gap-10 whitespace-nowrap">
        {[0, 1, 2].map((group) => (
          <div className="flex gap-10" key={group} aria-hidden={group === 1}>
            {block.items?.map(
              (item) =>
                item?.text && (
                  <span key={`${group}-${item._key}`} className="inline-flex items-center gap-2">
                    <Sparkles aria-hidden="true" className="size-3.5" />
                    {item.link ? (
                      <ResolvedLink link={item.link}>{item.text}</ResolvedLink>
                    ) : (
                      item.text
                    )}
                  </span>
                ),
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MenuHighlights({block}: {block: ExtractPageBuilderType<'menuHighlightsBlock'>}) {
  return (
    <section className="site-container py-20 md:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <SectionHeading {...block} />
        <Action
          button={block.cta}
          className="text-link hidden items-center gap-1.5 sm:inline-flex"
        />
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {block.items?.map(
          (item, index) =>
            item && (
              index === 0 ? (<article
                key={item._id}
                className={`group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-highest ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}
              >
                <div
                  className={`relative flex justify-center overflow-hidden items-center min-h-80 lg:h-full max-w-full aspect-[4/3] lg:aspect-square overflow-hidden ${index === 0 ? 'lg:min-h-[400px]' : ''}`}
                >
                  <SanityPicture
                    image={item.image}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-56 flex-col justify-between p-7">
                  <div>
                    <p className="eyebrow text-primary">{item.category}</p>
                    <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="mt-3 leading-7 text-on-surface-variant">{item.description}</p>
                    )}
                  </div>
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {item.priceLabel ||
                        (item.price ? `${item.price.toLocaleString('vi-VN')}đ` : '')}
                    </span>
                    <span className="grid size-11 place-items-center rounded-full bg-secondary-container text-xl text-on-secondary-container">
                      ＋
                    </span>
                  </div>
                </div>
              </article>) : (<article
                key={item._id}
                className={`group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-highest ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}
              >
                <div
                  className={`relative flex justify-center overflow-hidden items-center min-h-80 aspect-[4/3] overflow-hidden`}
                >
                  <SanityPicture
                    image={item.image}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-56 flex-col justify-between p-7">
                  <div>
                    <p className="eyebrow text-primary">{item.category}</p>
                    <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="mt-3 leading-7 text-on-surface-variant">{item.description}</p>
                    )}
                  </div>
                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      {item.priceLabel ||
                        (item.price ? `${item.price.toLocaleString('vi-VN')}đ` : '')}
                    </span>
                    <span className="grid size-11 place-items-center rounded-full bg-secondary-container text-xl text-on-secondary-container">
                      ＋
                    </span>
                  </div>
                </div>
              </article>)
            ),
        )}
      </div>
    </section>
  )
}

function MenuCatalog({block}: {block: ExtractPageBuilderType<'menuCatalogBlock'>}) {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low py-20 md:py-28">
      <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading {...block} />
        <div className="divide-y divide-outline-variant border-y border-outline-variant">
          {block.categories?.map(
            (category) =>
              category && (
                <div key={category._id} className="py-6">
                  <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {category.items?.map((item) => (
                      <div key={item._id} className="flex justify-between gap-4 text-sm">
                        <span>{item.name}</span>
                        <span className="font-semibold text-primary">
                          {item.priceLabel ||
                            (item.price ? `${item.price.toLocaleString('vi-VN')}đ` : '')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  )
}

function Locations({block}: {block: ExtractPageBuilderType<'locationsBlock'>}) {
  const detailed = stegaClean(block.variant) === 'alternatingDetails'
  return (
    <section
      className={
        detailed
          ? 'site-container py-20 md:py-28'
          : 'border-y border-outline-variant bg-surface-container-low py-20 md:py-28'
      }
    >
      <div className={detailed ? '' : 'site-container'}>
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading {...block} />
          <Action
            button={block.cta}
            className="text-link hidden items-center gap-1.5 sm:inline-flex"
          />
        </div>
        <div className={detailed ? 'space-y-20 md:space-y-28' : 'grid gap-5 md:grid-cols-3'}>
          {block.locations?.map(
            (location, index) =>
              location &&
              (detailed ? (
                <article
                  key={location._id}
                  className="grid items-center gap-9 md:grid-cols-12 md:gap-14"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant md:col-span-7 ${index % 2 ? 'md:order-2' : ''}`}
                  >
                    <SanityPicture image={location.image} className="size-full object-cover" />
                  </div>
                  <div className={`md:col-span-5 ${index % 2 ? 'md:order-1' : ''}`}>
                    <p className="eyebrow text-primary">{location.label}</p>
                    <h3 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                      {location.name}
                    </h3>
                    <p className="mt-5 leading-7 text-on-surface-variant">
                      {location.description || location.shortDescription}
                    </p>
                    <p className="eyebrow mt-6 text-primary">{location.hours}</p>
                  </div>
                </article>
              ) : (
                <article key={location._id} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-outline-variant">
                    <SanityPicture
                      image={location.image}
                      className="size-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07170c] via-transparent to-transparent" />
                    <span className="eyebrow absolute left-5 top-5 rounded-full bg-on-primary-fixed/70 px-3 py-1.5 text-primary-fixed">
                      0{index + 1}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="eyebrow text-secondary-fixed">{location.hours}</span>
                      <h3 className="mt-2 text-2xl font-bold text-primary-fixed">
                        {location.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-primary-fixed-dim">
                        {location.shortDescription}
                      </p>
                    </div>
                  </div>
                </article>
              )),
          )}
        </div>
      </div>
    </section>
  )
}

function Events({block}: {block: ExtractPageBuilderType<'eventsBlock'>}) {
  return (
    <section className="site-container py-20 md:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <SectionHeading {...block} />
        <Action
          button={block.cta}
          className="text-link hidden items-center gap-1.5 sm:inline-flex"
        />
      </div>
      <div className="divide-y divide-outline-variant border-y border-outline-variant">
        {block.events?.slice(0, block.limit || 3).map(
          (event) =>
            event && (
              <article
                key={event._id}
                className="event-row group grid items-center gap-5 py-5 md:grid-cols-[100px_1fr_220px] md:py-7"
              >
                <div>
                  <span className="eyebrow text-primary">{event.category}</span>
                  <p className="mt-1 text-xl font-semibold">{event.dateLabel}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary md:text-3xl">{event.name}</h3>
                  <p className="mt-2 text-on-surface-variant">{event.description}</p>
                </div>
                <div className="aspect-[5/3] overflow-hidden rounded-md">
                  <SanityPicture
                    image={event.image}
                    className="size-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    width={600}
                  />
                </div>
              </article>
            ),
        )}
      </div>
    </section>
  )
}

function MediaFeature({block}: {block: ExtractPageBuilderType<'mediaFeatureBlock'>}) {
  return (
    <section className="site-container py-16 md:py-24">
      <div className="relative aspect-[16/9] min-h-[440px] overflow-hidden rounded-xl border border-outline-variant">
        <SanityPicture image={block.image} className="size-full object-cover" width={1800} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06140b]/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-primary-fixed">
          <p className="eyebrow">{block.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold">{block.heading}</h2>
          {block.badge && (
            <span className="eyebrow mt-4 inline-flex rounded-full bg-secondary-fixed px-4 py-2 text-on-secondary-fixed">
              {block.badge}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

const iconMap = {
  square: Square,
  users: UsersRound,
  sun: Sun,
  snowflake: Snowflake,
  wifi: Wifi,
  cookie: Cookie,
  plug: PlugZap,
  sparkles: Sparkles,
} satisfies Record<string, ComponentType<{'className'?: string; 'aria-hidden'?: boolean}>>

function FeatureGrid({block}: {block: ExtractPageBuilderType<'featureGridBlock'>}) {
  const compact = stegaClean(block.variant) === 'compactAmenities'
  return (
    <section
      className={
        compact
          ? 'border-t border-outline-variant bg-surface-container-highest py-20'
          : 'border-y border-outline-variant bg-surface-container-low py-20 md:py-28'
      }
    >
      <div className="site-container">
        <SectionHeading {...block} />
        <div
          className={`mt-12 grid ${compact ? 'gap-px overflow-hidden rounded-xl border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-4' : 'gap-4 md:grid-cols-3'}`}
        >
          {block.features?.map((feature) => {
            const Icon = iconMap[stegaClean(feature.icon || 'sparkles')] || Sparkles
            return (
              <article
                key={feature._key}
                className={compact ? 'bg-surface-container p-7' : 'bento-card min-h-72 p-7'}
              >
                <Icon aria-hidden className="size-8 text-primary" />
                <h3
                  className={
                    compact
                      ? 'mt-8 font-bold text-primary'
                      : 'mt-16 text-2xl font-bold text-primary'
                  }
                >
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Availability({block}: {block: ExtractPageBuilderType<'availabilityBlock'>}) {
  const percent = Math.max(0, Math.min(100, Number(stegaClean(block.percent))))
  return (
    <section className="site-container py-20 md:py-28">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="min-h-[480px] overflow-hidden rounded-xl border border-outline-variant lg:col-span-7">
          <SanityPicture
            image={block.image || block.location?.image}
            className="size-full object-cover"
          />
        </div>
        <div className="bento-card flex flex-col justify-between p-8 lg:col-span-5">
          <SectionHeading {...block} />
          <div className="mt-12">
            <div className="h-3 overflow-hidden rounded-full bg-surface-container-highest">
              <div className="h-full rounded-full bg-brand-matcha" style={{width: `${percent}%`}} />
            </div>
            <div className="eyebrow mt-3 flex justify-between text-on-surface-variant">
              <span>{block.lowLabel}</span>
              <span>{percent}%</span>
              <span>{block.highLabel}</span>
            </div>
            <Action button={block.cta} className="button-primary mt-8 w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SplitStory({block}: {block: ExtractPageBuilderType<'splitStoryBlock'>}) {
  const secondary = stegaClean(block.theme) === 'secondary'
  return (
    <section className="site-container py-20 md:py-28">
      <div className="grid overflow-hidden rounded-xl border border-outline-variant lg:grid-cols-2">
        <div
          className={`flex flex-col justify-center p-8 md:p-12 ${secondary ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-highest'}`}
        >
          <SectionHeading {...block} />
          <Action button={block.cta} className="button-primary mt-8 self-start" />
        </div>
        {block.primaryImage?.asset?._ref && (
          <div
            className={`grid min-h-[420px] ${block.secondaryImage?.asset?._ref ? 'grid-cols-2' : ''}`}
          >
            <SanityPicture image={block.primaryImage} className="size-full object-cover" />
            {block.secondaryImage?.asset?._ref && (
              <SanityPicture image={block.secondaryImage} className="size-full object-cover" />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function Timeline({block}: {block: ExtractPageBuilderType<'timelineBlock'>}) {
  return (
    <section className="site-container py-20 md:py-28">
      <SectionHeading {...block} />
      <div className="relative mt-12 space-y-20 md:space-y-28">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-primary/25 md:left-1/2" />
        {block.milestones?.map((item, index) => (
          <article
            key={item._key}
            className="relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
          >
            <span className="absolute left-1 top-1 grid size-7 place-items-center rounded-full border border-primary bg-surface text-primary md:left-1/2 md:-translate-x-1/2">
              <Sparkles aria-hidden className="size-3.5" />
            </span>
            <div
              className={`aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant ${index % 2 ? 'md:order-2' : ''}`}
            >
              <SanityPicture image={item.image} className="size-full object-cover" />
            </div>
            <div
              className={`flex flex-col justify-center ${index % 2 ? 'md:order-1 md:text-right' : ''}`}
            >
              <p className="eyebrow text-primary">{item.dateLabel}</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{item.title}</h3>
              <p className="mt-5 leading-7 text-on-surface-variant">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Products({block}: {block: ExtractPageBuilderType<'productsBlock'>}) {
  return (
    <section className="site-container space-y-24 py-20 md:space-y-36 md:py-28">
      <SectionHeading {...block} />
      {block.products?.map(
        (product, index) =>
          product && (
            <article
              key={product._id}
              className="grid items-center gap-9 md:grid-cols-12 md:gap-14"
            >
              <div
                className={`aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant md:col-span-7 ${index % 2 ? 'md:order-2' : ''}`}
              >
                <SanityPicture image={product.image} className="size-full object-cover" />
              </div>
              <div className={`md:col-span-5 ${index % 2 ? 'md:order-1' : ''}`}>
                <p className="eyebrow inline-flex rounded-full bg-secondary-container px-3 py-1.5 text-on-secondary-container">
                  {product.label}
                </p>
                <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  {product.name}
                </h3>
                <p className="mt-5 leading-7 text-on-surface-variant">{product.description}</p>
                <div className="mt-7 flex items-center gap-6">
                  <span className="text-xl font-bold text-primary">
                    {product.priceLabel ||
                      (product.price ? `${product.price.toLocaleString('vi-VN')}đ` : '')}
                  </span>
                  {product.ctaLabel && product.ctaLink && (
                    <ResolvedLink link={product.ctaLink} className="button-secondary gap-2">
                      {product.ctaLabel}
                      <ArrowRight aria-hidden className="size-4" />
                    </ResolvedLink>
                  )}
                </div>
              </div>
            </article>
          ),
      )}
    </section>
  )
}

function PostList({block}: {block: ExtractPageBuilderType<'postListBlock'>}) {
  const posts = block.posts?.filter(Boolean).slice(0, Number(stegaClean(block.limit || 9))) || []
  const compact = stegaClean(block.layout) === 'compactList'
  const formatDate = (value?: string) =>
    value
      ? new Intl.DateTimeFormat('vi-VN', {day: '2-digit', month: 'long', year: 'numeric'}).format(
          new Date(stegaClean(value)),
        )
      : ''

  return (
    <section className="site-container py-20 md:py-28">
      <SectionHeading {...block} />
      {posts.length ? (
        <div
          className={
            compact
              ? 'mt-12 divide-y divide-outline-variant border-y border-outline-variant'
              : 'mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'
          }
        >
          {posts.map((post, index) =>
            compact ? (
              <article
                key={post._id}
                className="group grid items-center gap-5 py-6 md:grid-cols-[120px_1fr_auto]"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-surface-container-highest">
                  <SanityPicture
                    image={post.coverImage}
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                    width={360}
                  />
                </div>
                <div>
                  <p className="eyebrow text-primary">{formatDate(post.date)}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-on-surface-variant">{post.excerpt}</p>
                </div>
                <Link
                  href={`/posts/${post.slug}`}
                  className="grid size-11 place-items-center rounded-full border border-outline-variant text-primary transition group-hover:bg-primary group-hover:text-on-primary"
                  aria-label={`Đọc ${post.title}`}
                >
                  <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </article>
            ) : (
              <article
                key={post._id}
                className={`group overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low ${index === 0 ? 'md:col-span-2 lg:grid lg:grid-cols-2' : ''}`}
              >
                <Link href={`/posts/${post.slug}`} className="block h-full">
                  <div
                    className={`aspect-[4/3] overflow-hidden bg-surface-container-highest ${index === 0 ? 'lg:aspect-auto lg:min-h-[520px]' : ''}`}
                  >
                    <SanityPicture
                      image={post.coverImage}
                      className="size-full object-cover transition duration-700 group-hover:scale-105"
                      width={index === 0 ? 1200 : 720}
                    />
                  </div>
                  <div className="flex min-h-64 flex-col justify-between p-7">
                    <div>
                      <p className="eyebrow text-primary">{formatDate(post.date)}</p>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-primary md:text-3xl">
                        {post.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 leading-7 text-on-surface-variant">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-link mt-8 inline-flex items-center gap-2">
                      Đọc câu chuyện <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ),
          )}
        </div>
      ) : (
        <p className="mt-10 rounded-xl border border-dashed border-outline-variant p-8 text-on-surface-variant">
          Chưa có bài viết để hiển thị.
        </p>
      )}
    </section>
  )
}

function CallToAction({block}: {block: ExtractPageBuilderType<'callToActionBlock'>}) {
  const theme = stegaClean(block.theme)
  const themeClass =
    theme === 'dark'
      ? 'bg-on-primary-fixed text-primary-fixed'
      : theme === 'surface'
        ? 'bg-surface-container-highest'
        : 'bg-secondary-container text-on-secondary-container'
  return (
    <section className={`border-t border-outline-variant px-5 py-20 md:py-28 ${themeClass}`}>
      <div className="mx-auto grid max-w-7xl items-end gap-10 md:grid-cols-[1fr_auto]">
        <SectionHeading {...block} />
        <Action button={block.cta} className="button-primary" />
      </div>
    </section>
  )
}

function RenderTypedBlock({block, index, pageId, pageType}: BlockProps) {
  switch (block._type) {
    case 'heroBlock':
      return <Hero block={block} />
    case 'announcementTickerBlock':
      return <Ticker block={block} />
    case 'menuHighlightsBlock':
      return <MenuHighlights block={block} />
    case 'menuCatalogBlock':
      return <MenuCatalog block={block} />
    case 'locationsBlock':
      return <Locations block={block} />
    case 'eventsBlock':
      return <Events block={block} />
    case 'mediaFeatureBlock':
      return <MediaFeature block={block} />
    case 'featureGridBlock':
      return <FeatureGrid block={block} />
    case 'availabilityBlock':
      return <Availability block={block} />
    case 'splitStoryBlock':
      return <SplitStory block={block} />
    case 'timelineBlock':
      return <Timeline block={block} />
    case 'productsBlock':
      return <Products block={block} />
    case 'postListBlock':
      return <PostList block={block} />
    case 'callToActionBlock':
      return <CallToAction block={block} />
    case 'richTextBlock':
      return <Info block={block} index={index} pageId={pageId} pageType={pageType} />
    case 'callToAction':
      return <Cta block={block} index={index} pageId={pageId} pageType={pageType} />
    case 'infoSection':
      return <Info block={block} index={index} pageId={pageId} pageType={pageType} />
    default:
      return (
        <div className="site-container my-8 rounded bg-surface-container p-8 text-center">
          Unsupported block
        </div>
      )
  }
}

export default function BlockRenderer(props: BlockProps) {
  const {block, pageId, pageType} = props
  return (
    <div
      data-sanity={dataAttr({
        id: pageId,
        type: pageType,
        path: `pageBuilder[_key=="${block._key}"]`,
      }).toString()}
    >
      <RenderTypedBlock {...props} />
    </div>
  )
}
