import HeroImage from '@/components/assets/HeroImage'
import HeroIntro from '@/components/assets/HeroIntro'

export default function Hero() {
  return (
    <header className="container hero flex-center hero-flip">
      <HeroIntro />
      <HeroImage />
    </header>
  )
}
