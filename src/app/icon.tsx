import { ImageResponse } from 'next/og'
import { CONFIG } from '@/constants/config'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const imageUrl = `${CONFIG.SITE.URL}/images/mehmed-khan.png`

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #fd9a00 0%, #7ccf00 50%, #00bc7d 100%)',
        borderRadius: '30%',
        overflow: 'hidden',
      }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.2) 0%, transparent 60%)',
          borderRadius: '30%',
        }}
      />
      {/** biome-ignore lint/performance/noImgElement: Can't use next Image here */}
      <img
        src={imageUrl}
        alt="Mehmed Khan"
        style={{ filter: 'contrast(1.1) brightness(1.05)' }}
      />
    </div>,
    { ...size }
  )
}
