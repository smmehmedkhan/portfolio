import HeroImage from '@/components/assets/hero/HeroImage'
import HeroIntro from '@/components/assets/hero/HeroIntro'

export default function Hero() {
  return (
    <header className="hero flex-box">
      <div className="container flex-center alter">
        <HeroIntro />
        <HeroImage />
      </div>
    </header>
  )
}
