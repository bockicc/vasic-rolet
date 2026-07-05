import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { useReveal } from '@/hooks/useReveal'
import heroSrc from '@/assets/images/hero.jpg'

export function Hero() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 })

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#usluge')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0B0D]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/20 to-transparent z-10" />
        <img
          src={heroSrc}
          alt=""
          className="w-full h-full object-cover object-center hero-bg-image"
          loading="eager"
        />
      </div>

      <div className="relative z-20 w-full max-w-content mx-auto px-gutter-sm md:px-gutter py-20 md:py-32">
        <div ref={ref} className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="accent-bar hidden sm:block bg-blue-900" />
            <span className="text-label-sm font-medium text-blue-900 tracking-[0.15em] uppercase">
              PROIZVODNJA &bull; UGRADNJA &bull; SERVIS
            </span>
          </div>

          <h1 className="font-display text-display-sm md:text-display text-text-primary font-medium -tracking-[0.02em] leading-tight">
            Roletne i Komarnici Rađeni{' '}
            <span className="italic text-blue-900 font-normal">po Meri</span>{' '}
            Vašeg Doma
          </h1>

          <p className="mt-8 text-body-lg text-text-muted max-w-xl leading-relaxed">
            Profesionalna izrada, ugradnja i servis roletni i komarnika — dostupni 7 dana u nedelji, širom Beograda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-sm text-btn-base font-semibold hover:bg-blue-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-premium-hover"
            >
              Zakažite Besplatnu Procenu
            </button>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-text-primary px-8 py-4 rounded-sm text-btn-base font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Pogledajte Usluge
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
