import React from 'react'

interface ServiceIconProps {
  name: string
  className?: string
}

export function ServiceIcon({ name, className = 'w-7 h-7' }: ServiceIconProps) {
  const strokeWidth = 1.5

  const icons: Record<string, React.ReactNode> = {
    shutter: (
      <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="22" height="20" rx="1" />
        <line x1="3" y1="10" x2="25" y2="10" />
        <line x1="3" y1="16" x2="25" y2="16" />
        <line x1="3" y1="22" x2="25" y2="22" />
        <line x1="14" y1="4" x2="14" y2="24" />
        <circle cx="14" cy="13" r="1.5" />
      </svg>
    ),
    motor: (
      <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2" />
        <path d="M8 4l-4 2" />
        <path d="M24 6l-4 2" />
        <path d="M4 14H2" />
        <path d="M26 14h-2" />
      </svg>
    ),
    repair: (
      <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4a10 10 0 109.95 8.5" />
        <path d="M14 14l4-4-4-4" />
        <path d="M18 10h6V4" />
        <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    net: (
      <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <line x1="3" y1="9" x2="25" y2="9" />
        <line x1="3" y1="15" x2="25" y2="15" />
        <line x1="3" y1="21" x2="25" y2="21" />
        <line x1="9" y1="3" x2="9" y2="25" />
        <line x1="15" y1="3" x2="15" y2="25" />
        <line x1="21" y1="3" x2="21" y2="25" />
      </svg>
    ),
    gear: (
      <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="3" />
        <path d="M14 5v2" />
        <path d="M14 21v2" />
        <path d="M5 14h2" />
        <path d="M21 14h2" />
        <path d="M8.76 8.76l1.42 1.42" />
        <path d="M17.82 17.82l1.42 1.42" />
        <path d="M8.76 19.24l1.42-1.42" />
        <path d="M17.82 10.18l1.42-1.42" />
      </svg>
    ),
    curtain: (
      <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="3" x2="4" y2="25" />
        <line x1="24" y1="3" x2="24" y2="25" />
        <line x1="4" y1="3" x2="24" y2="3" />
        <path d="M4 7c3 4 6-2 10 2s7-2 10 2" />
        <path d="M4 13c3 4 6-2 10 2s7-2 10 2" />
        <path d="M4 19c3 4 6-2 10 2s7-2 10 2" />
      </svg>
    ),
  }

  return (
    <span className="text-accent-gold" aria-hidden="true">
      {icons[name] || icons.shutter}
    </span>
  )
}
