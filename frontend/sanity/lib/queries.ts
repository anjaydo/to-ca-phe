import {defineQuery} from 'next-sanity'

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`

const buttonFields = /* groq */ `
  ...,
  link {
    ...,
    ${linkReference}
  }
`

const pageBuilderFields = /* groq */ `
  _key,
  _type,
  ...,
  primaryCta {${buttonFields}},
  secondaryCta {${buttonFields}},
  cta {${buttonFields}},
  _type == "announcementTickerBlock" => {
    items[]{..., link{..., ${linkReference}}}
  },
  _type == "menuHighlightsBlock" => {
    "items": items[]-> {
      ...,
      "category": category->name
    }
  },
  locations[]->,
  _type == "eventsBlock" => {
    "events": select(
      selectionMode == "upcoming" => *[_type == "event" && (!defined(startsAt) || startsAt >= now())] | order(startsAt asc)[0...12],
      events[]->
    )
  },
  _type == "postListBlock" => {
    "posts": select(
      selectionMode == "manual" => posts[]->{${postFields}},
      *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc)[0...12]{${postFields}}
    )
  },
  categories[]-> {
    ...,
    "items": *[_type == "menuItem" && category._ref == ^._id && status != "hidden"] | order(name asc)
  },
  location->,
  products[]->{..., ctaLink{..., ${linkReference}}},
  _type == "callToAction" => {
    ...,
    button {${buttonFields}}
  },
  _type == "infoSection" => {
    ...,
    content[]{..., markDefs[]{..., ${linkReference}}}
  }
`

export const settingsQuery = defineQuery(`
  *[_type == "settings" && _id == "siteSettings"][0]{
    ...,
    navigation[]{..., link{..., ${linkReference}}},
    headerCta{${buttonFields}},
    footerGroups[]{..., links[]{..., link{..., ${linkReference}}}},
    footerLocations[]->{_id, name, address, slug}
  }
`)

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    seo,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{${pageBuilderFields}},
  }
`)

export const getHomePageQuery = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0]{
    _id,
    _type,
    name,
    seo,
    "pageBuilder": pageBuilder[]{${pageBuilderFields}}
  }
`)

export const getBlogPageQuery = defineQuery(`
  *[_type == "blogPage" && _id == "blogPage"][0]{
    _id,
    _type,
    name,
    seo,
    "pageBuilder": pageBuilder[]{${pageBuilderFields}}
  }
`)

export const pageMetadataQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{name, seo}
`)

export const homeMetadataQuery = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0]{name, seo}
`)

export const blogMetadataQuery = defineQuery(`
  *[_type == "blogPage" && _id == "blogPage"][0]{name, seo}
`)

export const sitemapData = defineQuery(`
  *[(_type == "page" || _type == "post") && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`)

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`)

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)
