import fs from 'node:fs'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { CONFIG } from '@/constants/config'

export const runtime = 'nodejs'
export const alt = CONFIG.SITE.TITLE
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function readFile(relativePath: string): Buffer {
  const safePath = path.join(process.cwd(), path.normalize(relativePath))
  if (!safePath.startsWith(process.cwd())) {
    throw new Error(`Invalid path: ${relativePath}`)
  }

  return fs.readFileSync(safePath)
}

export default function OpenGraphImage(): ImageResponse {
  const fontData = readFile('public/fonts/PublicSans-Bold.ttf')
  const avatarData = readFile('public/images/mehmed-khan-portrait.png')

  const fontArrayBuffer = new ArrayBuffer(fontData.length)
  new Uint8Array(fontArrayBuffer).set(fontData)

  const avatarSrc = `data:image/png;base64,${avatarData.toString('base64')}`

  const name = CONFIG.PERSONAL.NAME
  const role = CONFIG.PERSONAL.ROLE
  const description = CONFIG.SITE.DESCRIPTION
  const siteUrl = new URL(CONFIG.SITE.URL).hostname

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        backgroundColor: '#0c0a09',
      }}>
      {/* Left — text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '72px',
          paddingRight: '48px',
          paddingTop: '64px',
          paddingBottom: '64px',
          flex: 1,
        }}>
        <div
          style={{
            display: 'flex',
            fontSize: '16px',
            color: '#00bc7d',
            marginBottom: '20px',
          }}>
          {siteUrl}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '64px',
            fontWeight: 700,
            color: '#f5f5f0',
            marginBottom: '20px',
          }}>
          {name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            fontWeight: 700,
            color: '#fd9a00',
            marginBottom: '20px',
          }}>
          {role}
        </div>
        <div style={{ display: 'flex', fontSize: '18px', color: '#d1d5dc' }}>
          {description}
        </div>
      </div>

      {/* Right — avatar */}
      <div
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        {/* biome-ignore lint/performance/noImgElement: ImageResponse requires <img> */}
        <img
          src={avatarSrc}
          alt={name}
          width={400}
          height={512}
          style={{ objectFit: 'contain', objectPosition: 'top center' }}
        />
      </div>
    </div>,

    {
      ...size,
      fonts: [
        {
          name: 'Public Sans',
          data: fontArrayBuffer,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
