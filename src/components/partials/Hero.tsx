import HeroImage from '@/components/assets/hero/HeroImage'
import HeroIntro from '@/components/assets/hero/HeroIntro'

export default function Hero() {
  return (
    <header className="container hero flex-center alter">
      <HeroIntro />
      <HeroImage />
    </header>
  )
}
