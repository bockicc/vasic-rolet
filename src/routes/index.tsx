import { Hero } from '@/components/sections/Hero'
import { AboutUs } from '@/components/sections/AboutUs'
import { Services } from '@/components/sections/Services'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ServiceArea />
      <Contact />
    </>
  )
}
