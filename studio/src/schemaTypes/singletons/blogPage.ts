import {Newspaper} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  icon: Newspaper,
  fields: [
    defineField({name: 'name', type: 'string', initialValue: 'Blog', validation: (rule) => rule.required()}),
    defineField({name: 'seo', type: 'seo'}),
    defineField({name: 'pageBuilder', type: 'pageBuilder', validation: (rule) => rule.required().min(1)}),
  ],
  preview: {prepare: () => ({title: 'Blog Page'})},
})
