/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {PortableText, type PortableTextComponents, type PortableTextBlock} from 'next-sanity'
import {Link as LinkIcon} from 'lucide-react'
import ResolvedLink from '@/app/components/ResolvedLink'
import Image from '@/app/components/SanityImage'

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    types: {
      image: ({value}) => {
        if (!value?.asset?._ref) {
          return null
        }

        return (
          <figure className="my-8">
            <Image
              id={value.asset._ref}
              alt={value.alt || ''}
              width={672}
              crop={value.crop}
              mode="cover"
              className="rounded-sm"
            />
          </figure>
        )
      },
    },
    block: {
      h1: ({children, value}) => (
        // Add an anchor to the h1
        <h1 className="group relative">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <LinkIcon aria-hidden="true" className="size-4" />
          </a>
        </h1>
      ),
      h2: ({children, value}) => {
        // Add an anchor to the h2
        return (
          <h2 className="group relative">
            {children}
            <a
              href={`#${value?._key}`}
              className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <LinkIcon aria-hidden="true" className="size-4" />
            </a>
          </h2>
        )
      },
    },
    marks: {
      link: ({children, value: link}) => {
        return <ResolvedLink link={link}>{children}</ResolvedLink>
      },
    },
  }

  return (
    <div
      className={`prose prose-headings:text-primary prose-p:text-on-surface-variant prose-a:text-primary prose-strong:text-on-surface prose-li:text-on-surface-variant ${className ?? ''}`}
    >
      <PortableText components={components} value={value} />
    </div>
  )
}
