import AboutContributions from '@/components/assets/contribution/GithubContribution'
import { CONFIG } from '@/constants/config'
import ContributionHeader from '../assets/contribution/ContributionHeader'

export default function Contributions() {
  return (
    <section className="contributions flex-box">
      <ContributionHeader />
      <AboutContributions username={CONFIG.SOCIAL.GITHUB_USERNAME} />
    </section>
  )
}
