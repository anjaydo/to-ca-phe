import {getCliClient} from 'sanity/cli'

const dryRun = process.argv.includes('--dry-run')
const client = getCliClient({apiVersion: '2026-08-01'})
const stats = {created: 0, skipped: 0, patched: 0, assetsUploaded: 0, assetsReused: 0}

const urls = {
  homeHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5gyxZaBhpYeDrXeKidP4fBAuFZmqsDL-ugkXdAcc_PsdLmZE9GF6t--zpODCsc6XgY6TNJ1c38OzYXq2tV7CXWSNiidmWWasItQozT5Z5bjjumsRwQkiVFc-kEcjsqFH6hMd-DnfvhLwqXStGZS4JgZ1gRETCFoYtJ7e318RgxQN2h2_Q_Sm56ENITbGhs4Q1HrXR5tHrIHlYRH8CW83GrC8gqu8OHQ8H5Jty6D4lZGj9UP4JYbuCdQ',
  location1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsdRyhuL3ze5Oa7BO8sNAgIfBJezHMQf0kEcsDfVDxBK11CpFx1jdEe8Re1cderq1OZFx1OFG-ADCZcDtEMu_rLeP0PvlE0s3DoxGrPgFf6KGwaJpyzqGubXTAdlummhxc46G4SdKGhczFF-yy4bFD1-ji9Vxw6wF_YD0-P5PlxXtppdDgHIZbfO1YQzmN3_Fc2bVyHt7e3RNRvXQu-F6VKx6pojAcz22P0KH5oZ7V-6Qhy4wQddFRVg',
  location2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_s36y2l2ggY8BDIpN0UK0f2panbVHBbdjRXt6K0z_kN-gPlyitmyyJMHT6U6wcDie-jgjbmM4FCv5sYz7tkn2FRk6oiXnu4P-AmTsmejafyxNh5AccFl7wQcXPulYXAS8Sjn_uMcr3w3MDWDjl7RRB8eJr4PuxH8NTvw8zyLaHNZmA_il3ULY8ONOxmSdLbccbp-KqWWGkELn5iZBtzI7HsRkoLp-qg44zaWFrlJqIzNoclZoGp4kag',
  location3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVrvCOM-uUIlX320LVPyvQ50kzhrvOSq9iFdfomIUud1SCEkYKSQDGq_IXAkFdw1owaRfbs9Qky0ExCMCL5b_fVlVVMuV3r4m2f2hSYoPlh3IVNWgeWXzP-GftN9bV9kz8KcGJPIHL-RUBmcbHttnIZLxJtomFwH9wdnEm5oE72RRcJHTfqBwuoIjX4U1spUBDo4IL7K3wEnJyE5WyfCINWrap2TCpJQbA95Yu0nJBZNZGYoopgndp_g',
  matcha: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ua1Q8WJtdmTqDHhVcblFYFm7K82872_3G9ktdWYHXUECtcYywJza9B4W1YxHG_SDwR6zES5P1-yI9_iJ3BnMM7kDzuaVpDbByY95I9q5zJMFCyra69wwpav6gVkbZEFqwXzIJE_cMGV2tT6fxAliPHMQsEeMxKCFZHDRv-lelAnED423uE5yxl-x842k1fTXs7vQAaP8MeMRr6BQPiXxwOlFfxZg6Awk-O7PFZIwHTjpVNJ2lPDQcFXz88BbUXuQgzA',
  lychee: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDURAYwDB_0VD2fVbt2pMvK417zwyYniE0RjjRA5RYr8kgt6k5bIfDeB9dgMF7oJx4sFEBgteSoMdnZ6bJ9Tct2uO3aVaEpEcdt9mc_8GIwsR3DPwGUJhzdkOz6NWjOipSkWbdjJONGtqyclC3Nd3Q8LAHquwb3nVHE2uED4fvmphtjXDJCaA8FDKN2ImGA8gPfIvZSewCPY1urbhMNvp70-9nuGNpixlE8Glw7oLS-gTmfT-A0VYADMQ',
  uji: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASuRDpoGWf_2gZwph_pGjwCZaGOVD3gSOpcIafWjj0Ftyq3yog2BIaVFQUjJvu873I3PV7gNzOdsTNkdfTQ-NI7MK0AAnHPRTwQnNjT-WrtFn5DOV_y1WvRl3KKmDRLx-Y3wBwlQLAtoqA991HatQ4eeUCDrMzoG-X_rPyLQP5mbZthCjLnVubENFNwo-8EdnoSESuBgnC6Nt8B1KpyAl5_X_veq6kG2KT9ufoqA2X4rqal8J6dm8wag',
  caudat: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3wYF_LU-6jZmJl2SHK9QCbL2iE860VCt3a-AM4P5qtCDfh-ZYElLg5jTWQmLTdguZeFfj6IADQJ6Y5PjD5yXRBal6hplY86Fav-S1CaptTx8EIwYi8YtRW48eQoJKx_cHxlDP0B387iiCD03klJMf39Xm0kEnW_b7X1WOX9KEpay2Q9uNP8KM3Fvg4N-_fNMZMsSXDq2lmJDoU2HkSxZtFQ3TzBtkBGTHur6BzzCLpyGmf9wXrYuvkw',
  coworkHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN6RuWstWAzBrExWmDyXo920Xz8-frZDX7GZg-8c7m4rdVPjrGnoy1EwO7QmDVwaC85X_cVK2iZ5U4Atd70Z6xui9JU_nIao_DW1X0bbtN99Pe26yakqmPXb2jcfrp-7fjkr7f97ct7ZZ_zVwM3PCR449yYvPs7dHUMCk2RhJfoXZa0klZaEe-N9M6JAnQyjAPpY-oVvP6B32TYfO9sbkOruO9ro5TTSfQYdkERrDO0crnUx2Ic7nQbw',
  coworkAvailability: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7qNG_WxDCYzJmBTSYUXBkkiENgatVSS76s1OrlEQf0UuvPLJB3vA3P1VryQXzuQG5QZ0mGd0JkSVpP48OXmo3tmjvwu_RpiM9SOiHWkySCwXv-Pkr4ZXCbdvNXwLcsMG3lIYhRi-3dYMMN6Mi5zU5-7ctVsF2MF3uCUBE4mxbSebGZEtdE7yDmDepkEZHOWRK8Tq5xU2Pjo66lZE0BQej0SUKkgoJhA-ZlA1rbZSaFDKu3DZFH867uA',
  event1: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=85&w=900',
  event2: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=85&w=900',
  event3: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=85&w=900',
  journey1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCpEXOsnfiGPKgfaQ_G2X_L2g0EuHh4lFFKCEKjpfi1WmvDR8v_EzLcQtqF0BtTHG7SQWTL0XXEzeG-Y0k5N6QHaC3a51mAEzzy74NB3xp28vcvqnw-6ktNhyg5nrkCL32UtNKmsveLFKDrQEIIHTCRpDno5uCt7fXWbxzxgsCj1Ntc-K1hS5wZO0Rk7Cyozz2_7TXaGdGcSxeIEUmou0OooouywU57WzFR80C9MKFox6taJMC99jHvg',
  journey2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC68PBvonAEfRCTDhaWpODBH7sxFlo5wlrKVQigZdFWjC1a_ZxQlyvpZQdshulOk29_jbG2qvBWtR92aB75xlGbH0jyAZtiltOWD7K7NuXWPqGkTsPciDtcKsSuS4yHnP3f7Zyel6svJj8D4grMFfGz86U8dbd82K5Cl75a_bVrX121dZHzlI9FLa_1jPYeUIUVbZ0ql_BSHV6VPBDcw4MwlOR-IyqZYawjxFarhiixEgcObw5yBzNH7g',
  journey3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTdG1NrleIEy93n6zjVAR-5St-BpBiNoS2P-A4yXsOinqZ91RaPD8ToWFpeXsnSKKW3fFc2ux8xfDfxfCX00Bq2_IgHwiwLDvng4Hnlt3xPlmWuw39ugPG-iNqHcx9qbt1JkIeBqIkVfB7y3wkw5GleluWI7Sol7Oiz4xXLMVnEW4nkkUEi7ibHEs34InhBHj3Ic0H1XkGEx-V2iBScECjD91ITIXOwZLo00fhWV_0W532XZwb3ySjiw',
  journey4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0gF7Wi1VVShGY0fZYA26NcLHMMNT1Sxuo7jLUHZBmcE5G6a_lmdBhjE4e5UvwKfgxTdJ8gfVnSzr92PvcyIjRgu1NSvBGZz1vCRxpMRBr-ucgiv1UYOBONVSky0k9H9iu-5JssFPvX_H-MvkhhHTU5X6tOvl_olhkC6CI5pTXDwe7MaWBZWPnQiR1IgG_HOeN0xT583VRSlkt8-FR69Sizu4qzzTJD2klZGGHP6GIIVjFhA_uyhNnA',
  shirt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWevv72eBqoRE1_nsygaiWyXL0JpJ-jhshwXjdTnI9woeDlIq-729qb9WADUsAQje-SkZfRQhG2Rt2ysFi3WqjEYavtsujORi9V7BqboO8yNVbSJYVcvMK9RywQRsucaG3JdRq0Gh9Gkgkw-h_BC1AqKPanQSJM3HY5LU1YGvF_8jgre7Hpbpd9oiiyKcljRkgExzmD_RewfL7qmiBRCJHjVzuJtCF9VnnW4YXIvnsveUr8KsUcXZLsA',
  cap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkz4_U8DkWTPDXVCk9Bzt7IDUKkkoXBsRMDe16BfgLuaCVh7wX4g2uaSWKDx4kGn6qn5teFqpsTzRClK-_-q7r7w5Kg-lltC-DNhlPh0KwzyzRUulN29a5PtagoxJs1De2_vbMTq5v2tj_VsvK6AhPqEQQEc5uYz3L94V7leMSYBXjBM4_enkjHhBbZyQfqlpoI1u_xa4TDlI_PAkR0BQ0YQoqRhVCJ3Rx_4lnYhzcd8mGT1lzB2bugQ',
}

const slug = (current) => ({_type: 'slug', current})
const ref = (_ref) => ({_type: 'reference', _ref})
const externalButton = (buttonText, href) => ({_type: 'button', buttonText, link: {_type: 'link', linkType: 'href', href}})
const pageButton = (buttonText, pageId) => ({_type: 'button', buttonText, link: {_type: 'link', linkType: 'page', page: ref(pageId)}})

async function image(url, alt, filename) {
  if (!url) return undefined
  if (dryRun) return {_type: 'accessibleImage', asset: ref(`dry-asset-${filename}`), alt}
  const existing = await client.fetch(`*[_type == "sanity.imageAsset" && source.url == $url][0]._id`, {url})
  if (existing) {
    stats.assetsReused++
    return {_type: 'accessibleImage', asset: ref(existing), alt}
  }
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Cannot download ${url}: ${response.status}`)
  const asset = await client.assets.upload('image', Buffer.from(await response.arrayBuffer()), {
    filename: `${filename}.jpg`,
    source: {id: url, name: filename, url},
  })
  stats.assetsUploaded++
  return {_type: 'accessibleImage', asset: ref(asset._id), alt}
}

async function ensureDocument(document) {
  const existing = await client.fetch(`*[_type == $type && migrationKey == $migrationKey][0]{_id, pageBuilder}`, {type: document._type, migrationKey: document.migrationKey})
  if (existing) {
    stats.skipped++
    return {id: existing._id, shouldSeed: !existing.pageBuilder?.length}
  }
  if (document.slug?.current) {
    const collision = await client.fetch(`*[_type == $type && slug.current == $slug][0]{_id, migrationKey}`, {type: document._type, slug: document.slug.current})
    if (collision) throw new Error(`Slug collision: ${document._type}/${document.slug.current}`)
  }
  if (dryRun) {
    stats.created++
    return {id: `dry-${document._type}-${document.migrationKey}`, shouldSeed: true}
  }
  const created = await client.create(document)
  stats.created++
  return {id: created._id, shouldSeed: true}
}

async function ensureHome() {
  const existing = await client.getDocument('homePage')
  if (existing) {
    stats.skipped++
    return {id: 'homePage', shouldSeed: !existing.pageBuilder?.length}
  }
  if (!dryRun) await client.create({_id: 'homePage', _type: 'homePage', name: 'Home', pageBuilder: []})
  stats.created++
  return {id: 'homePage', shouldSeed: true}
}

async function setPage(id, data, shouldSeed) {
  if (!shouldSeed) return
  if (!dryRun) await client.patch(id).set(data).commit()
  stats.patched++
}

async function main() {
  console.log(`${dryRun ? 'DRY RUN' : 'WRITE'}: composable page seed`)

  const locationData = [
    ['le-loi', '59 Lê Lợi', 'The Original Sanctuary', 'Nơi mọi thứ bắt đầu. Một góc nhỏ ấm cúng cho những phiên làm việc sâu, những cuộc trò chuyện gần gũi và nhịp sống chậm giữa trung tâm thành phố.', '07:00 — 23:00', urls.location1],
    ['nguyen-chi-thanh', '80A Nguyễn Chí Thanh', 'Modern Minimalist · Open 24/7', 'Một không gian mở được thiết kế cho cộng tác và sáng tạo, với quầy matcha riêng, bàn cộng đồng rộng và năng lượng không bao giờ ngủ.', 'Open 24/7', urls.location2],
    ['nguyen-tat-thanh', '357 Nguyễn Tất Thành', 'Sea Breeze Hub', 'Khoảng sân rộng nhìn ra biển, đón nắng và gió. Một trạm dừng nhẹ nhàng cho buổi sáng chậm rãi hoặc ly matcha sau chuyến dạo bờ biển.', '06:30 — 23:00', urls.location3],
  ]
  const locationIds = {}
  for (const [key, name, label, description, hours, url] of locationData) {
    const doc = {_type: 'location', migrationKey: `location:${key}`, name, slug: slug(key), label, address: name, shortDescription: description, description, hours, image: await image(url, `Không gian Tổ Cà Phê ${name}`, `location-${key}`), availabilityLabel: key === 'le-loi' ? 'Seats available' : undefined, availabilityPercent: key === 'le-loi' ? 85 : undefined}
    locationIds[key] = (await ensureDocument(doc)).id
  }

  const categories = [['matcha', 'Specialty Matcha'], ['coffee', 'Vietnamese Coffee'], ['tea', 'Tea & Others']]
  const categoryIds = {}
  for (const [key, name] of categories) categoryIds[key] = (await ensureDocument({_type: 'menuCategory', migrationKey: `menu-category:${key}`, name, slug: slug(key), order: categories.findIndex(([candidate]) => candidate === key)})).id

  const menuData = [
    ['uji-matcha-cloud', 'Uji Matcha Cloud', 'matcha', 'Ceremonial-grade Uji matcha topped with our salted sweet-cream cloud.', 65000, '65k', urls.matcha],
    ['strawberry-matcha', 'Strawberry Matcha', 'matcha', '', 68000, '68k'], ['coconut-matcha', 'Coconut Matcha', 'matcha', '', 62000, '62k'], ['pure-uji', 'Pure Uji', 'matcha', '', 52000, '52k'],
    ['cau-dat-brown', 'Cầu Đất Brown', 'coffee', 'Cầu Đất Arabica slowly phin-dripped over silky condensed milk.', 55000, '55k'],
    ['ca-phe-muoi', 'Cà Phê Muối', 'coffee', '', 48000, '48k'], ['cold-brew-tonic', 'Cold Brew Tonic', 'coffee', '', 58000, '58k'], ['phin-den-sua', 'Phin Đen / Sữa', 'coffee', '', 42000, '42k'],
    ['lychee-blossom', 'Lychee Blossom Tea', 'tea', 'Cold-brewed black tea infused with fresh lychee and soft floral notes.', 58000, '58k', urls.lychee],
    ['peach-oolong', 'Peach Oolong', 'tea', '', 55000, '55k'], ['cacao-cloud', 'Cacao Cloud', 'tea', '', 60000, '60k'], ['seasonal-soda', 'Seasonal Soda', 'tea', '', 52000, '52k'],
  ]
  const menuIds = {}
  for (const [key, name, category, description, price, priceLabel, url] of menuData) {
    menuIds[key] = (await ensureDocument({_type: 'menuItem', migrationKey: `menu-item:${key}`, name, slug: slug(key), category: ref(categoryIds[category]), description: description || undefined, price, priceLabel, status: 'available', image: url ? await image(url, name, `menu-${key}`) : undefined})).id
  }

  const eventData = [['acoustic-night', 'Acoustic Night', 'Music', '23.08', 'Cozy live music under the stars.', urls.event1], ['workshop-lam-gom', 'Workshop Làm Gốm', 'Workshop', '30.08', 'Shape, glaze, and take home your own cup.', urls.event2], ['talkshow-sang-tao', 'Talkshow Sáng Tạo', 'Talkshow', '06.09', 'Creative discussions with local artists.', urls.event3]]
  const eventIds = []
  for (const [key, name, category, dateLabel, description, url] of eventData) eventIds.push((await ensureDocument({_type: 'event', migrationKey: `event:${key}`, name, slug: slug(key), category, dateLabel, description, image: await image(url, name, `event-${key}`)})).id)

  const productData = [
    ['cham-hoc-shirt', 'Áo Phông Chăm Học Chăm Làm', 'New arrival', 'Thiết kế tối giản trên chất liệu cotton cao cấp, thấm hút tốt. Slogan đặc trưng của Tổ là một lời nhắc nhẹ về sự tập trung và nỗ lực mỗi ngày.', 390000, '390.000đ', urls.shirt],
    ['cham-hoc-cap', 'Nón Chăm Học Chăm Làm', 'Essential', 'Mũ lưỡi trai 6 múi phom cứng cáp với hình thêu tỉ mỉ. Một phụ kiện giúp che chắn xao nhãng và bước vào những phiên làm việc tập trung cao độ.', 280000, '280.000đ', urls.cap],
  ]
  const productIds = []
  for (const [key, name, label, description, price, priceLabel, url] of productData) productIds.push((await ensureDocument({_type: 'product', migrationKey: `product:${key}`, name, slug: slug(key), label, description, price, priceLabel, image: await image(url, name, `product-${key}`), ctaLabel: 'Xem tại cửa hàng'})).id)

  const pageRecords = {}
  for (const [key, name] of [['menu', 'Menu'], ['spaces', 'Không Gian'], ['coworking', 'Co-working Space'], ['journey', 'Hành Trình Của Tổ'], ['merchandise', 'Vật Phẩm Của Tổ']]) {
    pageRecords[key] = await ensureDocument({_type: 'page', migrationKey: `page:${key}`, name, slug: slug(key), pageBuilder: []})
  }
  const home = await ensureHome()
  const pageIds = Object.fromEntries(Object.entries(pageRecords).map(([key, value]) => [key, value.id]))

  const homeImage = await image(urls.homeHero, 'Không gian làm việc và cà phê tại Tổ', 'home-hero')
  await setPage(home.id, {seo: {_type: 'seo', metaTitle: 'Tổ Cà Phê — Trạm Dừng Sáng Tạo', metaDescription: 'Coffee, matcha, co-working, and community in Đà Nẵng.'}, pageBuilder: [
    {_key: 'home-hero', _type: 'heroBlock', variant: 'immersive', eyebrow: 'Coffee · Matcha · Community', heading: 'Trạm Dừng', accentHeading: 'Sáng Tạo.', description: 'Một không gian cho những ý tưởng mới, những cuộc trò chuyện hay và những ly cà phê thật tử tế giữa lòng Đà Nẵng.', image: homeImage, primaryCta: pageButton('Explore menu', pageIds.menu), secondaryCta: pageButton('Find your Tổ', pageIds.spaces)},
    {_key: 'home-ticker', _type: 'announcementTickerBlock', items: [{_key: 'new-location', _type: 'announcement', text: 'Now open at 357 Nguyễn Tất Thành'}, {_key: 'always-open', _type: 'announcement', text: 'Open 24/7'}, {_key: 'focus', _type: 'announcement', text: 'Chăm học chăm làm'}, {_key: 'specialty', _type: 'announcement', text: 'Specialty coffee & matcha'}]},
    {_key: 'home-menu', _type: 'menuHighlightsBlock', eyebrow: '01 / Signature', heading: 'A little ritual,\nmade at Tổ.', items: [ref(menuIds['uji-matcha-cloud']), ref(menuIds['cau-dat-brown']), ref(menuIds['lychee-blossom'])], cta: pageButton('View full menu', pageIds.menu)},
    {_key: 'home-locations', _type: 'locationsBlock', variant: 'cards', eyebrow: '02 / Our spaces', heading: 'Find your corner.', intro: 'Three addresses. Three different rhythms. One shared home for good work and better pauses.', locations: Object.values(locationIds).map(ref), cta: pageButton('View all spaces', pageIds.spaces)},
    {_key: 'home-events', _type: 'eventsBlock', selectionMode: 'manual', eyebrow: '03 / Community', heading: 'Sự Kiện Tại Tổ.', events: eventIds.map(ref), limit: 3},
    {_key: 'home-cta', _type: 'callToActionBlock', eyebrow: 'The doors are open', heading: 'Come for the coffee.\nStay for the spark.', theme: 'secondary', cta: pageButton('Find a location', pageIds.spaces)},
  ]}, home.shouldSeed)

  await setPage(pageIds.menu, {seo: {_type: 'seo', metaTitle: 'Menu', metaDescription: 'Specialty matcha, Vietnamese coffee, tea, and pastries at Tổ Cà Phê.'}, pageBuilder: [
    {_key: 'menu-hero', _type: 'heroBlock', variant: 'standard', eyebrow: 'Drink slowly / Stay awhile', heading: 'Our Menu', description: 'A curated selection of specialty drinks and pastries, blending Vietnamese roots with an electric, modern energy.', badge: 'Season 08 · 2026'},
    {_key: 'menu-highlights', _type: 'menuHighlightsBlock', items: [ref(menuIds['uji-matcha-cloud']), ref(menuIds['cau-dat-brown']), ref(menuIds['lychee-blossom'])]},
    {_key: 'menu-catalog', _type: 'menuCatalogBlock', eyebrow: 'Full selection', heading: 'Pick your energy.', intro: 'Mỗi món được pha khi bạn gọi. Hãy nói với barista về độ ngọt, loại sữa hoặc nhịp năng lượng bạn cần hôm nay.', categories: Object.values(categoryIds).map(ref)},
    {_key: 'menu-origin', _type: 'splitStoryBlock', theme: 'secondary', eyebrow: 'Rooted in origin', heading: 'From Uji\nto Cầu Đất.', intro: 'Matcha từ những nông trại lâu đời ở Uji, Arabica từ cao nguyên sương mù Cầu Đất. Hai nguồn gốc, cùng một sự tôn trọng dành cho nguyên liệu.', primaryImage: await image(urls.uji, 'Uji matcha powder', 'origin-uji'), secondaryImage: await image(urls.caudat, 'Cầu Đất Arabica beans', 'origin-cau-dat')},
  ]}, pageRecords.menu.shouldSeed)

  await setPage(pageIds.spaces, {seo: {_type: 'seo', metaTitle: 'Không Gian', metaDescription: 'Khám phá ba không gian Tổ Cà Phê tại Đà Nẵng.'}, pageBuilder: [
    {_key: 'spaces-hero', _type: 'heroBlock', variant: 'standard', eyebrow: 'Spaces / Đà Nẵng', heading: 'Chọn một góc của riêng bạn.', description: 'Ba chiếc Tổ, ba cá tính khác nhau. Mỗi nơi kết hợp thiết kế tối giản, hơi ấm tự nhiên và đủ khoảng lặng để bạn tìm thấy nhịp điệu của mình.', badge: '3 locations · 1 open 24/7'},
    {_key: 'spaces-list', _type: 'locationsBlock', variant: 'alternatingDetails', locations: Object.values(locationIds).map(ref)},
    {_key: 'spaces-cta', _type: 'callToActionBlock', eyebrow: 'Find your spot', heading: 'Một chiếc Tổ luôn ở gần bạn.', intro: 'Ghé bất kỳ lúc nào, hoặc đặt trước bàn nhóm để chắc chắn có một góc thật vừa ý.', theme: 'surface', cta: pageButton('Book a table', pageIds.coworking)},
  ]}, pageRecords.spaces.shouldSeed)

  await setPage(pageIds.coworking, {seo: {_type: 'seo', metaTitle: 'Co-working Space', metaDescription: 'Không gian làm việc sáng tạo tại Tổ Cà Phê Đà Nẵng.'}, pageBuilder: [
    {_key: 'cowork-hero', _type: 'heroBlock', variant: 'standard', eyebrow: 'Work / Create / Connect', heading: 'Your creative sanctuary in Đà Nẵng.', description: 'Sunlit desks, high-speed Wi-Fi, and endless matcha. Whether you’re coding, designing, or just dreaming, find your flow here.', primaryCta: pageButton('Book a team table', pageIds.spaces)},
    {_key: 'cowork-media', _type: 'mediaFeatureBlock', eyebrow: 'Live at 59 Lê Lợi', heading: 'Good light. Deep focus.', badge: '85% seats available', image: await image(urls.coworkHero, 'Không gian co-working đầy ánh sáng tại Tổ', 'cowork-hero')},
    {_key: 'cowork-vibes', _type: 'featureGridBlock', variant: 'cards', eyebrow: 'Choose your vibe', heading: 'A space for every mode.', features: [{_key: 'quiet', _type: 'feature', icon: 'square', title: 'Quiet Zone', description: 'Bàn riêng cùng tấm tiêu âm, dành cho những giờ tập trung không gián đoạn.'}, {_key: 'team', _type: 'feature', icon: 'users', title: 'Team Area', description: 'Bàn cộng đồng rộng rãi cho cộng tác, họp nhóm và workshop.'}, {_key: 'outdoor', _type: 'feature', icon: 'sun', title: 'Outdoor Balcony', description: 'Không khí trong lành, cây xanh và tầm nhìn phố cho những cuộc gặp thư thả.'}]},
    {_key: 'cowork-availability', _type: 'availabilityBlock', eyebrow: 'Editor-managed availability', heading: 'Check before you drop in.', intro: 'The room is vibrant and bustling right now, with quiet desks still available upstairs.', image: await image(urls.coworkAvailability, 'Ban công Tổ Cà Phê nhìn ra phố', 'cowork-availability'), location: ref(locationIds['le-loi']), percent: 68, lowLabel: 'Quiet', highLabel: 'Buzzing', cta: pageButton('Secure a spot', pageIds.spaces)},
    {_key: 'cowork-amenities', _type: 'featureGridBlock', variant: 'compactAmenities', heading: 'Everything you need.', features: [{_key: 'ac', _type: 'feature', icon: 'snowflake', title: '24/7 AC', description: 'Stay cool always.'}, {_key: 'wifi', _type: 'feature', icon: 'wifi', title: 'High-speed Wi-Fi', description: 'Fast and stable.'}, {_key: 'snacks', _type: 'feature', icon: 'cookie', title: 'Artisan Snacks', description: 'Fuel your focus.'}, {_key: 'outlets', _type: 'feature', icon: 'plug', title: 'Outlets Everywhere', description: 'Never run dry.'}]},
  ]}, pageRecords.coworking.shouldSeed)

  const milestoneData = [['2018', 'Khởi Nguyên Tại Lê Lợi', 'Mọi thứ bắt đầu tại 59 Lê Lợi, một góc nhỏ tĩnh lặng giữa trung tâm Đà Nẵng. Chúng tôi gọi nó là “Tổ” đầu tiên — nơi trú ẩn an toàn cho những tâm hồn cần sự tập trung và một ly cà phê tử tế.', urls.journey1], ['2020', 'Định Hình Không Gian Sâu', 'Giữa những biến động, chúng tôi nhận ra nhu cầu mãnh liệt về một không gian làm việc chuyên nghiệp ngoài văn phòng. Tổ bắt đầu thiết kế những khu vực “deep work” với ánh sáng và âm thanh được cân chỉnh.', urls.journey2], ['2022', 'Bước Chuyển 24/7', '80A Nguyễn Chí Thanh đánh dấu bước chuyển với mô hình hoạt động 24/7. Tổ luôn ở đó, từ sáng sớm đến đêm muộn, đồng hành cùng những “cú đêm” đang chạy deadline.', urls.journey3], ['2024', 'Hành Trình Mới Bờ Biển', 'Trạm dừng mới tại 357 Nguyễn Tất Thành mang hơi thở biển cả và dòng Specialty Matcha cao cấp, mở ra một chương mới cho trải nghiệm đồ uống và không gian thư giãn tĩnh lặng.', urls.journey4]]
  const milestones = []
  for (const [dateLabel, title, body, url] of milestoneData) milestones.push({_key: `milestone-${dateLabel}`, _type: 'milestone', dateLabel, title, body, image: await image(url, title, `journey-${dateLabel}`)})
  await setPage(pageIds.journey, {seo: {_type: 'seo', metaTitle: 'Hành Trình Của Tổ', metaDescription: 'Từ chiếc Tổ đầu tiên đến cộng đồng sáng tạo tại Đà Nẵng.'}, pageBuilder: [{_key: 'journey-hero', _type: 'heroBlock', variant: 'standard', eyebrow: 'Our story / 2018 — now', heading: 'Hành Trình Của Tổ', description: 'Từ một góc nhỏ tĩnh lặng đến những không gian làm việc sâu đầy cảm hứng. Đây là câu chuyện trưởng thành cùng cộng đồng qua từng hạt cà phê và lá matcha.'}, {_key: 'journey-timeline', _type: 'timelineBlock', milestones}, {_key: 'journey-cta', _type: 'callToActionBlock', eyebrow: 'The next chapter', heading: 'Câu chuyện tiếp tục,\ncùng với bạn.', theme: 'secondary'}]}, pageRecords.journey.shouldSeed)

  await setPage(pageIds.merchandise, {seo: {_type: 'seo', metaTitle: 'Vật Phẩm Của Tổ', metaDescription: 'Mang tinh thần Chăm Học Chăm Làm theo bạn mỗi ngày.'}, pageBuilder: [{_key: 'merch-hero', _type: 'heroBlock', variant: 'standard', eyebrow: 'Tổ objects / Small batch', heading: 'Vật Phẩm Của Tổ', description: 'Mang tinh thần “chiếc tổ” theo bạn mỗi ngày. Những thiết kế tối giản, tập trung vào công năng, đồng hành cùng bạn trong những giờ làm việc sâu.'}, {_key: 'merch-products', _type: 'productsBlock', products: productIds.map(ref)}, {_key: 'merch-story', _type: 'splitStoryBlock', eyebrow: 'Made to last', heading: 'Less stuff.\nBetter objects.', intro: 'Mỗi vật phẩm được sản xuất với số lượng nhỏ, ưu tiên chất liệu bền và khả năng sử dụng lâu dài. Có thể xem và thử trực tiếp tại mọi chi nhánh Tổ.'}]}, pageRecords.merchandise.shouldSeed)

  const footerGroups = [
    {_key: 'explore', _type: 'footerGroup', title: 'Explore', links: [['Menu', 'menu'], ['Co-working', 'coworking'], ['Our journey', 'journey'], ['Merchandise', 'merchandise']].map(([label, key]) => ({_key: `footer-${key}`, _type: 'footerLink', label, link: {_type: 'link', linkType: 'page', page: ref(pageIds[key])}}))},
    {_key: 'patterns', _type: 'footerGroup', title: 'Patterns', links: [['Bauhaus Grid', '/patterns/bauhaus-grid'], ['Electric Wave', '/patterns/electric-wave'], ['Organic Rhythm', '/patterns/organic-rhythm']].map(([label, href]) => ({_key: `footer-${href.split('/').at(-1)}`, _type: 'footerLink', label, link: {_type: 'link', linkType: 'href', href}}))},
    {_key: 'connect', _type: 'footerGroup', title: 'Connect', links: [['Instagram', 'https://www.instagram.com/'], ['Facebook', 'https://www.facebook.com/']].map(([label, href]) => ({_key: `footer-${label.toLowerCase()}`, _type: 'footerLink', label, link: {_type: 'link', linkType: 'href', href, openInNewTab: true}}))},
  ]
  const settingsPatch = {
    brandName: 'Tổ Cà Phê', logoText: 'Tổ', headerStatus: 'Seats: 85%', footerIntro: 'A modern organic space for coffee, matcha, deep work, and community in Đà Nẵng.', contactEmail: 'hello@tocaphe.vn', copyright: '© 2026 Tổ Cà Phê',
    navigation: [['Spaces', 'spaces'], ['Work', 'coworking'], ['Menu', 'menu'], ['Journey', 'journey'], ['Shop', 'merchandise']].map(([label, key]) => ({_key: `nav-${key}`, _type: 'navigationItem', label, link: {_type: 'link', linkType: 'page', page: ref(pageIds[key])}})),
    headerCta: pageButton('Book now', pageIds.spaces),
    footerGroups,
    footerLocations: Object.values(locationIds).map(ref),
    defaultSeo: {_type: 'seo', metaTitle: 'Tổ Cà Phê', metaDescription: 'Coffee, matcha, co-working, and community in Đà Nẵng.'},
  }
  if (!dryRun) {
    await client.patch('siteSettings').setIfMissing(settingsPatch).commit()
    const currentGroups = await client.fetch(`*[_id == "siteSettings"][0].footerGroups[]{_key}`)
    if (currentGroups?.length === 1 && currentGroups[0]?._key === 'explore') {
      await client.patch('siteSettings').set({footerGroups}).commit()
    }
  }
  stats.patched++
  console.log(JSON.stringify(stats, null, 2))
}

main().catch((error) => {console.error(error); process.exitCode = 1})
