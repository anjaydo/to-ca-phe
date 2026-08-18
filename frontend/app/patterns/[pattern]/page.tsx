import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowLeft, ArrowRight} from 'lucide-react'

import PatternArtwork, {patternData, type PatternName} from '@/app/components/PatternArtwork'

const patternNames = Object.keys(patternData) as PatternName[]

export function generateStaticParams() {
  return patternNames.map((pattern) => ({pattern}))
}

export async function generateMetadata({
  params,
}: PageProps<'/patterns/[pattern]'>): Promise<Metadata> {
  const {pattern} = await params
  const entry = patternData[pattern as PatternName]
  return entry ? {title: entry.title, description: entry.description} : {}
}

export default async function PatternPage({params}: PageProps<'/patterns/[pattern]'>) {
  const {pattern} = await params
  if (!patternNames.includes(pattern as PatternName)) notFound()

  const name = pattern as PatternName
  const data = patternData[name]
  const current = patternNames.indexOf(name)
  const previous = patternNames[(current - 1 + patternNames.length) % patternNames.length]
  const next = patternNames[(current + 1) % patternNames.length]

  return (
    <main className="min-h-[calc(100svh-80px)]">
      <div className="grid min-h-[calc(100svh-80px)] lg:grid-cols-[.85fr_1.15fr]">
        <section className="flex flex-col justify-between border-b border-outline-variant p-7 md:p-12 lg:border-b-0 lg:border-r">
          <div>
            <p className="eyebrow text-primary">Tổ Visual System / Pattern 0{current + 1}</p>
            <h1 className="mt-6 text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-[.9] tracking-[-.055em]">
              {data.title}
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-on-surface-variant">
              {data.description}
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-3 gap-3">
              {['#154734', '#F5B800', '#FAF8F5'].map((color) => (
                <div key={color}>
                  <div
                    className="aspect-square rounded-lg border border-outline-variant"
                    style={{background: color}}
                  />
                  <p className="eyebrow mt-2 text-outline">{color}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-outline-variant pt-5">
              <Link
                href={`/patterns/${previous}`}
                className="text-link inline-flex items-center gap-1.5"
              >
                <ArrowLeft aria-hidden="true" className="size-4" /> Previous
              </Link>
              <Link
                href={`/patterns/${next}`}
                className="text-link inline-flex items-center gap-1.5"
              >
                Next <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </section>
        <section
          className="relative grid min-h-[60svh] place-items-center overflow-hidden p-8 md:p-16"
          style={{background: data.background}}
        >
          <PatternArtwork name={name} className="w-full max-w-3xl drop-shadow-2xl" />
          <p
            className={`eyebrow absolute bottom-6 right-6 ${name === 'electric-wave' ? 'text-secondary-fixed' : 'text-primary-container'}`}
          >
            Repeat tile · 100 × 100
          </p>
        </section>
      </div>
    </main>
  )
}
