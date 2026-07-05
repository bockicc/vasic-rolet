import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const totalScroll = docHeight - winHeight

      if (totalScroll > 0) {
        setProgress(Math.min(scrollTop / totalScroll, 1))
      }

      setScrolled(scrollTop > 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, scrolled }
}
