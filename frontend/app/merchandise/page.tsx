import type {Metadata} from 'next'
import Image from 'next/image'
import {ArrowRight} from 'lucide-react'

import PageHero from '@/app/components/PageHero'
import PatternArtwork from '@/app/components/PatternArtwork'

export const metadata: Metadata = {
  title: 'Vật Phẩm Của Tổ',
  description: 'Mang tinh thần Chăm Học Chăm Làm theo bạn mỗi ngày.',
}

const products = [
  {
    label: 'New arrival',
    name: 'Áo Phông Chăm Học Chăm Làm',
    description:
      'Thiết kế tối giản trên chất liệu cotton cao cấp, thấm hút tốt. Slogan đặc trưng của Tổ là một lời nhắc nhẹ về sự tập trung và nỗ lực mỗi ngày.',
    price: '390.000đ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWevv72eBqoRE1_nsygaiWyXL0JpJ-jhshwXjdTnI9woeDlIq-729qb9WADUsAQje-SkZfRQhG2Rt2ysFi3WqjEYavtsujORi9V7BqboO8yNVbSJYVcvMK9RywQRsucaG3JdRq0Gh9Gkgkw-h_BC1AqKPanQSJM3HY5LU1YGvF_8jgre7Hpbpd9oiiyKcljRkgExzmD_RewfL7qmiBRCJHjVzuJtCF9VnnW4YXIvnsveUr8KsUcXZLsA',
  },
  {
    label: 'Essential',
    name: 'Nón Chăm Học Chăm Làm',
    description:
      'Mũ lưỡi trai 6 múi phom cứng cáp với hình thêu tỉ mỉ. Một phụ kiện giúp che chắn xao nhãng và bước vào những phiên làm việc tập trung cao độ.',
    price: '280.000đ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkz4_U8DkWTPDXVCk9Bzt7IDUKkkoXBsRMDe16BfgLuaCVh7wX4g2uaSWKDx4kGn6qn5teFqpsTzRClK-_-q7r7w5Kg-lltC-DNhlPh0KwzyzRUulN29a5PtagoxJs1De2_vbMTq5v2tj_VsvK6AhPqEQQEc5uYz3L94V7leMSYBXjBM4_enkjHhBbZyQfqlpoI1u_xa4TDlI_PAkR0BQ0YQoqRhVCJ3Rx_4lnYhzcd8mGT1lzB2bugQ',
  },
]

export default function MerchandisePage() {
  return (
    <div>
      <PageHero
        eyebrow="Tổ objects / Small batch"
        title="Vật Phẩm Của Tổ"
        description="Mang tinh thần “chiếc tổ” theo bạn mỗi ngày. Những thiết kế tối giản, tập trung vào công năng, đồng hành cùng bạn trong những giờ làm việc sâu."
      />
      <main className="relative overflow-hidden py-20 md:py-28">
        <PatternArtwork
          name="bauhaus-grid"
          className="absolute -right-28 top-16 -z-0 size-[480px] opacity-[.05]"
        />
        <div className="site-container relative space-y-24 md:space-y-36">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="grid items-center gap-9 md:grid-cols-12 md:gap-14"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant bg-surface-bright p-3 md:col-span-7 ${index % 2 ? 'md:order-2' : ''}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover p-3 transition duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className={`md:col-span-5 ${index % 2 ? 'md:order-1' : ''}`}>
                <p className="eyebrow inline-flex rounded-full bg-secondary-container px-3 py-1.5 text-on-secondary-container">
                  {product.label}
                </p>
                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  {product.name}
                </h2>
                <p className="mt-5 leading-7 text-on-surface-variant">{product.description}</p>
                <div className="mt-7 flex items-center gap-6">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <button type="button" className="button-secondary gap-2">
                    Thêm vào giỏ <ArrowRight aria-hidden="true" className="size-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <section className="border-t border-outline-variant bg-surface-container-highest py-20">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">Made to last</p>
            <h2 className="section-title mt-4">
              Less stuff.
              <br />
              Better objects.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
            Mỗi vật phẩm được sản xuất với số lượng nhỏ, ưu tiên chất liệu bền và khả năng sử dụng
            lâu dài. Có thể xem và thử trực tiếp tại mọi chi nhánh Tổ.
          </p>
        </div>
      </section>
    </div>
  )
}
