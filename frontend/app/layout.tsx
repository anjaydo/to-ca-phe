import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Be_Vietnam_Pro, JetBrains_Mono, Work_Sans} from 'next/font/google'
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity/visual-editing'
import {Toaster} from 'sonner'

import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header/Header'
import ThemeToggle from '@/app/components/ThemeToggle'
import {SanityLive} from '@/sanity/lib/live'
import {handleError} from '@/app/client-utils'
import {sanityFetch} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: {
    template: '%s | Tổ Cà Phê',
    default: 'Tổ Cà Phê — Trạm Dừng Sáng Tạo',
  },
  description: 'Coffee, matcha, co-working, and community in Đà Nẵng.',
}

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  weight: ['400', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({children}: LayoutProps<'/'>) {
  const {isEnabled: isDraftMode} = await draftMode()
  const {data: settings} = await sanityFetch({query: settingsQuery})

  return (
    <html
      lang="vi"
      suppressHydrationWarning
      data-theme="system"
      className={`${beVietnamPro.variable} ${workSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=t==='light'||t==='dark'?t:'system';var d=p==='dark'||(p==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.theme=p}catch(e){}})()`,
          }}
        />
      </head>
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
          <Header themeToggle={<ThemeToggle />} settings={settings} />
          <main className="">{children}</main>
          <Footer settings={settings} />
        </section>
        <SpeedInsights />
      </body>
    </html>
  )
}
