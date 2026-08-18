import type {ReactNode} from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  aside?: ReactNode
}

export default function PageHero({eyebrow, title, description, aside}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-outline-variant bg-surface py-20 md:py-28">
      <div className="grain absolute inset-0 opacity-20" />
      <div className="absolute -right-20 -top-32 size-96 rounded-full border border-primary/10" />
      <div className="site-container relative grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow text-primary">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.92] tracking-[-.055em] text-primary">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-on-surface-variant">{description}</p>
        </div>
        {aside}
      </div>
    </header>
  )
}
