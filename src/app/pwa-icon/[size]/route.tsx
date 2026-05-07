import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { getLocalImageAsDataUrl } from '@/lib/og-image'

export const runtime = 'nodejs'

const VALID_SIZES = [192, 512] as const
type ValidSize = (typeof VALID_SIZES)[number]

function isValidSize(size: number): size is ValidSize {
  return VALID_SIZES.includes(size as ValidSize)
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size: sizeParam } = await params
  const size = Number.parseInt(sizeParam, 10)

  if (!isValidSize(size)) {
    return new Response('Invalid size. Use 192 or 512.', { status: 400 })
  }

  const imageUrl = getLocalImageAsDataUrl('public/images/mehmed-khan-small.png')

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
        }}
      />
      {/** biome-ignore lint/performance/noImgElement: Can't use next Image here */}
      <img
        src={imageUrl}
        alt="Mehmed Khan"
        width={size}
        height={size}
        style={{ filter: 'contrast(1.1) brightness(1.05)' }}
      />
    </div>,
    { width: size, height: size }
  )
}
