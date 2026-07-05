import { ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureIcon } from '@/components/ui/FeatureIcon'
import { RevealItem } from '@/components/ui/RevealItem'
import aboutSrc from '@/assets/images/pic-aboutus.jpg'

export function AboutUs() {
  return (
    <section id="o-nama" className="relative py-section-y-sm md:py-section-y bg-background-secondary">
      <div className="gradient-wash absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-gutter-sm md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

          <RevealItem className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={aboutSrc}
                alt="Vasić Rolet — profesionalna ugradnja i servis roletni"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </RevealItem>

          <div>
            <RevealItem delay={100}>
              <SectionHeading
                eyebrow="O Nama"
                title="UGRADNJA I SERVIS ROLETNI"
                description="Više od decenije, Vasić Rolet gradi reputaciju na preciznosti i beskompromisnom kvalitetu. Naša misija je jasna: pružiti tržištu roletne i komarnike koji su dugoročna investicija u vaš komfor i sigurnost."
                align="left"
              />

              <div className="mt-8 space-y-4">
                <p className="text-body-base text-text-muted leading-relaxed">
                  Kao tim posvećen vrhunskoj izradi, svakom projektu pristupamo sa podjednakom pažnjom, od ugradnje aluminijumskih sistema do zahtevnih servisa. Poverenje klijenata gradimo kroz doslednost, korektne cene i poštovanje rokova, jer znamo da se kvalitetna usluga meri godinama nesmetanog korišćenja.
                </p>
                <p className="text-body-base text-text-muted leading-relaxed">
                  Danas smo partner koji ne pravi kompromise — od stručnog savetovanja do besprekorne montaže. Vaš mir i dugotrajna sigurnost su krajnji cilj svakog našeg rada.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  { icon: 'badge', label: 'Preko 10 godina u poslu' },
                  { icon: 'truck', label: 'Dolazak na adresu u najkraćem roku' },
                  { icon: 'check', label: 'Povoljne cene – bez skrivenih troškova' },
                  { icon: 'award', label: 'Profesionalna usluga i najkvalitetnija oprema' },
                  { icon: 'calendar', label: 'Na raspolaganju 7 dana u nedelji' },
                  { icon: 'clipboard', label: 'Besplatno uzimanje mera i konsultacije' },
                  { icon: 'pin', label: 'Pokrivamo celu teritoriju Beograda' },
                  { icon: 'shield', label: 'Garancija na sve izvedene radove' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3.5 rounded-sm bg-surface/40 border border-surface-border/50 transition-all duration-200 hover:bg-surface/60 hover:border-accent-gold/20"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-accent-gold/10 flex items-center justify-center">
                      {item.icon === 'shield' ? (
                        <ShieldCheck className="w-[18px] h-[18px] text-accent-gold" aria-hidden="true" />
                      ) : (
                        <FeatureIcon name={item.icon} className="w-[18px] h-[18px] text-accent-gold" />
                      )}
                    </div>
                    <span className="text-sm text-text-muted leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </div>

        </div>
      </div>
    </section>
  )
}
