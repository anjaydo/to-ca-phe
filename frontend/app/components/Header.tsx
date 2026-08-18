import Link from 'next/link'
import type {ReactNode} from 'react'

const navigation = [
  ['Spaces', '/spaces'],
  ['Work', '/coworking'],
  ['Menu', '/menu'],
  ['Journey', '/journey'],
  ['Shop', '/merchandise'],
]

export default function Header({themeToggle}: {themeToggle: ReactNode}) {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/90 backdrop-blur-xl">
      <div className="site-container flex min-h-20 flex-wrap items-center justify-between gap-x-5 py-3 lg:flex-nowrap lg:py-0">
        <Link href="/" className="flex items-center gap-3 text-primary" aria-label="Tổ Cà Phê — home">
          <span className="grid size-10 place-items-center rounded-full border border-primary text-lg font-extrabold text-primary">Tổ</span>
          <span className="text-lg font-bold tracking-tight sm:text-xl">Tổ Cà Phê</span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 flex w-full gap-6 overflow-x-auto border-t border-outline-variant pt-3 lg:order-none lg:w-auto lg:border-0 lg:pt-0">
          {navigation.map(([label, href]) => (
            <Link key={label} href={href} className="eyebrow text-on-surface-variant transition-colors hover:text-primary">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="eyebrow hidden rounded-full border border-primary/40 px-3 py-2 text-primary md:inline-flex">
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-primary" /> Live seats: 85%
          </span>
          {themeToggle}
          <Link href="/spaces" className="rounded-2xl bg-tertiary-container px-5 py-3 text-xs font-bold uppercase tracking-wider text-on-tertiary-container transition hover:brightness-110">Book now</Link>
        </div>
      </div>
    </header>
  )
}
