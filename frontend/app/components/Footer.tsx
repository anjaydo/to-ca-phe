import Link from 'next/link'
import {ExternalLink} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-dim py-14 text-on-surface">
      <div className="site-container grid gap-12 sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-bold text-primary">
            Tổ Cà Phê
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-on-surface-variant">
            A modern organic space for coffee, matcha, deep work, and community in Đà Nẵng.
          </p>
          <p className="eyebrow mt-8 text-outline">© 2026 Tổ Cà Phê</p>
        </div>
        <div>
          <p className="eyebrow mb-4 text-primary">Explore</p>
          <div className="flex flex-col items-start gap-3 text-sm text-on-surface-variant">
            <Link href="/menu" className="hover:text-primary">
              Menu
            </Link>
            <Link href="/coworking" className="hover:text-primary">
              Co-working
            </Link>
            <Link href="/journey" className="hover:text-primary">
              Our journey
            </Link>
            <Link href="/merchandise" className="hover:text-primary">
              Merchandise
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-primary">Visit</p>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>59 Lê Lợi</li>
            <li>80A Nguyễn Chí Thanh</li>
            <li>357 Nguyễn Tất Thành</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-primary">Patterns</p>
          <div className="flex flex-col items-start gap-3 text-sm text-on-surface-variant">
            <Link href="/patterns/bauhaus-grid" className="hover:text-primary">
              Bauhaus Grid
            </Link>
            <Link href="/patterns/electric-wave" className="hover:text-primary">
              Electric Wave
            </Link>
            <Link href="/patterns/organic-rhythm" className="hover:text-primary">
              Organic Rhythm
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-primary">Connect</p>
          <div className="flex flex-col items-start gap-3 text-sm text-on-surface-variant">
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-primary">
              Instagram <ExternalLink aria-hidden="true" className="size-3.5" />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-primary">
              Facebook <ExternalLink aria-hidden="true" className="size-3.5" />
            </a>
            <a href="mailto:hello@tocaphe.vn" className="hover:text-primary">
              hello@tocaphe.vn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
