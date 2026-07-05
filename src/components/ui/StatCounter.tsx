import { useCountUp } from '@/hooks/useCountUp'
import { useReveal } from '@/hooks/useReveal'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.5 })
  const { display } = useCountUp({ end: value, suffix, enabled: isVisible })

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-display text-[32px] md:text-[40px] text-accent-gold font-medium leading-none tabular-nums">
        {display}
      </span>
      <span className="mt-2 text-label-sm text-text-muted uppercase tracking-[0.12em] text-center leading-tight">
        {label}
      </span>
    </div>
  )
}
