import Footer from '@/components/partials/Footer'
import GetInTouch from '@/components/partials/GetInTouch'
import Navbar from '@/components/partials/Navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <div className="combo-layout">
        <GetInTouch />
        <Footer />
      </div>
    </>
  )
}
