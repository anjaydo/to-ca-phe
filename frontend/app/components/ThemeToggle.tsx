'use client'

import {useSyncExternalStore} from 'react'
import {Monitor, Moon, Sun, type LucideIcon} from 'lucide-react'

type ThemePreference = 'system' | 'light' | 'dark'

const themes: ThemePreference[] = ['system', 'light', 'dark']

const themeMeta: Record<ThemePreference, {icon: LucideIcon; label: string}> = {
  system: {icon: Monitor, label: 'Theo hệ thống'},
  light: {icon: Sun, label: 'Giao diện sáng'},
  dark: {icon: Moon, label: 'Giao diện tối'},
}

function applyTheme(theme: ThemePreference) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark)

  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.dataset.theme = theme
}

function getThemePreference(): ThemePreference {
  const savedTheme = window.localStorage.getItem('theme')
  return themes.includes(savedTheme as ThemePreference) ? (savedTheme as ThemePreference) : 'system'
}

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const syncTheme = () => {
    const preference = getThemePreference()
    if (preference === 'system') applyTheme(preference)
    onStoreChange()
  }

  media.addEventListener('change', syncTheme)
  window.addEventListener('storage', syncTheme)
  window.addEventListener('themechange', syncTheme)

  return () => {
    media.removeEventListener('change', syncTheme)
    window.removeEventListener('storage', syncTheme)
    window.removeEventListener('themechange', syncTheme)
  }
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<ThemePreference>(subscribe, getThemePreference, () => 'system')

  function cycleTheme() {
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]
    window.localStorage.setItem('theme', nextTheme)
    applyTheme(nextTheme)
    window.dispatchEvent(new Event('themechange'))
  }

  const meta = themeMeta[theme]
  const Icon = meta.icon

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="grid size-10 shrink-0 place-items-center rounded-full border border-outline-variant bg-surface-container-low text-lg text-primary transition-colors hover:border-primary hover:bg-surface-container focus-visible:outline-2"
      aria-label={`${meta.label}. Nhấn để đổi giao diện.`}
      title={meta.label}
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  )
}
