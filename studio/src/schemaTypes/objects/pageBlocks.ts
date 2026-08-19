import {
  AlignLeft,
  CalendarDays,
  Clock3,
  Coffee,
  GalleryHorizontal,
  Grid2X2,
  Image as ImageIcon,
  Lightbulb,
  MapPin,
  Megaphone,
  Package,
  Newspaper,
  Rows3,
  SplitSquareVertical,
} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

const buttonField = (name = 'cta', title = 'Call to action') =>
  defineField({name, title, type: 'button'})

const sectionIntro = [
  defineField({name: 'eyebrow', type: 'string', validation: (rule) => rule.max(60)}),
  defineField({name: 'heading', type: 'string', validation: (rule) => rule.max(120)}),
  defineField({name: 'intro', type: 'text', rows: 3, validation: (rule) => rule.max(320)}),
]

const preview = (subtitle: string) => ({
  select: {title: 'heading', media: 'image'},
  prepare: ({title, media}: {title?: string; media?: any}) => ({title: title || `Untitled ${subtitle}`, subtitle, media}),
})

export const heroBlock = defineType({
  name: 'heroBlock', title: 'Hero', type: 'object', icon: GalleryHorizontal,
  fields: [
    defineField({name: 'variant', type: 'string', initialValue: 'standard', options: {layout: 'radio', list: [{title: 'Standard', value: 'standard'}, {title: 'Immersive', value: 'immersive'}]}, validation: (rule) => rule.required()}),
    defineField({name: 'eyebrow', type: 'string', validation: (rule) => rule.max(80)}),
    defineField({name: 'heading', type: 'text', rows: 2, validation: (rule) => rule.required().max(140)}),
    defineField({name: 'accentHeading', title: 'Accent heading', type: 'string', description: 'Optional emphasized final line.'}),
    defineField({name: 'description', type: 'text', rows: 3, validation: (rule) => rule.max(360)}),
    defineField({name: 'image', type: 'accessibleImage', hidden: ({parent}) => parent?.variant !== 'immersive'}),
    defineField({name: 'badge', type: 'string'}),
    buttonField('primaryCta', 'Primary call to action'),
    buttonField('secondaryCta', 'Secondary call to action'),
  ],
  preview: preview('Hero'),
})

export const announcementTickerBlock = defineType({
  name: 'announcementTickerBlock', title: 'Announcement ticker', type: 'object', icon: Megaphone,
  fields: [defineField({
    name: 'items',
    type: 'array',
    validation: (rule) => rule.required().min(1).max(8),
    of: [defineArrayMember({
      type: 'object',
      name: 'announcement',
      fields: [
        defineField({name: 'text', type: 'string', validation: (rule) => rule.required().max(100)}),
        defineField({name: 'link', type: 'link'}),
      ],
      preview: {select: {title: 'text'}},
    })],
  })],
  preview: {prepare: () => ({title: 'Announcement ticker', subtitle: 'Ticker'})},
})

export const menuHighlightsBlock = defineType({
  name: 'menuHighlightsBlock', title: 'Menu highlights', type: 'object', icon: Coffee,
  fields: [...sectionIntro, defineField({name: 'items', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'menuItem'}]})], validation: (rule) => rule.required().min(1).max(6)}), buttonField()],
  preview: preview('Menu highlights'),
})

export const menuCatalogBlock = defineType({
  name: 'menuCatalogBlock', title: 'Menu catalog', type: 'object', icon: Rows3,
  fields: [...sectionIntro, defineField({name: 'categories', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'menuCategory'}]})], validation: (rule) => rule.required().min(1)})],
  preview: preview('Menu catalog'),
})

export const locationsBlock = defineType({
  name: 'locationsBlock', title: 'Locations', type: 'object', icon: MapPin,
  fields: [...sectionIntro, defineField({name: 'variant', type: 'string', initialValue: 'cards', options: {layout: 'radio', list: [{title: 'Cards', value: 'cards'}, {title: 'Alternating details', value: 'alternatingDetails'}]}}), defineField({name: 'locations', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'location'}]})], validation: (rule) => rule.required().min(1)}), buttonField()],
  preview: preview('Locations'),
})

export const eventsBlock = defineType({
  name: 'eventsBlock', title: 'Events', type: 'object', icon: CalendarDays,
  fields: [...sectionIntro, defineField({name: 'selectionMode', type: 'string', initialValue: 'manual', options: {layout: 'radio', list: [{title: 'Manual selection', value: 'manual'}, {title: 'Upcoming events', value: 'upcoming'}]}}), defineField({name: 'events', type: 'array', hidden: ({parent}) => parent?.selectionMode === 'upcoming', of: [defineArrayMember({type: 'reference', to: [{type: 'event'}]})]}), defineField({name: 'limit', type: 'number', initialValue: 3, validation: (rule) => rule.min(1).max(12)}), buttonField()],
  preview: preview('Events'),
})

export const mediaFeatureBlock = defineType({
  name: 'mediaFeatureBlock', title: 'Media feature', type: 'object', icon: ImageIcon,
  fields: [...sectionIntro, defineField({name: 'image', type: 'accessibleImage', validation: (rule) => rule.required()}), defineField({name: 'badge', type: 'string'})],
  preview: preview('Media feature'),
})

export const featureGridBlock = defineType({
  name: 'featureGridBlock', title: 'Feature grid', type: 'object', icon: Grid2X2,
  fields: [...sectionIntro, defineField({name: 'variant', type: 'string', initialValue: 'cards', options: {layout: 'radio', list: [{title: 'Cards', value: 'cards'}, {title: 'Compact amenities', value: 'compactAmenities'}]}}), defineField({
    name: 'features',
    type: 'array',
    validation: (rule) => rule.required().min(1).max(8),
    of: [defineArrayMember({
      type: 'object',
      name: 'feature',
      fields: [
        defineField({name: 'icon', type: 'string', options: {list: ['square', 'users', 'sun', 'snowflake', 'wifi', 'cookie', 'plug', 'sparkles']}}),
        defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'description', type: 'text', rows: 2}),
      ],
      preview: {select: {title: 'title', subtitle: 'description'}},
    })],
  })],
  preview: preview('Feature grid'),
})

export const availabilityBlock = defineType({
  name: 'availabilityBlock', title: 'Availability', type: 'object', icon: Clock3,
  fields: [...sectionIntro, defineField({name: 'image', type: 'accessibleImage'}), defineField({name: 'location', type: 'reference', to: [{type: 'location'}]}), defineField({name: 'percent', type: 'number', validation: (rule) => rule.required().min(0).max(100)}), defineField({name: 'lowLabel', type: 'string'}), defineField({name: 'highLabel', type: 'string'}), buttonField()],
  preview: preview('Availability'),
})

export const splitStoryBlock = defineType({
  name: 'splitStoryBlock', title: 'Split story', type: 'object', icon: SplitSquareVertical,
  fields: [...sectionIntro, defineField({name: 'theme', type: 'string', initialValue: 'surface', options: {layout: 'radio', list: [{title: 'Surface', value: 'surface'}, {title: 'Secondary', value: 'secondary'}]}}), defineField({name: 'primaryImage', type: 'accessibleImage'}), defineField({name: 'secondaryImage', type: 'accessibleImage'}), buttonField()],
  preview: preview('Split story'),
})

export const timelineBlock = defineType({
  name: 'timelineBlock', title: 'Timeline', type: 'object', icon: Rows3,
  fields: [...sectionIntro, defineField({
    name: 'milestones',
    type: 'array',
    validation: (rule) => rule.required().min(1),
    of: [defineArrayMember({
      type: 'object',
      name: 'milestone',
      fields: [
        defineField({name: 'dateLabel', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'body', type: 'text', rows: 4}),
        defineField({name: 'image', type: 'accessibleImage', validation: (rule) => rule.required()}),
      ],
      preview: {select: {title: 'title', subtitle: 'dateLabel', media: 'image'}},
    })],
  })],
  preview: preview('Timeline'),
})

export const productsBlock = defineType({
  name: 'productsBlock', title: 'Products', type: 'object', icon: Package,
  fields: [...sectionIntro, defineField({name: 'products', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'product'}]})], validation: (rule) => rule.required().min(1)})],
  preview: preview('Products'),
})

export const postListBlock = defineType({
  name: 'postListBlock',
  title: 'Blog posts',
  type: 'object',
  icon: Newspaper,
  fields: [
    ...sectionIntro,
    defineField({
      name: 'selectionMode',
      title: 'Post selection',
      type: 'string',
      initialValue: 'latest',
      options: {
        layout: 'radio',
        list: [
          {title: 'Latest posts', value: 'latest'},
          {title: 'Manual selection', value: 'manual'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'posts',
      type: 'array',
      hidden: ({parent}) => parent?.selectionMode !== 'manual',
      of: [defineArrayMember({type: 'reference', to: [{type: 'post'}]})],
      validation: (rule) => rule.unique().max(12),
    }),
    defineField({
      name: 'limit',
      title: 'Maximum posts',
      type: 'number',
      initialValue: 9,
      validation: (rule) => rule.required().integer().min(1).max(12),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      initialValue: 'editorialGrid',
      options: {
        layout: 'radio',
        list: [
          {title: 'Editorial grid', value: 'editorialGrid'},
          {title: 'Compact list', value: 'compactList'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: preview('Blog posts'),
})

export const callToActionBlock = defineType({
  name: 'callToActionBlock', title: 'Call to action', type: 'object', icon: Lightbulb,
  fields: [...sectionIntro, defineField({name: 'theme', type: 'string', initialValue: 'secondary', options: {layout: 'radio', list: [{title: 'Surface', value: 'surface'}, {title: 'Secondary', value: 'secondary'}, {title: 'Dark', value: 'dark'}]}}), defineField({name: 'image', type: 'accessibleImage'}), buttonField()],
  preview: preview('Call to action'),
})

export const richTextBlock = defineType({
  name: 'richTextBlock', title: 'Rich text', type: 'object', icon: AlignLeft,
  fields: [...sectionIntro, defineField({name: 'content', type: 'blockContent'})],
  preview: preview('Rich text'),
})

export const pageBuilder = defineType({
  name: 'pageBuilder', title: 'Page builder', type: 'array',
  of: [
    ...[heroBlock, announcementTickerBlock, menuHighlightsBlock, menuCatalogBlock, locationsBlock, eventsBlock, mediaFeatureBlock, featureGridBlock, availabilityBlock, splitStoryBlock, timelineBlock, productsBlock, postListBlock, callToActionBlock, richTextBlock].map((block) => defineArrayMember({type: block.name})),
    defineArrayMember({type: 'callToAction', title: 'Call to Action (Legacy)'}),
    defineArrayMember({type: 'infoSection', title: 'Info Section (Legacy)'}),
  ],
  options: {insertMenu: {views: [{name: 'grid', previewImageUrl: (type) => ['callToAction', 'infoSection'].includes(type) ? `/static/page-builder-thumbnails/${type}.webp` : '/static/page-builder-thumbnails/pageBuilder.svg'}]}},
})
