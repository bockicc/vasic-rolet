export interface ServiceItem {
  id: string
  title: string
  description: string
  detail: string
  image: string
  icon: string
  featured: boolean
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: 'roletne' | 'komarnici' | 'zavese' | 'motorizacija'
  caption: string
  width: number
  height: number
}

export interface NavLink {
  label: string
  href: string
}

export interface ServiceArea {
  name: string
  active: boolean
}
