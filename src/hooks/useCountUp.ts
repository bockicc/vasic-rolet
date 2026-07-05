import { useEffect, useState, useRef } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  suffix?: string
  enabled?: boolean
}

export function useCountUp({ end, duration = 1.5, suffix = '', enabled = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState('0')
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (!enabled) {
      setCount(0)
      setDisplay('0')
      return
    }

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = (timestamp - startTimeRef.current) / 1000
      const progress = Math.min(elapsed / duration, 1)

      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * end)
      setCount(current)

      if (end >= 100) {
        const formatted = current.toLocaleString('sr-RS')
        setDisplay(`${formatted}${suffix}`)
      } else {
        setDisplay(`${current}${suffix}`)
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      startTimeRef.current = 0
    }
  }, [end, duration, suffix, enabled])

  return { count, display }
}
