'use client'

import {Menu, X} from 'lucide-react'
import Link from 'next/link'
import {useCallback, useEffect, useRef, useState, useTransition, ViewTransition} from 'react'

import ResolvedLink from '@/app/components/ResolvedLink'
import type {SettingsQueryResult} from '@/sanity.types'

export const fallbackNavigation = [
  ['Spaces', '/spaces'],
  ['Work', '/coworking'],
  ['Menu', '/menu'],
  ['Journey', '/journey'],
  ['Shop', '/merchandise'],
] as const

type MobileMenuProps = {
  navigation?: NonNullable<SettingsQueryResult>['navigation']
  direction?: 'left' | 'right'
}

export default function MobileMenu({navigation, direction = 'left'}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [, startTransition] = useTransition()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const updateOpen = useCallback((nextOpen: boolean) => {
    startTransition(() => setIsOpen(nextOpen))
  }, [])

  const closeMenu = useCallback(() => {
    updateOpen(false)
    triggerRef.current?.focus()
  }, [updateOpen])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeMenu, isOpen])

  const entersFrom = direction === 'right' ? 'slide-from-right' : 'slide-from-left'
  const exitsTo = direction === 'right' ? 'slide-to-right' : 'slide-to-left'

  return (
    <div className="justify-self-start lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="grid size-11 place-items-center rounded-full border border-outline-variant bg-surface text-primary transition-colors hover:border-primary"
        aria-label="Mở menu chính"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => updateOpen(true)}
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      {isOpen && (
        <>
          <ViewTransition enter="fade-in" exit="fade-out" default="none">
            <button
              type="button"
              className="fixed inset-0 z-50 bg-black/45"
              aria-label="Đóng menu chính"
              onClick={closeMenu}
            />
          </ViewTransition>
          <ViewTransition enter={entersFrom} exit={exitsTo} default="none">
            <aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Menu chính"
              className={`fixed inset-y-0 z-60 flex w-[min(22rem,88vw)] flex-col bg-surface p-6 text-on-surface shadow-2xl ${direction === 'right' ? 'right-0' : 'left-0'}`}
            >
              <div className={`flex ${direction === 'right' ? 'justify-start' : 'justify-end'}`}>
                <button
                  ref={closeRef}
                  type="button"
                  className="grid size-11 place-items-center rounded-full border border-outline-variant text-primary transition-colors hover:border-primary"
                  aria-label="Đóng menu chính"
                  onClick={closeMenu}
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="mt-12">
                <ul className="flex flex-col">
                  {navigation?.length
                    ? navigation.map(
                        (item) =>
                          item.link && (
                            <li key={item._key} onClick={closeMenu}>
                              <ResolvedLink
                                link={item.link}
                                className="block border-b border-outline-variant py-5 text-xl font-bold tracking-tight text-on-surface transition-colors hover:text-primary"
                              >
                                {item.label}
                              </ResolvedLink>
                            </li>
                          ),
                      )
                    : fallbackNavigation.map(([label, href]) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="block border-b border-outline-variant py-5 text-xl font-bold tracking-tight text-on-surface transition-colors hover:text-primary"
                            onClick={closeMenu}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                </ul>
              </nav>
            </aside>
          </ViewTransition>
        </>
      )}
    </div>
  )
}
