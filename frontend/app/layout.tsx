import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Be_Vietnam_Pro, JetBrains_Mono, Work_Sans} from 'next/font/google'
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity/visual-editing'
import {Toaster} from 'sonner'

import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {SanityLive} from '@/sanity/lib/live'
import {handleError} from '@/app/client-utils'

export const metadata: Metadata = {
  title: {
    template: '%s | Tổ Cà Phê',
    default: 'Tổ Cà Phê — Trạm Dừng Sáng Tạo',
  },
  description: 'Coffee, matcha, co-working, and community in Đà Nẵng.',
}

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const workSans = Work_Sans({
  variable: '--font-body',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-label',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({children}: LayoutProps<'/'>) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${workSans.variable} ${jetBrainsMono.variable}`}>
      <body>
        <section className="min-h-screen">
          {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
              <VisualEditing />
            </>
          )}
          {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
          <SanityLive onError={handleError} />
          <Header />
          <main className="">{children}</main>
          <Footer />
        </section>
        <SpeedInsights />
      </body>
    </html>
  )
}
