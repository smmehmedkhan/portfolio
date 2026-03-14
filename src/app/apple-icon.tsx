import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '22%',
        backgroundColor: '#00bc7d',
      }}>
      {/* Subtle inner glow layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '22%',
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.25) 0%, transparent 65%)',
        }}
      />
      <span
        style={{
          color: '#020618',
          fontSize: 96,
          fontWeight: 900,
          letterSpacing: '4px',
        }}>
        MK
      </span>
    </div>,
    { ...size }
  )
}
