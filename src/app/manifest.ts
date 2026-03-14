import type { MetadataRoute } from 'next'
import { CONFIG } from '@/constants/config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: CONFIG.SITE.NAME,
    short_name: CONFIG.PERSONAL.NAME,
    description: CONFIG.SITE.DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#00bc7d',
    theme_color: '#020618',
    icons: [
      {
        src: '/pwa-icon/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-icon/512',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/pwa-icon/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
