import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30%',
        backgroundColor: '#00bc7d',
        background:
          'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25) 0%, transparent 65%)',
      }}>
      <span
        style={{
          color: '#020618',
          fontSize: 16,
          fontWeight: 900,
          letterSpacing: '1px',
        }}>
        MK
      </span>
    </div>,
    { ...size }
  )
}
