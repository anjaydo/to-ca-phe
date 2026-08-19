import {defineField, defineType} from 'sanity'
import {Image as ImageIcon} from 'lucide-react'

export const accessibleImage = defineType({
  name: 'accessibleImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Describe the image for people using screen readers.',
      validation: (rule) => rule.required().max(160),
    }),
  ],
})
