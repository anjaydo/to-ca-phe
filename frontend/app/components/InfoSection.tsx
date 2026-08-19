import {type PortableTextBlock} from 'next-sanity'

import PortableText from '@/app/components/PortableText'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type InfoProps = {
  block: ExtractPageBuilderType<'infoSection'> | ExtractPageBuilderType<'richTextBlock'>
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageId: string
  pageType: string
}

export default function CTA({block}: InfoProps) {
  const subheading = block._type === 'richTextBlock' ? block.intro : block.subheading
  return (
    <div className="container my-12">
      <div className="max-w-3xl">
        {block?.heading && <h2 className="text-2xl text-primary md:text-3xl lg:text-4xl">{block.heading}</h2>}
        {subheading && (
          <span className="mb-8 mt-4 block text-lg font-light uppercase text-on-surface-variant">
            {subheading}
          </span>
        )}
        <div className="mt-4">
          {block?.content?.length && (
            <PortableText className="" value={block.content as PortableTextBlock[]} />
          )}
        </div>
      </div>
    </div>
  )
}
