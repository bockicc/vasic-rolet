import type { ServiceItem, StatItem, FeatureItem, GalleryItem, NavLink, ServiceArea } from '@/types'

export const PHONE = '+381 69 1303 995'
export const PHONE_HREF = '+381691303995'
export const EMAIL = 'info@vasicrolet.rs'
export const ADDRESS = 'Beograd, Srbija'
export const HOURS = 'Dostupni 24/7'

export const NAV_LINKS: NavLink[] = [
  { label: 'Početna', href: '#hero' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const HERO_STATS: StatItem[] = [
  { value: 10, suffix: '+', label: 'Godina Iskustva' },
  { value: 22, suffix: '', label: 'Opštine Beograda' },
  { value: 500, suffix: '+', label: 'Uspešnih Intervencija' },
  { value: 7, suffix: '', label: 'Dana u Nedelji' },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'aluminium-shutters',
    title: 'Ugradnja Aluminijumskih Roletni',
    description:
      'Ugrađujemo aluminijumske roletne vrhunske sigurnosti, trajnosti i dizajna. Naš stručni tim će Vam pomoći pri odabiru idealnog rešenja za Vaš prostor.',
    detail:
      'Ugrađujemo aluminijumske roletne vrhunske sigurnosti, trajnosti i dizajna. Naš tim Vam pomaže pri odabiru idealnog rešenja za Vaš prostor. Širok izbor modela — od standardnih do automatizovanih sistema. Svaka roletna se izrađuje po tačnim merama, osiguravajući savršeno prijanjanje bez procepa. Koristimo višeslojno zaštićen aluminijum, otporan na koroziju i sve vremenske uslove, čime garantujemo dugovečnost i bezbednost.',
    image: 'src/assets/images/usluge/slika1.jpg',
    icon: 'ShieldCheck',
    featured: true,
  },
  {
    id: 'motorization',
    title: 'Popravka Aluminijumskih i Drvenih Roletni',
    description:
      'Nudimo brzu i efikasnu popravku svih vrsta roletni. Naš tim rešava svaki problem i vraća Vašim roletnama punu funkcionalnost.',
    detail:
      'Nudimo brzu i efikasnu popravku svih vrsta roletni. Naš tim rešava svaki problem i vraća Vašim roletnama punu funkcionalnost. Specijalizovani smo za dijagnostiku i sanaciju svih kvarova — od deformisanih lamela i istrošenih gurtni do problema sa mehanizmom. Popravke obavljamo na licu mesta, uz minimalan zastoj. Koristimo vrhunske materijale za obnovu drvenih roletni i vraćamo aluminijumske sisteme u fabričko stanje.',
    image: 'src/assets/images/usluge/slika2.jpg',
    icon: 'Wrench',
    featured: true,
  },
  {
    id: 'repair',
    title: 'Elektromotori za Automatizaciju',
    description:
      'Ugradnja elektromotora za automatsko upravljanje roletnama. Jednostavnije, praktičnije i sigurnije rešenje za Vaš dom.',
    detail:
      'Ugradnja elektromotora za automatsko upravljanje roletnama. Jednostavnije, praktičnije i sigurnije rešenje za Vaš dom.Pretvorite roletne u deo pametnog sistema. Birajte između žičanih i bežičnih rešenja uz mogućnost programiranja tajmera. Integracijom senzora za sunce, temperaturu i vetar postižete potpunu automatizaciju bez Vašeg angažovanja. Naši motori su tihi, pouzdani i dolaze sa dugogodišnjom garancijom. Montaža je brza i ne zahteva dodatne građevinske radove, čineći Vaš prostor modernijim i funkcionalnijim.',
    image: 'src/assets/images/usluge/slika3.jpg',
    icon: 'Zap',
    featured: false,
  },
  {
    id: 'mosquito-nets',
    title: 'Ugradnja Komarnika',
    description:
      'Kvalitetni komarnici za optimalnu zaštitu od insekata. Brza i precizna ugradnja za svež vazduh u Vašem domu.',
    detail:
      'Kvalitetni komarnici za optimalnu zaštitu od insekata. Brza i precizna ugradnja za svež vazduh u Vašem domu. Nudimo plisirane i ramovske sisteme, prilagođene svim dimenzijama otvora. Mreže su izrađene od stakloplastike presvučene PVC-om, što ih čini izuzetno otpornim na kidanje, deformacije i sve vremenske uslove. Ramovi od visokokvalitetnog aluminijuma dostupni su u više boja, omogućavajući diskretno uklapanje u svaki prozor. Ugradnja je brza, čista i bez oštećenja fasade ili stolarije.',
    image: 'src/assets/images/usluge/slika4.jpg',
    icon: 'Wind',
    featured: false,
  },
  {
    id: 'straps',
    title: 'Zamena Gurtni na Roletnama',
    description:
      'Zamena oštećenih gurtni za nesmetan rad Vaših roletni. Brza usluga i kvalitetni materijali za dugotrajno i sigurno korišćenje.',
    detail:
      'Zamena oštećenih gurtni za nesmetan rad Vaših roletni. Brza usluga i kvalitetni materijali za dugotrajno i sigurno korišćenje. Gurtne su ključan element mehanizma koji se vremenom haba. Naš set za zamenu uključuje gurtne od ojačang poliestera sa dodatnim šavovima koji sprečavaju pucanje. Ovom uslugom eliminišemo zaglavljivanje i vraćamo roletnama lakoću pokretanja. Radimo sa svim tipovima gurtni / pljosnatim i okruglim / uz brzu i čistu montažu.',
    image: 'src/assets/images/usluge/slika5.jpg',
    icon: 'RefreshCw',
    featured: false,
  },
  {
    id: 'zebra-blinds',
    title: 'Ugradnja Rolo i Zebra Zavesa',
    description:
      'Transformišite prostor uz naše rolo i zebra zavese. Moderan dizajn, vrhunska funkcionalnost i brza ugradnja prilagođena Vašim potrebama.',
    detail:
      'Transformišite prostor uz naše rolo i zebra zavese. Moderan dizajn, vrhunska funkcionalnost i brza ugradnja prilagođena Vašim potrebama. Rolo i zebra zavese su moderan i funkcionalan dodatak svakom prostoru. Zebra sistem "dan-noć" omogućava fino podešavanje svetlosti, dok rolo zavese pružaju potpuno zamračenje kada je to potrebno. Koristimo visokokvalitetne tkanine sa termo-reflektujućim slojem. Uz brojne boje i dezene, ugradnju vršimo na prozorske okvire, zid ili plafon, zavisno od Vaših želja.',
    image: 'src/assets/images/usluge/slika6.jpg',
    icon: 'Blinds',
    featured: false,
  },
]

export const FEATURES: FeatureItem[] = [
  {
    icon: 'clock',
    title: 'Preko 10 Godina Iskustva',
    description: 'Dugogodišnje iskustvo u proizvodnji i ugradnji roletni i komarnika širom Beograda.',
  },
  {
    icon: 'truck',
    title: 'Dolazak Na Adresu U Najkraćem Roku',
    description: 'Izlazimo na teren brzo i efikasno — često već istog dana po pozivu.',
  },
  {
    icon: 'badge',
    title: 'Transparentne Cene Bez Skrivenih Troškova',
    description: 'Dogovorimo cenu pre početka rada — bez naknadnih uvećanja i neprijatnih iznenađenja.',
  },
  {
    icon: 'award',
    title: 'Vrhunska Oprema i Materijali',
    description: 'Koristimo samo proverene materijale i brendove za dugotrajnost i pouzdanost.',
  },
  {
    icon: 'calendar',
    title: 'Dostupnost 7 Dana Nedeljno',
    description: 'Radimo subotom i nedeljom — prilagođavamo se vašem rasporedu.',
  },
  {
    icon: 'clipboard',
    title: 'Besplatna Procena i Konsultacije',
    description: 'Dolazimo besplatno da izvršimo tačnu procenu i damo najbolju ponudu.',
  },
]

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    alt: 'Aluminijumske roletne',
    category: 'roletne',
    caption: 'Aluminijumske Roletne — Vračar',
    width: 3,
    height: 4,
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
    alt: 'Komarnici na prozorima',
    category: 'komarnici',
    caption: 'Komarnici — Novi Beograd',
    width: 4,
    height: 3,
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    alt: 'Zebra zavese',
    category: 'zavese',
    caption: 'Zebra Zavese — Dorćol',
    width: 3,
    height: 4,
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    alt: 'Motorizacija',
    category: 'motorizacija',
    caption: 'Sistem Motorizacije — Dedinje',
    width: 4,
    height: 3,
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80',
    alt: 'Servis roletni',
    category: 'roletne',
    caption: 'Servis Roletni — Stari Grad',
    width: 3,
    height: 3,
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    alt: 'Moderna kuća sa roletnama',
    category: 'roletne',
    caption: 'Kompletna Ugradnja — Zemun',
    width: 4,
    height: 3,
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
    alt: 'Fasada sa roletnama',
    category: 'roletne',
    caption: 'Poslovni Objekat — Novi Beograd',
    width: 3,
    height: 4,
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1621259182978-fbf931d6c5cf?w=600&q=80',
    alt: 'Detalj gurtne',
    category: 'roletne',
    caption: 'Gurtne i Pribor — Detalj',
    width: 4,
    height: 3,
  },
]

export const MUNICIPALITIES: ServiceArea[] = [
  { name: 'Banovo Brdo', active: true },
  { name: 'Novi Beograd', active: true },
  { name: 'Palilula', active: true },
  { name: 'Vračar', active: true },
  { name: 'Zvezdara', active: true },
  { name: 'Stari Grad', active: true },
  { name: 'Čukarica', active: true },
  { name: 'Voždovac', active: true },
  { name: 'Rakovica', active: true },
  { name: 'Zemun', active: true },
  { name: 'Dedinje', active: true },
  { name: 'Dorćol', active: true },
  { name: 'Savski Venac', active: true },
  { name: 'Medaković', active: true },
  { name: 'Karaburma', active: true },
  { name: 'Batajnica', active: true },
  { name: 'Surčin', active: true },
  { name: 'Lazarevac', active: true },
  { name: 'Mladenovac', active: true },
  { name: 'Obrenovac', active: true },
]
