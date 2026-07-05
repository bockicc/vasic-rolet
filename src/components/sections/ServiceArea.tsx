import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealItem } from '@/components/ui/RevealItem'

const ZONES = [
  {
    name: 'Centralni Beograd',
    areas: ['Vračar', 'Stari Grad', 'Savski Venac', 'Dorćol', 'Palilula', 'Zvezdara', 'Dedinje', 'Medaković', 'Karaburma'],
  },
  {
    name: 'Novi Beograd i Zemun',
    areas: ['Novi Beograd', 'Zemun', 'Banovo Brdo', 'Čukarica', 'Voždovac', 'Rakovica', 'Batajnica', 'Surčin'],
  },
  {
    name: 'Prigradske Opštine',
    areas: ['Lazarevac', 'Mladenovac', 'Obrenovac'],
  },
]

export function ServiceArea() {
  return (
    <section className="relative py-16 md:py-20 bg-background-secondary">
      <div className="max-w-content mx-auto px-gutter-sm md:px-gutter">
        <SectionHeading
          eyebrow="POKRIVAMO CELU TERITORIJU BEOGRADA"
          title="Opštine koje opslužujemo"
          description="Bez obzira na to u kom se delu Beograda nalazite, mi smo uvek tu za Vas. Naša usluga pokriva sve opštine i prigradska naselja, pružajući Vam brzu i pouzdanu podršku."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ZONES.map((zone, index) => (
            <RevealItem
              key={zone.name}
              delay={index * 100}
              className="rounded-xl bg-[#131517] border border-slate-800 p-6 md:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-slate-100 mb-4">
                {zone.name}
              </h3>
              <ul className="space-y-2">
                {zone.areas.map((area) => (
                  <li key={area} className="text-sm text-slate-400">
                    {area}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  )
}
