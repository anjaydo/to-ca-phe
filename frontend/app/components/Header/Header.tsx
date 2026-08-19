import Link from 'next/link'
import type {ReactNode} from 'react'

import ResolvedLink from '@/app/components/ResolvedLink'
import Image from '@/app/components/SanityImage'
import MobileMenu, {fallbackNavigation} from '@/app/components/Header/MobileMenu'
import type {SettingsQueryResult} from '@/sanity.types'

export default function Header({
  themeToggle,
  settings,
}: {
  themeToggle: ReactNode
  settings: SettingsQueryResult
}) {
  const logoLight = settings?.logoLight
  const logoDark = settings?.logoDark
  const hasLogo = Boolean(logoLight?.asset?._ref || logoDark?.asset?._ref)

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-outline-variant bg-white dark:bg-surface-variant backdrop-blur-xl"
      style={{viewTransitionName: 'site-header'}}
    >
      <div className="site-container grid min-h-20 grid-cols-[1fr_auto_1fr] items-center gap-x-3 py-2 lg:flex lg:flex-nowrap lg:justify-between lg:gap-x-5 lg:py-0">
        <MobileMenu
          navigation={settings?.navigation}
          direction={settings?.mobileMenuDirection === 'right' ? 'right' : 'left'}
        />
        <Link
          href="/"
          className="flex h-16 items-center justify-self-center text-primary lg:w-[200px] lg:justify-self-auto"
          aria-label={`${settings?.brandName || 'Tổ Cà Phê'} — home`}
        >
          {hasLogo ? (
            <>
              {(logoLight?.asset?._ref || logoDark?.asset?._ref) && (
                <Image
                  id={(logoLight?.asset?._ref || logoDark?.asset?._ref) as string}
                  alt={logoLight?.alt || settings?.brandName || 'Tổ Cà Phê'}
                  width={160}
                  height={160}
                  mode="contain"
                  crop={logoLight?.crop || logoDark?.crop}
                  hotspot={logoLight?.hotspot || logoDark?.hotspot}
                  className="h-16 w-auto object-contain dark:hidden"
                />
              )}
              {(logoDark?.asset?._ref || logoLight?.asset?._ref) && (
                <Image
                  id={(logoDark?.asset?._ref || logoLight?.asset?._ref) as string}
                  alt={logoDark?.alt || settings?.brandName || 'Tổ Cà Phê'}
                  width={160}
                  height={160}
                  mode="contain"
                  crop={logoDark?.crop || logoLight?.crop}
                  hotspot={logoDark?.hotspot || logoLight?.hotspot}
                  className="hidden h-16 w-auto object-contain dark:block"
                />
              )}
              <span className="sr-only">{settings?.brandName || 'Tổ Cà Phê'}</span>
            </>
          ) : (
            <>
              <span className="grid size-10 place-items-center rounded-full border border-primary text-lg font-extrabold text-primary">
                {settings?.logoText || 'Tổ'}
              </span>
              <span className="text-lg font-bold tracking-tight sm:text-xl">
                {settings?.brandName || 'Tổ Cà Phê'}
              </span>
            </>
          )}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden gap-6 lg:flex lg:w-auto"
        >
          {settings?.navigation?.length
            ? settings.navigation.map(
                (item) =>
                  item.link && (
                    <ResolvedLink
                      key={item._key}
                      link={item.link}
                      className="eyebrow text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {item.label}
                    </ResolvedLink>
                  ),
              )
            : fallbackNavigation.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="eyebrow text-on-surface-variant transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ))}
        </nav>
        <div className="flex items-center justify-end gap-3 justify-self-end lg:w-[200px]">
          {/* {settings?.headerStatus && (
            <span className="eyebrow hidden rounded-full border border-primary/40 px-3 py-2 text-primary md:inline-flex">
              <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-primary" />
              {settings.headerStatus}
            </span>
          )} */}
          {themeToggle}
          {settings?.headerCta?.buttonText && settings.headerCta.link ? (
            <ResolvedLink
              link={settings.headerCta.link}
              className="hidden rounded-2xl bg-tertiary-container px-5 py-3 text-xs font-bold uppercase tracking-wider text-on-tertiary-container transition hover:brightness-110 lg:inline-flex"
            >
              {settings.headerCta.buttonText}
            </ResolvedLink>
          ) : (
            <Link
              href="/spaces"
              className="hidden rounded-2xl bg-tertiary-container px-5 py-3 text-xs font-bold uppercase tracking-wider text-on-tertiary-container lg:inline-flex"
            >
              Book now
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
