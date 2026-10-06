import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

type ThemePreference = 'light' | 'dark' | 'system'
const storageKey = 'portfolio-theme'

function readPreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // The selector still works when browser storage is unavailable.
  }
  return 'system'
}

export function ThemeControl() {
  const [preference, setPreference] = useState<ThemePreference>(readPreference)

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = () => {
      const resolved = preference === 'system' ? systemTheme.matches ? 'dark' : 'light' : preference
      document.documentElement.dataset.theme = resolved
      document.documentElement.style.colorScheme = resolved
    }
    applyTheme()
    systemTheme.addEventListener('change', applyTheme)
    const syncPreference = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) setPreference(readPreference())
    }
    window.addEventListener('storage', syncPreference)
    return () => {
      systemTheme.removeEventListener('change', applyTheme)
      window.removeEventListener('storage', syncPreference)
    }
  }, [preference])

  const options = [
    { value: 'dark', label: 'Dark appearance', Icon: Moon },
    { value: 'light', label: 'Light appearance', Icon: Sun },
    { value: 'system', label: 'System appearance', Icon: Monitor },
  ] as const

  return (
    <div className="theme-control" role="group" aria-label="Appearance">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          className="theme-control__button"
          aria-label={label}
          aria-pressed={preference === value}
          title={label}
          onClick={() => {
            setPreference(value)
            try {
              localStorage.setItem(storageKey, value)
            } catch {
              // Keep the selection usable when storage is unavailable.
            }
          }}
        >
          <Icon aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
