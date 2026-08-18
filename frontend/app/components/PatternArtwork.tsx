export type PatternName = 'bauhaus-grid' | 'electric-wave' | 'organic-rhythm'

export const patternData: Record<PatternName, {title: string; description: string; background: string}> = {
  'bauhaus-grid': {
    title: 'Bauhaus Grid',
    description: 'A precise modular language built from circles, triangles, rhythm, and contrast.',
    background: '#faf8f5',
  },
  'electric-wave': {
    title: 'Electric Wave',
    description: 'A nocturnal current that carries the energy of late-night work through the brand.',
    background: '#154734',
  },
  'organic-rhythm': {
    title: 'Organic Rhythm',
    description: 'Coffee-bean forms and soft gestures give the editorial system a human pulse.',
    background: '#faf8f5',
  },
}

export default function PatternArtwork({name, className = ''}: {name: PatternName; className?: string}) {
  if (name === 'bauhaus-grid') {
    return (
      <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Bauhaus Grid pattern">
        <rect width="100" height="100" fill="#faf8f5" />
        <g fill="#154734">
          <rect width="25" height="25" />
          <circle cx="37.5" cy="12.5" r="12.5" fill="#f5b800" />
          <path d="M50 0h25L50 25Z" />
          <rect x="75" width="25" height="25" opacity=".6" />
          <path d="M0 50Q12.5 25 25 50T50 50" fill="none" stroke="#154734" strokeWidth="2" />
          <rect x="25" y="25" width="25" height="25" opacity=".2" />
          <rect x="50" y="25" width="25" height="25" />
          <circle cx="87.5" cy="37.5" r="8" fill="#f5b800" />
          <circle cx="12.5" cy="62.5" r="12.5" />
          <path d="m25 50 25 25H25Z" fill="#f5b800" />
          <rect x="50" y="50" width="25" height="25" opacity=".8" />
          <path d="M75 50c0 12.5 25 12.5 25 0" fill="none" stroke="#154734" strokeWidth="4" />
          <rect y="75" width="25" height="25" fill="#f5b800" opacity=".5" />
          <circle cx="37.5" cy="87.5" r="10" />
          <rect x="50" y="75" width="25" height="25" />
          <path d="m75 75 25 25H75Z" fill="#f5b800" />
        </g>
      </svg>
    )
  }

  if (name === 'electric-wave') {
    return (
      <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Electric Wave pattern">
        <rect width="100" height="100" fill="#154734" />
        <g fill="none" stroke="#f5b800" strokeWidth=".5" opacity=".3">
          <path d="M0 20Q25 0 50 20t50 0" />
          <path d="M0 40q25-20 50 0t50 0" />
          <path d="M0 60q25-20 50 0t50 0" />
          <path d="M0 80q25-20 50 0t50 0" />
        </g>
        <g fill="#f5b800" opacity=".8">
          <circle cx="20" cy="20" r="2" /><circle cx="70" cy="35" r="1.5" />
          <circle cx="40" cy="70" r="2.5" /><circle cx="90" cy="85" r="1.2" />
        </g>
        <path d="M10 70h20L20 90Z" fill="#f5b800" opacity=".15" />
        <rect x="65" y="10" width="20" height="20" rx="10" fill="none" stroke="#f5b800" opacity=".2" />
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Organic Rhythm pattern">
      <rect width="100" height="100" fill="#faf8f5" />
      <g fill="#154734">
        <path d="M10 20C10 5 25 5 25 20s-15 15-15 0Z" transform="rotate(-20 17.5 20)" />
        <path d="M35 15Q45 5 55 15 45 25 35 15" fill="#f5b800" />
        <path d="M60 25c0-15 15-15 15 0s-15 15-15 0Z" opacity=".7" transform="rotate(15 67.5 25)" />
        <path d="M15 60q10-10 20 0-10 10-20 0" opacity=".4" />
        <path d="M45 70c0-15 15-15 15 0s-15 15-15 0Z" fill="#f5b800" />
        <circle cx="85" cy="65" r="8" opacity=".2" />
        <rect x="75" y="80" width="15" height="2" rx="1" transform="rotate(45 82.5 81)" />
        <circle cx="50" cy="45" r="3" fill="#f5b800" /><circle cx="10" cy="90" r="4" />
      </g>
    </svg>
  )
}
