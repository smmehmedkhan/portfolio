import { Suspense } from 'react'
import Addresses from '@/components/assets/footer/Addresses'
import Copyrights from '@/components/assets/footer/Copyrights'
import Newsletters from '@/components/assets/footer/Newsletters'
import Resources from '@/components/assets/footer/Resources'

export default function Footer() {
  return (
    <footer>
      <div className="container flex-1 flex items-center justify-center">
        <div className="footer-grid">
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
            <Suspense>
              <Resources />
            </Suspense>
          </div>
        </div>
      </div>
      <Copyrights />
    </footer>
  )
}
