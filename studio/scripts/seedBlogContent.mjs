import {getCliClient} from 'sanity/cli'

const dryRun = process.argv.includes('--dry-run')
const client = getCliClient({apiVersion: '2026-08-01'})
const stats = {postsCreated: 0, postsReused: 0, assetsUploaded: 0, assetsReused: 0, documentsPatched: 0}

const ref = (_ref) => ({_type: 'reference', _ref})
const slug = (current) => ({_type: 'slug', current})
const span = (_key, text, marks = []) => ({_key, _type: 'span', text, marks})
const block = (_key, text, style = 'normal') => ({
  _key,
  _type: 'block',
  style,
  markDefs: [],
  children: [span(`${_key}-span`, text)],
})

const posts = [
  {
    key: 'mot-buoi-sang-cham-o-59-le-loi',
    title: 'Một buổi sáng chậm ở 59 Lê Lợi',
    excerpt: 'Có những ngày, điều mình cần không phải thêm thời gian — mà là một nơi khiến thời gian trôi chậm lại.',
    date: '2026-08-18T01:30:00.000Z',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=88&w=1800',
    alt: 'Ly cà phê trên bàn gỗ trong ánh sáng buổi sáng',
    content: [
      block('slow-intro', 'Bảy giờ sáng, Lê Lợi vẫn còn giữ được một khoảng yên hiếm hoi. Ánh nắng đi qua tán cây, chạm lên mặt bàn, và chiếc phin đầu tiên bắt đầu nhỏ từng giọt.'),
      block('slow-heading-space', 'Một khoảng trống vừa đủ', 'h2'),
      block('slow-space', 'Tổ được tạo ra từ những khoảng trống như vậy: đủ yên để nghe được suy nghĩ của mình, đủ gần gũi để không thấy cô độc. Bạn có thể mở laptop, đọc vài trang sách, hoặc chỉ ngồi nhìn thành phố thức dậy.'),
      block('slow-heading-ritual', 'Nghi thức nhỏ của buổi sáng', 'h2'),
      block('slow-ritual', 'Một ly cà phê tử tế không cần vội. Chúng tôi cân hạt, chỉnh nước và chờ đúng nhịp. Trong lúc ấy, bạn cũng có thể cho mình quyền bắt đầu ngày mới chậm hơn một chút.'),
      block('slow-ending', 'Nếu hôm nay quá nhiều việc, hãy bắt đầu bằng một việc thật nhỏ: chọn một góc ngồi, gọi món quen và hít một hơi thật sâu.'),
    ],
  },
  {
    key: 'matcha-khong-chi-la-mot-mau-xanh',
    title: 'Matcha không chỉ là một màu xanh',
    excerpt: 'Từ Uji đến Đà Nẵng, một chén matcha ngon mang theo câu chuyện của giống trà, mùa vụ và cách người pha đối xử với nguyên liệu.',
    date: '2026-08-14T03:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=88&w=1800',
    alt: 'Matcha xanh được đánh bằng chổi tre trong chén',
    content: [
      block('matcha-intro', 'Màu xanh là thứ đầu tiên ta nhìn thấy, nhưng vị ngọt hậu, độ umami và cảm giác mịn mới là những gì khiến một chén matcha ở lại trong trí nhớ.'),
      block('matcha-heading-origin', 'Bắt đầu từ nguồn gốc', 'h2'),
      block('matcha-origin', 'Matcha của Tổ đến từ Uji, vùng trà lâu đời của Nhật Bản. Lá trà được che nắng trước khi thu hoạch, hấp, sấy và nghiền chậm thành bột mịn. Mỗi công đoạn đều ảnh hưởng đến mùi vị cuối cùng.'),
      block('matcha-heading-whisk', 'Đánh matcha là một nhịp điệu', 'h2'),
      block('matcha-whisk', 'Nước không quá nóng. Chổi tre di chuyển nhanh nhưng nhẹ. Bọt phải mịn và đều. Đó không phải màn trình diễn; đó là cách giữ cho vị trà cân bằng, không gắt và không bị mất hương.'),
      block('matcha-ending', 'Bạn có thể uống matcha nguyên bản để cảm nhận rõ nhất, hoặc thử cùng sữa và lớp cloud mằn mặn. Không có lựa chọn đúng duy nhất — chỉ có phiên bản phù hợp với nhịp hôm nay của bạn.'),
    ],
  },
  {
    key: 'lam-viec-sau-giua-thanh-pho-nhieu-tieng-dong',
    title: 'Làm việc sâu giữa thành phố nhiều tiếng động',
    excerpt: 'Tập trung không hoàn toàn là ý chí. Không gian, ánh sáng và những tín hiệu nhỏ quanh ta có thể giúp bộ não bước vào đúng nhịp.',
    date: '2026-08-09T02:15:00.000Z',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=88&w=1800',
    alt: 'Không gian làm việc chung nhiều ánh sáng và cây xanh',
    content: [
      block('focus-intro', 'Có những ngày bạn ngồi trước màn hình hàng giờ nhưng vẫn chưa thật sự bắt đầu. Vấn đề đôi khi không nằm ở kỷ luật, mà ở việc không gian đang gửi quá nhiều tín hiệu cạnh tranh.'),
      block('focus-heading-cues', 'Tạo tín hiệu bắt đầu', 'h2'),
      block('focus-cues', 'Chọn một bàn cố định, đặt điện thoại ngoài tầm tay và gọi một món quen. Những hành động lặp lại giúp não nhận ra: đây là lúc đi vào công việc sâu.'),
      block('focus-heading-cycles', 'Làm theo chu kỳ, không chạy marathon', 'h2'),
      block('focus-cycles', 'Một phiên tập trung 50 đến 75 phút thường hữu ích hơn nhiều giờ ngồi lì. Sau mỗi phiên, hãy đứng dậy, uống nước hoặc đi một vòng ngắn trước khi quay lại.'),
      block('focus-ending', 'Tổ không thể làm công việc thay bạn. Nhưng một chiếc bàn vừa đủ rộng, ánh sáng dễ chịu và tiếng ồn được giữ ở mức nền có thể giúp bước đầu tiên nhẹ hơn.'),
    ],
  },
  {
    key: 'tu-cau-dat-den-chiec-phin-o-to',
    title: 'Từ Cầu Đất đến chiếc phin ở Tổ',
    excerpt: 'Hành trình của hạt Arabica qua cao nguyên sương lạnh, mẻ rang nhỏ và chiếc phin nhỏ giọt giữa lòng Đà Nẵng.',
    date: '2026-08-03T01:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=88&w=1800',
    alt: 'Hạt cà phê rang nằm cạnh dụng cụ pha chế',
    content: [
      block('coffee-intro', 'Cầu Đất có độ cao, khí hậu mát và những buổi sáng phủ sương — điều kiện giúp quả cà phê chín chậm, tích lũy nhiều lớp hương hơn.'),
      block('coffee-heading-roast', 'Rang để làm rõ, không để che đi', 'h2'),
      block('coffee-roast', 'Mẻ rang được phát triển vừa đủ để giữ vị ngọt, độ chua sáng và mùi hạt dẻ. Chúng tôi tránh rang quá đậm vì khói và vị đắng có thể che mất phần tính cách đẹp nhất của hạt.'),
      block('coffee-heading-phin', 'Chiếc phin và sự kiên nhẫn', 'h2'),
      block('coffee-phin', 'Phin là một dụng cụ đơn giản nhưng nhạy cảm với độ xay, lượng nước và thời gian. Khi mọi thứ cân bằng, từng giọt cà phê tạo nên một ly đậm đà mà vẫn sạch vị.'),
      block('coffee-ending', 'Từ nông trại đến quầy bar là một quãng đường dài. Khi gọi một ly Cầu Đất Brown, bạn đang nếm một phần của cao nguyên ấy — qua cách Tổ kể lại bằng chiếc phin quen thuộc.'),
    ],
  },
]

async function uploadImage(url, filename) {
  if (dryRun) return {_type: 'image', asset: ref(`dry-asset-${filename}`)}
  const existing = await client.fetch(`*[_type == "sanity.imageAsset" && source.url == $url][0]._id`, {url})
  if (existing) {
    stats.assetsReused++
    return {_type: 'image', asset: ref(existing)}
  }
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Không tải được ảnh ${url}: HTTP ${response.status}`)
  const asset = await client.assets.upload('image', Buffer.from(await response.arrayBuffer()), {
    filename: `${filename}.jpg`,
    source: {id: url, name: filename, url},
  })
  stats.assetsUploaded++
  return {_type: 'image', asset: ref(asset._id)}
}

async function ensureAuthor() {
  const existing = await client.fetch(`*[_type == "person"] | order(_createdAt asc)[0]._id`)
  if (existing) return existing
  const portrait = await uploadImage('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=85&w=800', 'to-editorial-author')
  if (dryRun) return 'dry-author'
  const author = await client.create({_type: 'person', firstName: 'Ban biên tập', lastName: 'Tổ', picture: {...portrait, alt: 'Ban biên tập Tổ'}})
  return author._id
}

async function ensurePost(source, authorId) {
  const migrationKey = `blog-post:${source.key}`
  const existing = await client.fetch(`*[_type == "post" && migrationKey == $migrationKey][0]._id`, {migrationKey})
  if (existing) {
    stats.postsReused++
    return existing
  }
  const collision = await client.fetch(`*[_type == "post" && slug.current == $slug][0]._id`, {slug: source.key})
  if (collision) throw new Error(`Slug collision: /posts/${source.key} (${collision})`)
  const coverImage = {...await uploadImage(source.image, `blog-${source.key}`), alt: source.alt}
  if (dryRun) {
    stats.postsCreated++
    return `dry-post-${source.key}`
  }
  const created = await client.create({
    _type: 'post',
    migrationKey,
    title: source.title,
    slug: slug(source.key),
    excerpt: source.excerpt,
    date: source.date,
    author: ref(authorId),
    coverImage,
    content: source.content,
  })
  stats.postsCreated++
  return created._id
}

async function ensureBlogPage() {
  const existing = await client.getDocument('blogPage')
  const pageBuilder = [
    {_key: 'blog-hero', _type: 'heroBlock', variant: 'standard', eyebrow: 'Journal / Tổ ghi chép', heading: 'Chuyện ở Tổ', accentHeading: 'Chậm mà sâu.', description: 'Những ghi chép về cà phê, matcha, không gian và cách chúng ta tìm lại sự tập trung giữa thành phố.', badge: 'Stories · People · Rituals'},
    {_key: 'blog-posts', _type: 'postListBlock', selectionMode: 'latest', layout: 'editorialGrid', limit: 9, eyebrow: 'Mới từ Tổ', heading: 'Đọc một câu chuyện.', intro: 'Những điều chúng tôi học được từ nguyên liệu, không gian và cộng đồng quanh mình.'},
  ]
  if (dryRun) {
    if (!existing || !existing.pageBuilder?.length) stats.documentsPatched++
    return
  }
  if (!existing) {
    await client.create({_id: 'blogPage', _type: 'blogPage', name: 'Blog', seo: {_type: 'seo', metaTitle: 'Chuyện ở Tổ', metaDescription: 'Ghi chép về cà phê, matcha, không gian và cộng đồng tại Tổ Cà Phê.'}, pageBuilder})
    stats.documentsPatched++
  } else if (!existing.pageBuilder?.length) {
    await client.patch('blogPage').set({pageBuilder}).setIfMissing({name: 'Blog'}).commit()
    stats.documentsPatched++
  }
}

async function ensureNavigation() {
  const settings = await client.getDocument('siteSettings')
  const navigation = settings?.navigation || []
  const hasBlog = navigation.some((item) => item?._key === 'nav-blog' || item?.link?.href === '/posts')
  if (hasBlog) return
  if (!dryRun) {
    await client.patch('siteSettings').setIfMissing({navigation: []}).append('navigation', [{_key: 'nav-blog', _type: 'navigationItem', label: 'Blog', link: {_type: 'link', linkType: 'href', href: '/posts'}}]).commit()
  }
  stats.documentsPatched++
}

async function validate() {
  if (dryRun) return
  const result = await client.fetch(`{
    "blogPage": *[_id == "blogPage"][0]{_id, "blocks": count(pageBuilder)},
    "seededPosts": *[_type == "post" && migrationKey match "blog-post:*"]{_id, title, "slug": slug.current, "contentBlocks": count(content), "cover": coverImage.asset->_id, "author": author->_id},
    "brokenReferences": count(*[_type == "post" && migrationKey match "blog-post:*" && (!defined(author->_id) || !defined(coverImage.asset->_id))])
  }`)
  if (!result.blogPage?._id || result.blogPage.blocks < 2) throw new Error('blogPage chưa có đủ blocks')
  if (result.seededPosts.length !== posts.length) throw new Error(`Sai số bài seed: ${result.seededPosts.length}/${posts.length}`)
  if (result.brokenReferences) throw new Error(`Có ${result.brokenReferences} bài bị hỏng reference`)
  console.log(JSON.stringify({stats, validation: result}, null, 2))
}

async function main() {
  console.log(`${dryRun ? 'DRY RUN' : 'WRITE'}: blog content seed`)
  const authorId = await ensureAuthor()
  for (const source of posts) await ensurePost(source, authorId)
  await ensureBlogPage()
  await ensureNavigation()
  if (dryRun) console.log(JSON.stringify({stats, plannedPosts: posts.map(({key, title}) => ({key, title}))}, null, 2))
  await validate()
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
