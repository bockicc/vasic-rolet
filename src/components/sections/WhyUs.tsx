import { FEATURES } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { RevealItem } from '@/components/ui/RevealItem'

export function WhyUs() {
  return (
    <section id="zasto-mi" className="relative py-section-y-sm md:py-section-y bg-background-secondary">
      <div className="max-w-content mx-auto px-gutter-sm md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="ZAŠTO MI"
              title="Zašto Vasić Rolet?"
              description="Više od decenije posvećeni smo kvalitetu, preciznosti i zadovoljstvu naših klijenata. Ne gradimo samo roletne — gradimo poverenje."
              align="left"
            />

            <div className="mt-10 p-8 rounded-md bg-surface/50 border border-surface-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] bg-gradient-to-br from-accent-gold to-accent-bronze rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <span className="font-display text-5xl md:text-6xl text-accent-gold font-medium leading-none">
                  500+
                </span>
                <p className="mt-3 text-body-base text-text-muted font-medium uppercase tracking-widest text-label-sm">
                  Uspešnih intervencija
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-0">
            {FEATURES.map((feature, index) => (
              <RevealItem
                key={feature.title}
                delay={index * 80}
                className="flex gap-5 py-6 md:py-7 border-b border-divider last:border-b-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center">
                  <FeatureIcon name={feature.icon} className="w-5 h-5 text-accent-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body font-semibold text-body-base text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
