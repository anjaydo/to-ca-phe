import {defineField, defineType} from 'sanity'
import {Search} from 'lucide-react'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: Search,
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      validation: (rule) => rule.max(60).warning('Search results may truncate titles over 60 characters.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160).warning('Search results may truncate descriptions over 160 characters.'),
    }),
    defineField({name: 'openGraphImage', title: 'Open Graph image', type: 'accessibleImage'}),
  ],
})
