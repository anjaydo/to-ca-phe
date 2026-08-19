import {CalendarDays, Coffee, MapPin, Package, Tags} from 'lucide-react'
import {defineField, defineType} from 'sanity'

const migrationKey = defineField({
  name: 'migrationKey',
  title: 'Migration key',
  type: 'string',
  readOnly: true,
  hidden: ({value}) => !value,
})

const slug = defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {source: 'name', maxLength: 96},
  validation: (rule) => rule.required(),
})

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: MapPin,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    slug,
    defineField({name: 'label', type: 'string'}),
    defineField({name: 'address', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'shortDescription', type: 'text', rows: 2}),
    defineField({name: 'description', type: 'text', rows: 4}),
    defineField({name: 'hours', type: 'string'}),
    defineField({name: 'image', type: 'accessibleImage', validation: (rule) => rule.required()}),
    defineField({name: 'bookingLink', type: 'link'}),
    defineField({name: 'availabilityLabel', type: 'string'}),
    defineField({name: 'availabilityPercent', type: 'number', validation: (rule) => rule.min(0).max(100)}),
    migrationKey,
  ],
  preview: {select: {title: 'name', subtitle: 'address', media: 'image'}},
})

export const menuCategory = defineType({
  name: 'menuCategory',
  title: 'Menu Category',
  type: 'document',
  icon: Tags,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    slug,
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({name: 'order', type: 'number', initialValue: 0}),
    migrationKey,
  ],
})

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  icon: Coffee,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    slug,
    defineField({name: 'category', type: 'reference', to: [{type: 'menuCategory'}], validation: (rule) => rule.required()}),
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({name: 'price', type: 'number', validation: (rule) => rule.min(0)}),
    defineField({name: 'priceLabel', type: 'string', description: 'Optional display override, for example “65k”.'}),
    defineField({name: 'image', type: 'accessibleImage'}),
    defineField({name: 'status', type: 'string', initialValue: 'available', options: {layout: 'radio', list: [{title: 'Available', value: 'available'}, {title: 'Hidden', value: 'hidden'}]}}),
    migrationKey,
  ],
  preview: {select: {title: 'name', subtitle: 'priceLabel', media: 'image'}},
})

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarDays,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    slug,
    defineField({name: 'category', type: 'string'}),
    defineField({name: 'dateLabel', type: 'string', description: 'Short editorial label, for example “23.08”.'}),
    defineField({name: 'startsAt', type: 'datetime'}),
    defineField({name: 'endsAt', type: 'datetime'}),
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({name: 'image', type: 'accessibleImage', validation: (rule) => rule.required()}),
    defineField({name: 'registrationLink', type: 'link'}),
    migrationKey,
  ],
  preview: {select: {title: 'name', subtitle: 'dateLabel', media: 'image'}},
})

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: Package,
  fields: [
    defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
    slug,
    defineField({name: 'label', type: 'string'}),
    defineField({name: 'description', type: 'text', rows: 4}),
    defineField({name: 'price', type: 'number', validation: (rule) => rule.min(0)}),
    defineField({name: 'priceLabel', type: 'string'}),
    defineField({name: 'image', type: 'accessibleImage', validation: (rule) => rule.required()}),
    defineField({name: 'ctaLabel', type: 'string'}),
    defineField({name: 'ctaLink', type: 'link'}),
    migrationKey,
  ],
  preview: {select: {title: 'name', subtitle: 'priceLabel', media: 'image'}},
})
