import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import PageHero from '@/app/components/PageHero'

export const metadata: Metadata = {
  title: 'Không Gian',
  description: 'Khám phá ba không gian Tổ Cà Phê tại Đà Nẵng.',
}

const spaces = [
  {
    number: '01',
    name: '59 Lê Lợi',
    label: 'The Original Sanctuary',
    description: 'Nơi mọi thứ bắt đầu. Một góc nhỏ ấm cúng cho những phiên làm việc sâu, những cuộc trò chuyện gần gũi và nhịp sống chậm giữa trung tâm thành phố.',
    hours: '07:00 — 23:00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsdRyhuL3ze5Oa7BO8sNAgIfBJezHMQf0kEcsDfVDxBK11CpFx1jdEe8Re1cderq1OZFx1OFG-ADCZcDtEMu_rLeP0PvlE0s3DoxGrPgFf6KGwaJpyzqGubXTAdlummhxc46G4SdKGhczFF-yy4bFD1-ji9Vxw6wF_YD0-P5PlxXtppdDgHIZbfO1YQzmN3_Fc2bVyHt7e3RNRvXQu-F6VKx6pojAcz22P0KH5oZ7V-6Qhy4wQddFRVg',
  },
  {
    number: '02',
    name: '80A Nguyễn Chí Thanh',
    label: 'Modern Minimalist · Open 24/7',
    description: 'Một không gian mở được thiết kế cho cộng tác và sáng tạo, với quầy matcha riêng, bàn cộng đồng rộng và năng lượng không bao giờ ngủ.',
    hours: 'Open 24/7',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_s36y2l2ggY8BDIpN0UK0f2panbVHBbdjRXt6K0z_kN-gPlyitmyyJMHT6U6wcDie-jgjbmM4FCv5sYz7tkn2FRk6oiXnu4P-AmTsmejafyxNh5AccFl7wQcXPulYXAS8Sjn_uMcr3w3MDWDjl7RRB8eJr4PuxH8NTvw8zyLaHNZmA_il3ULY8ONOxmSdLbccbp-KqWWGkELn5iZBtzI7HsRkoLp-qg44zaWFrlJqIzNoclZoGp4kag',
  },
  {
    number: '03',
    name: '357 Nguyễn Tất Thành',
    label: 'Sea Breeze Hub',
    description: 'Khoảng sân rộng nhìn ra biển, đón nắng và gió. Một trạm dừng nhẹ nhàng cho buổi sáng chậm rãi hoặc ly matcha sau chuyến dạo bờ biển.',
    hours: '06:30 — 23:00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVrvCOM-uUIlX320LVPyvQ50kzhrvOSq9iFdfomIUud1SCEkYKSQDGq_IXAkFdw1owaRfbs9Qky0ExCMCL5b_fVlVVMuV3r4m2f2hSYoPlh3IVNWgeWXzP-GftN9bV9kz8KcGJPIHL-RUBmcbHttnIZLxJtomFwH9wdnEm5oE72RRcJHTfqBwuoIjX4U1spUBDo4IL7K3wEnJyE5WyfCINWrap2TCpJQbA95Yu0nJBZNZGYoopgndp_g',
  },
]

export default function SpacesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Spaces / Đà Nẵng"
        title="Chọn một góc của riêng bạn."
        description="Ba chiếc Tổ, ba cá tính khác nhau. Mỗi nơi kết hợp thiết kế tối giản, hơi ấm tự nhiên và đủ khoảng lặng để bạn tìm thấy nhịp điệu của mình."
        aside={<span className="eyebrow rounded-full border border-[#d2f954]/40 px-4 py-2 text-[#d2f954]">3 locations · 1 community</span>}
      />

      <main className="site-container py-16 md:py-24">
        <div className="space-y-24 md:space-y-32">
          {spaces.map((space, index) => (
            <article key={space.name} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 md:col-span-7 ${index % 2 ? 'md:order-2' : ''}`}>
                <Image src={space.image} alt={`Không gian Tổ Cà Phê tại ${space.name}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06140b]/70 via-transparent to-transparent" />
                <span className="eyebrow absolute left-5 top-5 rounded-full bg-[#d2f954] px-3 py-1.5 text-[#0a1f12]">{space.number}</span>
                <span className="eyebrow absolute bottom-5 left-5 text-[#faf9f4]">{space.hours}</span>
              </div>
              <div className={`md:col-span-5 ${index % 2 ? 'md:order-1' : ''}`}>
                <p className="eyebrow text-[#d2f954]">{space.label}</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf9f4] md:text-5xl">{space.name}</h2>
                <p className="mt-5 text-base leading-7 text-[#b9c2b9]">{space.description}</p>
                <Link href="/coworking" className="text-link mt-7 inline-flex text-[#faf9f4]">Explore the space ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#1a2e21] py-20">
        <div className="site-container relative text-center">
          <p className="eyebrow text-[#d2f954]">Find your spot</p>
          <h2 className="section-title mx-auto mt-4 max-w-3xl">Một chiếc Tổ luôn ở gần bạn.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-[#b9c2b9]">Ghé bất kỳ lúc nào, hoặc đặt trước bàn nhóm để chắc chắn có một góc thật vừa ý.</p>
          <Link href="/coworking" className="button-primary mt-8">Book a table ↗</Link>
        </div>
      </section>
    </div>
  )
}
