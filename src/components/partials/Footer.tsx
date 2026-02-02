import Addresses from '@/components/assets/Addresses'
import Copyrights from '@/components/assets/Copyrights'
import Newsletters from '@/components/assets/Newsletters'
import Resources from '@/components/assets/Resources'

export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="container flex flex-col md:flex-row justify-between items-start py-12 md:py-16 lg:py-25 gap-8 md:gap-5">
        <Addresses />
        <Newsletters />
        <Resources />
      </div>
      <hr className="w-full border-border" />
      <Copyrights />
    </footer>
  )
}
