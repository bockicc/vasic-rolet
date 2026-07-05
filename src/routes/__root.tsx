import { Outlet } from 'react-router-dom'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="noise-overlay" aria-hidden="true" />
    </>
  )
}
