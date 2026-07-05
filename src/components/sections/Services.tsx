import { useState, useEffect } from 'react'
import { ShieldCheck, Wrench, Zap, Wind, RefreshCw, Blinds, X } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import type { ServiceItem } from '@/types'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { RevealItem } from '@/components/ui/RevealItem'

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-500" strokeWidth={1.5} />,
  Wrench: <Wrench className="w-6 h-6 text-amber-500" strokeWidth={1.5} />,
  Zap: <Zap className="w-6 h-6 text-amber-500" strokeWidth={1.5} />,
  Wind: <Wind className="w-6 h-6 text-amber-500" strokeWidth={1.5} />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-amber-500" strokeWidth={1.5} />,
  Blinds: <Blinds className="w-6 h-6 text-amber-500" strokeWidth={1.5} />,
}

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedService])

  const openModal = (service: ServiceItem) => setSelectedService(service)
  const closeModal = () => setSelectedService(null)

  return (
    <>
      <section id="usluge" className="relative py-section-y-sm md:py-section-y">
        <div className="gradient-wash absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-content mx-auto px-gutter-sm md:px-gutter">
          <SectionHeading
            title="Naše Usluge"
            description="Garancija na sve usluge"
            className="mb-16 md:mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <RevealItem
                key={service.id}
                delay={index * 100}
                className="group relative rounded-2xl border border-slate-800 overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 gradient-overlay" />
                </div>

                <div className="p-6 md:p-8 flex-1 bg-[#131517]">
                  <span className="block mb-4" aria-hidden="true">
                    {iconMap[service.icon]}
                  </span>
                  <h3 className="font-body font-semibold text-heading-3-sm md:text-heading-3 text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-body-base text-text-muted line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => openModal(service)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-gold transition-all duration-200 hover:gap-2.5 cursor-pointer"
                  >
                    Saznajte Više
                    <FeatureIcon name="arrowRight" className="w-4 h-4" />
                  </button>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-[#0c0d0e]/80 backdrop-blur-md" />

          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-[#131517] shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0c0d0e]/60 border border-slate-700 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-slate-500 transition-all duration-200 md:right-4"
              aria-label="Zatvori"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="relative h-full min-h-[240px] md:min-h-[400px] overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131517] via-transparent to-transparent md:bg-gradient-to-r md:from-[#131517] md:via-transparent md:to-transparent" />
            </div>

            <div className="p-8 flex flex-col justify-center">
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                {iconMap[selectedService.icon]}
              </span>
              <h2 className="font-display text-heading-3 md:text-heading-2 text-text-primary font-medium leading-tight">
                {selectedService.title}
              </h2>
              <p className="mt-6 text-body-base text-slate-300 leading-relaxed">
                {selectedService.detail}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
