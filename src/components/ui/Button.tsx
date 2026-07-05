import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-body font-semibold',
          'rounded-sm transition-all duration-200 ease-out',
          'hover:-translate-y-0.5 active:translate-y-0',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
          size === 'lg' && 'px-8 py-4 text-btn-base',
          size === 'md' && 'px-6 py-3 text-btn-base',
          size === 'sm' && 'px-4 py-2 text-sm',
          variant === 'primary' &&
            'bg-accent-gold text-white hover:bg-accent-bronze hover:shadow-premium-hover',
          variant === 'secondary' &&
            'border border-white/20 text-text-primary hover:border-white/50 hover:bg-white/5',
          variant === 'ghost' &&
            'bg-transparent text-text-muted hover:text-text-primary',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
