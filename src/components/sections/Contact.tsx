import { useState, type FormEvent } from 'react'
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, HOURS } from '@/lib/constants'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'loading' | 'success'

export function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1 })
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setTimeout(() => {
      setFormState('success')
      setFormData({ name: '', phone: '', service: '', message: '' })
      setTimeout(() => setFormState('idle'), 4000)
    }, 1500)
  }

  return (
    <section id="kontakt" className="relative py-section-y-sm md:py-section-y">
      <div className="gradient-wash absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-gutter-sm md:px-gutter">
        <div
          ref={ref}
          className={cn(
            'glass-panel rounded-lg p-8 md:p-16 shadow-glass',
            isVisible && 'animate-fade-in-up'
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-heading-2-sm md:text-heading-2 text-text-primary font-medium leading-tight">
                Zakažite Besplatnu Procenu
              </h2>
              <p className="mt-4 text-body-base text-text-muted leading-relaxed">
                Pošaljite nam poruku i odgovorićemo Vam u najkraćem mogućem roku.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href={`tel:${PHONE_HREF}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center text-accent-gold group-hover:border-accent-gold/60 transition-colors">
                    <FeatureIcon name="phone" className="w-5 h-5" />
                  </span>
                  <span className="font-display text-2xl md:text-3xl text-accent-gold font-medium group-hover:text-accent-bronze transition-colors">
                    {PHONE}
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border border-surface-border/50 flex items-center justify-center text-text-muted">
                    <FeatureIcon name="mail" className="w-5 h-5" />
                  </span>
                  <span className="text-body-base text-text-muted">{EMAIL}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border border-surface-border/50 flex items-center justify-center text-text-muted">
                    <FeatureIcon name="pin" className="w-5 h-5" />
                  </span>
                  <span className="text-body-base text-text-muted">{ADDRESS}</span>
                </div>

                <div className="pt-4 border-t border-divider">
                  <span className="text-label-sm text-text-muted uppercase tracking-widest">
                    {HOURS}
                  </span>
                </div>
              </div>
            </div>

            <div>
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-accent-success/10 border border-accent-success/30 flex items-center justify-center mb-6">
                    <FeatureIcon name="check" className="w-8 h-8 text-accent-success" />
                  </div>
                  <h3 className="font-body font-semibold text-heading-3 text-text-primary">
                    Poruka Poslata!
                  </h3>
                  <p className="mt-3 text-text-muted text-body-base">
                    Hvala vam. Odgovorićemo u najkraćem mogućem roku.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ime i Prezime"
                      className="w-full bg-transparent border border-surface-border rounded-sm px-4 py-4 text-body-base text-text-primary placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent-gold focus:shadow-accent-glow"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Telefon"
                      className="w-full bg-transparent border border-surface-border rounded-sm px-4 py-4 text-body-base text-text-primary placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent-gold focus:shadow-accent-glow"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-surface-border rounded-sm px-4 py-4 text-body-base text-text-primary outline-none transition-all duration-200 focus:border-accent-gold focus:shadow-accent-glow appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239A9CA3' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                      }}
                    >
                      <option value="" disabled className="bg-surface">Tip Usluge</option>
                      <option value="roletne" className="bg-surface">Roletne</option>
                      <option value="komarnici" className="bg-surface">Komarnici</option>
                      <option value="zavese" className="bg-surface">Zavese</option>
                      <option value="servis" className="bg-surface">Servis</option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Poruka"
                      className="w-full bg-transparent border border-surface-border rounded-sm px-4 py-4 text-body-base text-text-primary placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent-gold focus:shadow-accent-glow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full bg-accent-gold text-background font-semibold text-btn-base py-4 px-6 rounded-sm hover:bg-accent-bronze transition-all duration-200 hover:-translate-y-0.5 hover:shadow-premium-hover disabled:opacity-70 disabled:hover:translate-y-0 inline-flex items-center justify-center gap-2"
                  >
                    {formState === 'loading' && (
                      <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {formState === 'loading' ? 'Slanje...' : 'Pošaljite Zahtev'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
