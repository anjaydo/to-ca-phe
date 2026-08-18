import type {Metadata} from 'next'
import Image from 'next/image'

import PageHero from '@/app/components/PageHero'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Specialty matcha, Vietnamese coffee, tea, and pastries at Tổ Cà Phê.',
}

const drinks = [
  {
    name: 'Uji Matcha Cloud',
    category: 'Specialty Matcha',
    description: 'Ceremonial-grade Uji matcha topped with our salted sweet-cream cloud.',
    price: '65k',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ua1Q8WJtdmTqDHhVcblFYFm7K82872_3G9ktdWYHXUECtcYywJza9B4W1YxHG_SDwR6zES5P1-yI9_iJ3BnMM7kDzuaVpDbByY95I9q5zJMFCyra69wwpav6gVkbZEFqwXzIJE_cMGV2tT6fxAliPHMQsEeMxKCFZHDRv-lelAnED423uE5yxl-x842k1fTXs7vQAaP8MeMRr6BQPiXxwOlFfxZg6Awk-O7PFZIwHTjpVNJ2lPDQcFXz88BbUXuQgzA',
  },
  {
    name: 'Cầu Đất Brown',
    category: 'Vietnamese Coffee',
    description: 'Cầu Đất Arabica slowly phin-dripped over silky condensed milk.',
    price: '55k',
    tone: 'coffee',
  },
  {
    name: 'Lychee Blossom Tea',
    category: 'Refreshing Tea',
    description: 'Cold-brewed black tea infused with fresh lychee and soft floral notes.',
    price: '58k',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDURAYwDB_0VD2fVbt2pMvK417zwyYniE0RjjRA5RYr8kgt6k5bIfDeB9dgMF7oJx4sFEBgteSoMdnZ6bJ9Tct2uO3aVaEpEcdt9mc_8GIwsR3DPwGUJhzdkOz6NWjOipSkWbdjJONGtqyclC3Nd3Q8LAHquwb3nVHE2uED4fvmphtjXDJCaA8FDKN2ImGA8gPfIvZSewCPY1urbhMNvp70-9nuGNpixlE8Glw7oLS-gTmfT-A0VYADMQ',
  },
]

const menuGroups = [
  {
    title: 'Specialty Matcha',
    items: [['Uji Matcha Cloud', '65k'], ['Strawberry Matcha', '68k'], ['Coconut Matcha', '62k'], ['Pure Uji', '52k']],
  },
  {
    title: 'Vietnamese Coffee',
    items: [['Cầu Đất Brown', '55k'], ['Cà Phê Muối', '48k'], ['Cold Brew Tonic', '58k'], ['Phin Đen / Sữa', '42k']],
  },
  {
    title: 'Tea & Others',
    items: [['Lychee Blossom', '58k'], ['Peach Oolong', '55k'], ['Cacao Cloud', '60k'], ['Seasonal Soda', '52k']],
  },
]

export default function MenuPage() {
  return (
    <div>
      <PageHero eyebrow="Drink slowly / Stay awhile" title="Our Menu" description="A curated selection of specialty drinks and pastries, blending Vietnamese roots with an electric, modern energy." aside={<span className="eyebrow rounded-full bg-[#d2f954] px-4 py-2 text-[#0a1f12]">Season 08 · 2026</span>} />

      <main>
        <section className="site-container py-16 md:py-24">
          <div className="mb-10 flex flex-wrap gap-2">
            {['All', 'Specialty Matcha', 'Vietnamese Coffee', 'Refreshing Tea', 'Pastries'].map((item, index) => (
              <span key={item} className={`eyebrow rounded-full border px-4 py-2 ${index === 0 ? 'border-[#d2f954] bg-[#d2f954] text-[#0a1f12]' : 'border-white/15 text-[#b9c2b9]'}`}>{item}</span>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {drinks.map((drink, index) => (
              <article key={drink.name} className={`group overflow-hidden rounded-xl border border-white/10 bg-[#1a2e21] ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}>
                <div className={`relative min-h-80 overflow-hidden ${index === 0 ? 'lg:min-h-[500px]' : ''}`}>
                  {drink.image ? (
                    <Image src={drink.image} alt={drink.name} fill sizes={index === 0 ? '(min-width: 1024px) 35vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'} className="object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="menu-coffee-art absolute inset-0 grid place-items-center bg-[#3a2419]">
                      <div className="size-40 rounded-full border-[18px] border-[#c9a57d] bg-[#22130d] shadow-[0_0_0_12px_#f0dfc6]" />
                    </div>
                  )}
                </div>
                <div className="flex min-h-56 flex-col justify-between p-7">
                  <div><p className="eyebrow text-[#d2f954]">{drink.category}</p><h2 className="mt-3 text-2xl font-bold md:text-3xl">{drink.name}</h2><p className="mt-3 leading-7 text-[#b9c2b9]">{drink.description}</p></div>
                  <div className="mt-7 flex items-center justify-between"><span className="text-xl font-bold text-[#d2f954]">{drink.price}</span><span className="grid size-11 place-items-center rounded-full bg-[#d2f954] text-xl text-[#0a1f12] transition group-hover:rotate-45">＋</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08190e] py-20 md:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-[#d2f954]">Full selection</p>
              <h2 className="section-title mt-4">Pick your energy.</h2>
              <p className="mt-6 max-w-md leading-7 text-[#b9c2b9]">Mỗi món được pha khi bạn gọi. Hãy nói với barista về độ ngọt, loại sữa hoặc nhịp năng lượng bạn cần hôm nay.</p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {menuGroups.map((group) => (
                <div key={group.title} className="py-7">
                  <h3 className="text-xl font-bold text-[#d2f954]">{group.title}</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {group.items.map(([name, price]) => <div key={name} className="flex justify-between gap-4 text-sm"><span>{name}</span><span className="font-semibold text-[#b9c2b9]">{price}</span></div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-28">
          <div className="grid overflow-hidden rounded-xl border border-white/10 lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#d2f954] p-8 text-[#0a1f12] md:p-12">
              <p className="eyebrow">Rooted in origin</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">From Uji<br />to Cầu Đất.</h2>
              <p className="mt-6 max-w-lg leading-7">Matcha từ những nông trại lâu đời ở Uji, Arabica từ cao nguyên sương mù Cầu Đất. Hai nguồn gốc, cùng một sự tôn trọng dành cho nguyên liệu.</p>
            </div>
            <div className="grid min-h-[520px] grid-cols-2">
              <div className="relative"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuASuRDpoGWf_2gZwph_pGjwCZaGOVD3gSOpcIafWjj0Ftyq3yog2BIaVFQUjJvu873I3PV7gNzOdsTNkdfTQ-NI7MK0AAnHPRTwQnNjT-WrtFn5DOV_y1WvRl3KKmDRLx-Y3wBwlQLAtoqA991HatQ4eeUCDrMzoG-X_rPyLQP5mbZthCjLnVubENFNwo-8EdnoSESuBgnC6Nt8B1KpyAl5_X_veq6kG2KT9ufoqA2X4rqal8J6dm8wag" alt="Uji matcha powder" fill sizes="25vw" className="object-cover" /></div>
              <div className="relative"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3wYF_LU-6jZmJl2SHK9QCbL2iE860VCt3a-AM4P5qtCDfh-ZYElLg5jTWQmLTdguZeFfj6IADQJ6Y5PjD5yXRBal6hplY86Fav-S1CaptTx8EIwYi8YtRW48eQoJKx_cHxlDP0B387iiCD03klJMf39Xm0kEnW_b7X1WOX9KEpay2Q9uNP8KM3Fvg4N-_fNMZMsSXDq2lmJDoU2HkSxZtFQ3TzBtkBGTHur6BzzCLpyGmf9wXrYuvkw" alt="Cầu Đất Arabica beans" fill sizes="25vw" className="object-cover" /></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
