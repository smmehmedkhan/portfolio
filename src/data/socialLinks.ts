import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { env } from '@/lib/env'
import type { SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    href: env.NEXT_PUBLIC_GITHUB_URL || '#',
    icon: FaGithub,
  },
  {
    id: 'discord',
    name: 'Discord',
    href: env.NEXT_PUBLIC_DISCORD_URL || '#',
    icon: FaDiscord,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: env.NEXT_PUBLIC_LINKEDIN_URL || '#',
    icon: FaLinkedin,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: env.NEXT_PUBLIC_FACEBOOK_URL || '#',
    icon: FaFacebook,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    icon: FaInstagram,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    href: env.NEXT_PUBLIC_TWITTER_URL || '#',
    icon: FaSquareXTwitter,
  },
]
