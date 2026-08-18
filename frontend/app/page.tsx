import Image from 'next/image'
import Link from 'next/link'

const locations = [
  {
    name: '59 Lê Lợi',
    description: 'The Original Nest. Quiet corners and a lush courtyard.',
    hours: '07:00 — 23:00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBVV5AK9nGBsenNawNYq14NkbIOuccbKIplHnW5vBiJSUKdURXeV6_-EsameLkkKSzwH1In3nSzesoYRBHsSa-H6OT6FH6-uo7-r9AJzhQ5YG-UUyYjV8vE0j1gSi3eTQyxiKMA_GPrNfRCdV1ZsF6lhKEFcE7x8Qg3BUsM0tWGCQrVaxW-qhku6RDJOCfZNDn0fPTX4DenO5wygCbUYFjPnflAZ1GhUPup5u9iXR37BZ1K6R4f_L12w',
  },
  {
    name: '80A Nguyễn Chí Thanh',
    description: 'For the night owls. Open 24/7 for uninterrupted focus.',
    hours: 'Open 24/7',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPqFT2Ca8nYiPbtCGnmZXCtcQHp_P10muNupdjy8rFBrCXTSfUxdXbFuG6myQsmDaPAHqPmXl8gr-LKORUBV3izwkfBt2cfjq2bpca0qx_IBL93Me2vRro6_aR_fapcXFdV1HIpoZoLUdO6SA8ogsn9GlsHPf7k8NxADy6clhouiBVs1Sy_lyw4SwdDQAFXu9dGUBQiqJ3re0dxrliXUnlUjLG_hyLdxiD956ED9G0w2EEBpffwuYMlQ',
  },
  {
    name: '357 Nguyễn Tất Thành',
    description: 'The Coastal Hub. Ocean breeze meets specialty coffee.',
    hours: '06:30 — 23:00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOM6R8objtCmvrFbYc5BgaOEPqFhQmsNfdS2yaXCN_5dWzFpXa01M-tuPXcet4vo3zeQLEXb40xlRQGRlEmhVDEEXQT3AP5XuA70I-t8RTUMgeOaezJKhqJlF9xGwSeF4uomZP77ZoAnKZ3Db3RbI_tP2Ts7EB-PxpULFKEaju6TIGc3qx6-xCbT3WmxraAxFoaNhhjIxnUwStY78NO_HgtZdzxNiEVA-NzBR7u11P7E2paStV-uSEh0h8MRjLkoUEg2w',
  },
]

const events = [
  {
    category: 'Music',
    date: '23.08',
    title: 'Acoustic Night',
    description: 'Cozy live music under the stars.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=85&w=900',
  },
  {
    category: 'Workshop',
    date: '30.08',
    title: 'Workshop Làm Gốm',
    description: 'Shape, glaze, and take home your own cup.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=85&w=900',
  },
  {
    category: 'Talkshow',
    date: '06.09',
    title: 'Talkshow Sáng Tạo',
    description: 'Creative discussions with local artists.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=85&w=900',
  },
]

export default function Page() {
  return (
    <div className="overflow-hidden">
      <header className="hero relative flex min-h-[680px] items-center justify-center overflow-hidden border-b border-[#d2f954]/50 px-5 py-24 md:min-h-[calc(100svh-81px)]">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5gyxZaBhpYeDrXeKidP4fBAuFZmqsDL-ugkXdAcc_PsdLmZE9GF6t--zpODCsc6XgY6TNJ1c38OzYXq2tV7CXWSNiidmWWasItQozT5Z5bjjumsRwQkiVFc-kEcjsqFH6hMd-DnfvhLwqXStGZS4JgZ1gRETCFoYtJ7e318RgxQN2h2_Q_Sm56ENITbGhs4Q1HrXR5tHrIHlYRH8CW83GrC8gqu8OHQ8H5Jty6D4lZGj9UP4JYbuCdQ"
          alt="Không gian làm việc và cà phê tại Tổ"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,18,.55),rgba(10,31,18,.8))]" />
        <div className="grain absolute inset-0 opacity-25" />
        <div className="hero-orbit absolute left-[7%] top-[17%] hidden size-32 rounded-full border border-[#d2f954]/50 lg:block" />
        <div className="hero-orbit absolute bottom-[12%] right-[8%] hidden size-20 rounded-full border border-[#faf9f4]/40 lg:block" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="eyebrow mb-7 rounded-full border border-[#d2f954]/50 bg-[#0a1f12]/75 px-4 py-2 text-[#d2f954] backdrop-blur-sm">
            Coffee · Matcha · Community
          </span>
          <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.94] tracking-[-.055em] text-[#faf9f4]">
            Trạm Dừng
            <span className="block text-[#d2f954]">Sáng Tạo.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#d8ded7] md:text-xl md:leading-8">
            Một không gian cho những ý tưởng mới, những cuộc trò chuyện hay và những ly cà phê thật tử tế giữa lòng Đà Nẵng.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#menu" className="button-primary">
              Explore menu <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#spaces" className="button-secondary">
              Find your Tổ
            </Link>
          </div>
        </div>
      </header>

      <div className="marquee border-b border-[#d2f954]/25 bg-[#d2f954] py-3 text-[#0a1f12]">
        <div className="marquee-track eyebrow flex w-max gap-10 whitespace-nowrap">
          {[0, 1].map((group) => (
            <div className="flex gap-10" key={group} aria-hidden={group === 1}>
              <span>✦ Now open at 357 Nguyễn Tất Thành</span>
              <span>Open 24/7</span>
              <span>Chăm học chăm làm</span>
              <span>Specialty coffee & matcha</span>
            </div>
          ))}
        </div>
      </div>

      <main>
        <section id="menu" className="site-container scroll-mt-28 py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-[#d2f954]">01 / Signature</span>
              <h2 className="section-title mt-3">A little ritual,<br />made at Tổ.</h2>
            </div>
            <Link href="#menu" className="text-link hidden sm:inline-flex">View full menu ↗</Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <article className="bento-card relative min-h-[520px] overflow-hidden p-7 sm:p-10 lg:col-span-8">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7nhy02dw1-PMAMUH0dd2VLXNpfdSm0jR6UMYgneZYLJNMRnQVx5ZYLK1LVDdHQYjY2E8eLoGBCuaIfdcvcWw9sdNzbdc4YAA8OGkswhUi4fSwKLKnE4An0voq8oI3v_aAVynNYCCMrh6x7oxp3mR3oixr4J_134UwQJn59PqTgqus2jWDVrTcflSVQyD6cnwk8-oza351ovc_St7j5nElBCWO_eP-TYLPo-cWLTiC96hYXHZpDzX-LQ"
                alt="Uji Matcha Cloud"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,31,18,.95)_0%,rgba(10,31,18,.7)_45%,rgba(10,31,18,.08)_100%)]" />
              <div className="relative flex h-full max-w-md flex-col items-start justify-end">
                <span className="eyebrow rounded-full bg-[#d2f954] px-3 py-1.5 text-[#0a1f12]">Signature</span>
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-[#faf9f4] sm:text-4xl">Uji Matcha Cloud</h3>
                <p className="mt-3 leading-7 text-[#c3c8c1]">Ceremonial Uji matcha crowned with our sea-salt cream cloud. Earthy, bright, and quietly addictive.</p>
                <p className="mt-6 text-xl font-semibold text-[#d2f954]">65,000 VND</p>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-4">
              <article className="bento-card flex min-h-64 flex-col justify-between p-7">
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-[#d2f954]">Slow bar</span>
                  <span className="text-3xl text-[#d2f954]">✦</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#faf9f4]">Cầu Đất Brown</h3>
                  <p className="mt-2 text-[#c3c8c1]">Seasonal pour-over with notes of cacao and ripe plum.</p>
                  <p className="mt-4 font-semibold text-[#d2f954]">55,000 VND</p>
                </div>
              </article>
              <article className="relative min-h-64 overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD93fMMk-ou32IatEDan-EFqI3g7blpQxeFiFX3BFeiP8wBk28HA7--9VmvXmuwUtduLhmdkc_fbP6OTOQ-4b_SzQk64iuCoi2ogLWtnQpgIbVz6Xh4xKRFdHPXqB3Cge_0GK6OUt_T8HE8hXmddzwj_OUb5XNdG_78AgCzNiyf3xsL6is211sFthfjmbGKgLBdDG4aM9g6hiZhY--5zTAKQhk5F94UywspuSqjCtfvjWvH8-qBhzIFNnC_gnp3F6XDaZk"
                  alt="Seasonal drink at Tổ Cà Phê"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#d2f954]/75 mix-blend-multiply" />
                <div className="relative flex h-full flex-col justify-end p-7 text-[#faf9f4]">
                  <span className="eyebrow">New arrival</span>
                  <h3 className="mt-2 text-2xl font-bold">Lychee Blossom Tea</h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="spaces" className="scroll-mt-28 border-y border-white/10 bg-[#08190e] py-20 md:py-28">
          <div className="site-container">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <span className="eyebrow text-[#d2f954]">02 / Our spaces</span>
                <h2 className="section-title mt-3">Find your corner.</h2>
              </div>
              <p className="hidden max-w-sm text-right leading-7 text-[#aeb7ae] md:block">Three addresses. Three different rhythms. One shared home for good work and better pauses.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {locations.map((location, index) => (
                <article key={location.name} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
                    <Image src={location.image} alt={`Tổ Cà Phê ${location.name}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07170c] via-transparent to-transparent" />
                    <span className="eyebrow absolute left-5 top-5 rounded-full border border-white/25 bg-[#0a1f12]/70 px-3 py-1.5 backdrop-blur-sm">0{index + 1}</span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="eyebrow text-[#d2f954]">{location.hours}</span>
                      <h3 className="mt-2 text-2xl font-bold text-[#faf9f4]">{location.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#c3c8c1]">{location.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="site-container scroll-mt-28 py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-[#d2f954]">03 / Community</span>
              <h2 className="section-title mt-3">Sự Kiện Tại Tổ.</h2>
            </div>
            <Link href="#events" className="text-link hidden sm:inline-flex">View all events ↗</Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {events.map((event) => (
              <article key={event.title} className="event-row group grid items-center gap-5 py-5 md:grid-cols-[100px_1fr_220px] md:py-7">
                <div>
                  <span className="eyebrow text-[#d2f954]">{event.category}</span>
                  <p className="mt-1 text-xl font-semibold">{event.date}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold transition-colors group-hover:text-[#d2f954] md:text-3xl">{event.title}</h3>
                  <p className="mt-2 text-[#aeb7ae]">{event.description}</p>
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-md md:aspect-[5/3]">
                  <Image src={event.image} alt={event.title} fill sizes="(min-width: 768px) 220px, 100vw" className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#d2f954] px-5 py-20 text-[#0a1f12] md:py-28">
          <div className="mx-auto grid max-w-7xl items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">The doors are open</span>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[.95] tracking-[-.05em]">Come for the coffee.<br />Stay for the spark.</h2>
            </div>
            <Link href="#spaces" className="inline-flex items-center justify-center rounded-2xl bg-[#0a1f12] px-7 py-4 font-semibold uppercase tracking-wider text-[#faf9f4] transition hover:-translate-y-1 hover:bg-[#173622]">Find a location ↗</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
