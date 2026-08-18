import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {Cookie, PlugZap, Snowflake, Square, Sun, UsersRound, Wifi} from 'lucide-react'

import PageHero from '@/app/components/PageHero'

export const metadata: Metadata = {
  title: 'Co-working Space',
  description: 'Không gian làm việc sáng tạo tại Tổ Cà Phê Đà Nẵng.',
}

const vibes = [
  {
    icon: Square,
    title: 'Quiet Zone',
    text: 'Bàn riêng cùng tấm tiêu âm, dành cho những giờ tập trung không gián đoạn.',
  },
  {
    icon: UsersRound,
    title: 'Team Area',
    text: 'Bàn cộng đồng rộng rãi cho cộng tác, họp nhóm và workshop.',
  },
  {
    icon: Sun,
    title: 'Outdoor Balcony',
    text: 'Không khí trong lành, cây xanh và tầm nhìn phố cho những cuộc gặp thư thả.',
  },
]

const amenities = [
  {icon: Snowflake, title: '24/7 AC', text: 'Stay cool always.'},
  {icon: Wifi, title: 'High-speed Wi-Fi', text: 'Fast and stable.'},
  {icon: Cookie, title: 'Artisan Snacks', text: 'Fuel your focus.'},
  {icon: PlugZap, title: 'Outlets Everywhere', text: 'Never run dry.'},
]

export default function CoworkingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Work / Create / Connect"
        title="Your creative sanctuary in Đà Nẵng."
        description="Sunlit desks, high-speed Wi-Fi, and endless matcha. Whether you’re coding, designing, or just dreaming, find your flow here."
        aside={
          <Link href="/spaces" className="button-primary">
            Book a team table
          </Link>
        }
      />

      <main>
        <section className="site-container py-16 md:py-24">
          <div className="relative aspect-[16/9] min-h-[440px] overflow-hidden rounded-xl border border-outline-variant">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN6RuWstWAzBrExWmDyXo920Xz8-frZDX7GZg-8c7m4rdVPjrGnoy1EwO7QmDVwaC85X_cVK2iZ5U4Atd70Z6xui9JU_nIao_DW1X0bbtN99Pe26yakqmPXb2jcfrp-7fjkr7f97ct7ZZ_zVwM3PCR449yYvPs7dHUMCk2RhJfoXZa0klZaEe-N9M6JAnQyjAPpY-oVvP6B32TYfO9sbkOruO9ro5TTSfQYdkERrDO0crnUx2Ic7nQbw"
              alt="Không gian co-working đầy ánh sáng tại Tổ"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06140b]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
              <div className="text-primary-fixed">
                <p className="eyebrow">Live at 59 Lê Lợi</p>
                <p className="mt-2 text-2xl font-bold">Good light. Deep focus.</p>
              </div>
              <span className="eyebrow hidden rounded-full bg-secondary-fixed px-4 py-2 text-on-secondary-fixed sm:block">
                85% seats available
              </span>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant bg-surface-container-low py-20 md:py-28">
          <div className="site-container">
            <p className="eyebrow text-primary">Choose your vibe</p>
            <h2 className="section-title mt-4">A space for every mode.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {vibes.map(({icon: Icon, title, text}) => (
                <article
                  key={title}
                  className="bento-card group min-h-72 p-7 transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <Icon aria-hidden="true" className="size-10 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-16 text-2xl font-bold text-primary group-hover:text-secondary">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-on-surface-variant">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-20 md:py-28">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="relative min-h-[480px] overflow-hidden rounded-xl border border-outline-variant lg:col-span-7">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7qNG_WxDCYzJmBTSYUXBkkiENgatVSS76s1OrlEQf0UuvPLJB3vA3P1VryQXzuQG5QZ0mGd0JkSVpP48OXmo3tmjvwu_RpiM9SOiHWkySCwXv-Pkr4ZXCbdvNXwLcsMG3lIYhRi-3dYMMN6Mi5zU5-7ctVsF2MF3uCUBE4mxbSebGZEtdE7yDmDepkEZHOWRK8Tq5xU2Pjo66lZE0BQej0SUKkgoJhA-ZlA1rbZSaFDKu3DZFH867uA"
                alt="Ban công Tổ Cà Phê nhìn ra phố"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="bento-card flex flex-col justify-between p-8 lg:col-span-5">
              <div>
                <p className="eyebrow text-primary">Real-time density</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight">
                  Check before you drop in.
                </h2>
                <p className="mt-4 leading-7 text-on-surface-variant">
                  The room is vibrant and bustling right now, with quiet desks still available
                  upstairs.
                </p>
              </div>
              <div className="mt-12">
                <div className="h-3 overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-[68%] rounded-full bg-brand-matcha" />
                </div>
                <div className="eyebrow mt-3 flex justify-between text-on-surface-variant">
                  <span>Quiet</span>
                  <span>68%</span>
                  <span>Buzzing</span>
                </div>
                <Link href="/spaces" className="button-primary mt-8 w-full">
                  Secure a spot
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-outline-variant bg-surface-container-highest py-20">
          <div className="site-container">
            <h2 className="section-title text-center">Everything you need.</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map(({icon: Icon, title, text}) => (
                <div key={title} className="bg-surface-container p-7">
                  <Icon aria-hidden="true" className="size-6 text-primary" />
                  <h3 className="mt-8 font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm text-on-surface-variant">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
