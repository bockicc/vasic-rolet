import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-4 mb-6', align === 'center' && 'justify-center')}>
          <span className="accent-bar" />
          <span className="text-label-sm font-medium text-accent-gold tracking-[0.15em] uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-heading-2-sm md:text-heading-2 text-text-primary font-medium tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-body-lg text-text-muted max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
