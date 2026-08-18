'use client'

import {useState} from 'react'
import {Copy} from 'lucide-react'

export default function GetStartedCode() {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'npm create sanity@latest -- --template sanity-io/sanity-template-nextjs-clean',
    )
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 2000)
  }

  return (
    <div className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-inverse-surface p-4 text-center font-mono text-sm text-inverse-on-surface shadow-hard selection:bg-secondary-fixed selection:text-on-secondary-fixed md:inline-flex md:flex-row md:whitespace-nowrap md:rounded-full md:py-2 md:pl-6 md:pr-2 lg:text-base">
      <span>npm create sanity@latest -- --template sanity-io/sanity-template-nextjs-clean</span>
      <button
        className="relative flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-4 py-2 text-on-primary transition-colors duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed md:aspect-square md:rounded-full md:p-2"
        onClick={handleCopy}
        aria-label="Copy to clipboard"
      >
        <span className="md:hidden">{showTooltip ? 'Copied!' : 'Copy Snippet'}</span>
        <Copy aria-hidden="true" className="size-4 md:size-6" />
        <span
          className={`absolute bottom-full left-1/2 hidden -translate-x-1/2 -translate-y-4 transform rounded bg-secondary-fixed px-4 py-2 text-xs text-on-secondary-fixed transition-opacity duration-300 md:block ${
            showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          Copied!
        </span>
      </button>
    </div>
  )
}
