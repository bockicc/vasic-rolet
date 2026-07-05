import React from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

interface RevealItemProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  as?: 'div' | 'span'
}

export function RevealItem({ children, className, delay = 0, threshold = 0.1, as = 'div' }: RevealItemProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold })

  const Tag = as

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-600',
        isVisible ? 'animate-fade-in-up' : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {children}
    </Tag>
  )
}
