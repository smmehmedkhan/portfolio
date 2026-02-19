import Addresses from '@/components/assets/footer/Addresses'
import Copyrights from '@/components/assets/footer/Copyrights'
import Newsletters from '@/components/assets/footer/Newsletters'
import Resources from '@/components/assets/footer/Resources'

export default function Footer() {
  return (
    <footer className="wrapper footer">
      <div className="container footer-grid">
        {/* addresses: left on lg */}
        <div className="2xl:order-1">
          <Addresses />
        </div>

        {/* newsletter: top on md, centered on sm/lg */}
        <div className="mx-auto md:col-span-2 md:order-first 2xl:order-2 2xl:col-span-1">
          <Newsletters />
        </div>

        {/* resources: right on lg */}
        <div className="2xl:order-3">
          <Resources />
        </div>
      </div>
      <hr className="w-full border-border" />
      <Copyrights />
    </footer>
  )
}
