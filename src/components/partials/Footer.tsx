import Addresses from '@/components/assets/Addresses'
import Copyrights from '@/components/assets/Copyrights'
import Newsletters from '@/components/assets/Newsletters'
import Resources from '@/components/assets/Resources'

export default function Footer() {
  return (
    <footer className="wrapper basis-1/2">
      <div className="container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-start py-12 md:py-16 lg:py-25 gap-8 md:gap-5">
        <Newsletters />
        <Addresses />
        <Resources />
      </div>
      <hr className="w-full border-border" />
      <Copyrights />
    </footer>
  )
}
