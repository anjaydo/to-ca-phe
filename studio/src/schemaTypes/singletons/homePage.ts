import {Home} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: Home,
  fields: [
    defineField({name: 'name', type: 'string', initialValue: 'Home', validation: (rule) => rule.required()}),
    defineField({name: 'seo', type: 'seo'}),
    defineField({name: 'pageBuilder', type: 'pageBuilder', validation: (rule) => rule.required().min(1)}),
  ],
  preview: {prepare: () => ({title: 'Home Page'})},
})
