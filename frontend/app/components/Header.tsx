import Link from 'next/link'

const navigation = [
  ['Spaces', '/#spaces'],
  ['Menu', '/#menu'],
  ['Events', '/#events'],
  ['Journal', '/posts'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1f12]/90 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 text-[#faf9f4]" aria-label="Tổ Cà Phê — home">
          <span className="grid size-10 place-items-center rounded-full border border-[#d2f954] text-lg font-extrabold text-[#d2f954]">Tổ</span>
          <span className="text-lg font-bold tracking-tight sm:text-xl">Tổ Cà Phê</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map(([label, href]) => (
            <Link key={label} href={href} className="eyebrow text-[#c3c8c1] transition-colors hover:text-[#d2f954]">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="eyebrow hidden rounded-full border border-[#d2f954]/40 px-3 py-2 text-[#d2f954] md:inline-flex">
            <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-[#d2f954]" /> Live seats: 85%
          </span>
          <Link href="/#spaces" className="rounded-2xl bg-[#d2f954] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0a1f12] transition hover:bg-[#e0ff7c]">Book now</Link>
        </div>
      </div>
    </header>
  )
}
