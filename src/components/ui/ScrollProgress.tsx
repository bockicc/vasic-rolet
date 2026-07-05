import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const { progress } = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent-gold to-accent-bronze transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
