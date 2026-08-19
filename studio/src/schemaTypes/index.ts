import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
import {accessibleImage} from './objects/accessibleImage'
import {seo} from './objects/seo'
import {
  announcementTickerBlock,
  availabilityBlock,
  callToActionBlock,
  eventsBlock,
  featureGridBlock,
  heroBlock,
  locationsBlock,
  mediaFeatureBlock,
  menuCatalogBlock,
  menuHighlightsBlock,
  pageBuilder,
  productsBlock,
  postListBlock,
  richTextBlock,
  splitStoryBlock,
  timelineBlock,
} from './objects/pageBlocks'
import {event, location, menuCategory, menuItem, product} from './documents/marketing'
import {homePage} from './singletons/homePage'
import {blogPage} from './singletons/blogPage'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/studio/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  homePage,
  blogPage,
  // Documents
  page,
  post,
  person,
  location,
  menuCategory,
  menuItem,
  event,
  product,
  // Objects
  button,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
  accessibleImage,
  seo,
  pageBuilder,
  heroBlock,
  announcementTickerBlock,
  menuHighlightsBlock,
  menuCatalogBlock,
  locationsBlock,
  eventsBlock,
  mediaFeatureBlock,
  featureGridBlock,
  availabilityBlock,
  splitStoryBlock,
  timelineBlock,
  productsBlock,
  postListBlock,
  callToActionBlock,
  richTextBlock,
]
