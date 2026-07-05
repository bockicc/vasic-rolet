import { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import logoSrc from '@/assets/images/logoo.png'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out bg-black/10 backdrop-blur-md border-b border-white/10',
          scrolled
            ? 'py-2'
            : 'py-2.5'
        )}
      >
        <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center flex-shrink-0">
            <img
              src={logoSrc}
              alt="Vasić Rolet"
              className="max-w-[200px] max-h-[50px] w-auto h-auto object-contain block rounded-sm"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm font-normal uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-white/60 after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-amber-500 hover:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={mobileOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {mobileOpen ? (
              <FeatureIcon name="x" className="w-6 h-6" />
            ) : (
              <FeatureIcon name="menu" className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl animate-fade-in lg:hidden">
          <nav className="flex flex-col items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-4xl md:text-5xl font-light text-white/80 hover:text-white transition-colors duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
