import type {Metadata} from 'next'
import Image from 'next/image'

import PageHero from '@/app/components/PageHero'

export const metadata: Metadata = {
  title: 'Hành Trình Của Tổ',
  description: 'Từ chiếc Tổ đầu tiên đến cộng đồng sáng tạo tại Đà Nẵng.',
}

const milestones = [
  {
    year: '2018',
    title: 'Khởi Nguyên Tại Lê Lợi',
    body: 'Mọi thứ bắt đầu tại 59 Lê Lợi, một góc nhỏ tĩnh lặng giữa trung tâm Đà Nẵng. Chúng tôi gọi nó là “Tổ” đầu tiên — nơi trú ẩn an toàn cho những tâm hồn cần sự tập trung và một ly cà phê tử tế.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCpEXOsnfiGPKgfaQ_G2X_L2g0EuHh4lFFKCEKjpfi1WmvDR8v_EzLcQtqF0BtTHG7SQWTL0XXEzeG-Y0k5N6QHaC3a51mAEzzy74NB3xp28vcvqnw-6ktNhyg5nrkCL32UtNKmsveLFKDrQEIIHTCRpDno5uCt7fXWbxzxgsCj1Ntc-K1hS5wZO0Rk7Cyozz2_7TXaGdGcSxeIEUmou0OooouywU57WzFR80C9MKFox6taJMC99jHvg',
  },
  {
    year: '2020',
    title: 'Định Hình Không Gian Sâu',
    body: 'Giữa những biến động, chúng tôi nhận ra nhu cầu mãnh liệt về một không gian làm việc chuyên nghiệp ngoài văn phòng. Tổ bắt đầu thiết kế những khu vực “deep work” với ánh sáng và âm thanh được cân chỉnh.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC68PBvonAEfRCTDhaWpODBH7sxFlo5wlrKVQigZdFWjC1a_ZxQlyvpZQdshulOk29_jbG2qvBWtR92aB75xlGbH0jyAZtiltOWD7K7NuXWPqGkTsPciDtcKsSuS4yHnP3f7Zyel6svJj8D4grMFfGz86U8dbd82K5Cl75a_bVrX121dZHzlI9FLa_1jPYeUIUVbZ0ql_BSHV6VPBDcw4MwlOR-IyqZYawjxFarhiixEgcObw5yBzNH7g',
  },
  {
    year: '2022',
    title: 'Bước Chuyển 24/7',
    body: '80A Nguyễn Chí Thanh đánh dấu bước chuyển với mô hình hoạt động 24/7. Tổ luôn ở đó, từ sáng sớm đến đêm muộn, đồng hành cùng những “cú đêm” đang chạy deadline.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTdG1NrleIEy93n6zjVAR-5St-BpBiNoS2P-A4yXsOinqZ91RaPD8ToWFpeXsnSKKW3fFc2ux8xfDfxfCX00Bq2_IgHwiwLDvng4Hnlt3xPlmWuw39ugPG-iNqHcx9qbt1JkIeBqIkVfB7y3wkw5GleluWI7Sol7Oiz4xXLMVnEW4nkkUEi7ibHEs34InhBHj3Ic0H1XkGEx-V2iBScECjD91ITIXOwZLo00fhWV_0W532XZwb3ySjiw',
  },
  {
    year: '2024',
    title: 'Hành Trình Mới Bờ Biển',
    body: 'Trạm dừng mới tại 357 Nguyễn Tất Thành mang hơi thở biển cả và dòng Specialty Matcha cao cấp, mở ra một chương mới cho trải nghiệm đồ uống và không gian thư giãn tĩnh lặng.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0gF7Wi1VVShGY0fZYA26NcLHMMNT1Sxuo7jLUHZBmcE5G6a_lmdBhjE4e5UvwKfgxTdJ8gfVnSzr92PvcyIjRgu1NSvBGZz1vCRxpMRBr-ucgiv1UYOBONVSky0k9H9iu-5JssFPvX_H-MvkhhHTU5X6tOvl_olhkC6CI5pTXDwe7MaWBZWPnQiR1IgG_HOeN0xT583VRSlkt8-FR69Sizu4qzzTJD2klZGGHP6GIIVjFhA_uyhNnA',
  },
]

export default function JourneyPage() {
  return (
    <div>
      <PageHero eyebrow="Our story / 2018 — now" title="Hành Trình Của Tổ" description="Từ một góc nhỏ tĩnh lặng đến những không gian làm việc sâu đầy cảm hứng. Đây là câu chuyện trưởng thành cùng cộng đồng qua từng hạt cà phê và lá matcha." />
      <main className="site-container py-20 md:py-28">
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-[#d2f954]/25 md:left-1/2" />
          <div className="space-y-20 md:space-y-28">
            {milestones.map((item, index) => (
              <article key={item.year} className="relative grid gap-8 pl-12 md:grid-cols-2 md:gap-20 md:pl-0">
                <span className="absolute left-1 top-1 grid size-7 place-items-center rounded-full border border-[#d2f954] bg-[#0a1f12] text-[9px] font-bold text-[#d2f954] md:left-1/2 md:-translate-x-1/2">✦</span>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 ${index % 2 ? 'md:order-2' : ''}`}>
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className={`flex flex-col justify-center ${index % 2 ? 'md:order-1 md:text-right' : ''}`}>
                  <p className="eyebrow text-[#d2f954]">{item.year}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{item.title}</h2>
                  <p className="mt-5 leading-7 text-[#b9c2b9]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <section className="border-t border-white/10 bg-[#d2f954] py-20 text-[#0a1f12]">
        <div className="site-container text-center">
          <p className="eyebrow">The next chapter</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(2.7rem,6vw,5.5rem)] font-extrabold leading-[.96] tracking-[-.05em]">Câu chuyện tiếp tục,<br />cùng với bạn.</h2>
        </div>
      </section>
    </div>
  )
}
