import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06140b] py-14 text-[#faf9f4]">
      <div className="site-container grid gap-12 sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-bold text-[#d2f954]">Tổ Cà Phê</Link>
          <p className="mt-4 max-w-sm leading-7 text-[#aeb7ae]">A modern organic space for coffee, matcha, deep work, and community in Đà Nẵng.</p>
          <p className="eyebrow mt-8 text-[#707970]">© 2026 Tổ Cà Phê</p>
        </div>
        <div>
          <p className="eyebrow mb-4 text-[#d2f954]">Explore</p>
          <div className="flex flex-col items-start gap-3 text-sm text-[#c3c8c1]">
            <Link href="/menu" className="hover:text-[#d2f954]">Menu</Link>
            <Link href="/coworking" className="hover:text-[#d2f954]">Co-working</Link>
            <Link href="/journey" className="hover:text-[#d2f954]">Our journey</Link>
            <Link href="/merchandise" className="hover:text-[#d2f954]">Merchandise</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-[#d2f954]">Visit</p>
          <ul className="space-y-3 text-sm text-[#c3c8c1]">
            <li>59 Lê Lợi</li>
            <li>80A Nguyễn Chí Thanh</li>
            <li>357 Nguyễn Tất Thành</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4 text-[#d2f954]">Patterns</p>
          <div className="flex flex-col items-start gap-3 text-sm text-[#c3c8c1]">
            <Link href="/patterns/bauhaus-grid" className="hover:text-[#d2f954]">Bauhaus Grid</Link>
            <Link href="/patterns/electric-wave" className="hover:text-[#d2f954]">Electric Wave</Link>
            <Link href="/patterns/organic-rhythm" className="hover:text-[#d2f954]">Organic Rhythm</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4 text-[#d2f954]">Connect</p>
          <div className="flex flex-col items-start gap-3 text-sm text-[#c3c8c1]">
            <a href="#" className="hover:text-[#d2f954]">Instagram ↗</a>
            <a href="#" className="hover:text-[#d2f954]">Facebook ↗</a>
            <a href="mailto:hello@tocaphe.vn" className="hover:text-[#d2f954]">hello@tocaphe.vn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
