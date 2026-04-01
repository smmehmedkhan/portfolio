import Footer from '@/components/partials/Footer'
import GetInTouch from '@/components/partials/GetInTouch'
import Navbar from '@/components/partials/Navbar'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
      <div className="combo-layout">
        <GetInTouch />
        <Footer />
      </div>
    </>
  )
}
