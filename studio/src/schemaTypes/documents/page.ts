import {defineField, defineType} from 'sanity'
import {File} from 'lucide-react'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/studio/schema-types
 */

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: File,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().custom((value) => {
        const slug = value?.current
        return slug && ['api', 'posts', 'patterns'].includes(slug)
          ? 'This slug is reserved by the application.'
          : true
      }),
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      deprecated: {reason: 'Use a Hero block in Page builder instead.'},
      readOnly: true,
      hidden: ({value}) => value === undefined,
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      deprecated: {reason: 'Use a Hero block in Page builder instead.'},
      readOnly: true,
      hidden: ({value}) => value === undefined,
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'pageBuilder',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'migrationKey', type: 'string', readOnly: true, hidden: ({value}) => !value}),
  ],
})
