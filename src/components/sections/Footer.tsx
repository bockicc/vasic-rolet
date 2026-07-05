import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, NAV_LINKS, SERVICES } from '@/lib/constants'
import logoSrc from '@/assets/images/logoo.png'

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const serviceLinks = SERVICES.map((s) => ({
    label: s.title,
    href: '#usluge',
  }))

  return (
    <footer className="relative bg-background border-t border-slate-800/50 py-16">
      <div className="max-w-content mx-auto px-gutter-sm md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img
              src={logoSrc}
              alt="Vasić Rolet"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-xs">
              Preciznost, kvalitet i pouzdanost — roletne i komarnici po meri vašeg doma.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-5">
              Prečice
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-5">
              Usluge
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((sl) => (
                <li key={sl.label}>
                  <a
                    href={sl.href}
                    onClick={(e) => scrollToSection(e, sl.href)}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {sl.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-5">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_HREF}`}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 flex items-center gap-2.5"
                >
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {PHONE}
                </a>
              </li>
              <li className="text-sm text-text-muted flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                {EMAIL}
              </li>
              <li className="text-sm text-text-muted flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Vasić Rolet. Sva prava zadržana. — Preciznost u svakom detalju.
          </p>
        </div>
      </div>
    </footer>
  )
}
