import fs from 'node:fs'
import path from 'node:path'

type ImageMimeType = 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif'

const MIME_MAP: Record<string, ImageMimeType> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
}

export function readFile(relativePath: string): Buffer {
  const safePath = path.join(process.cwd(), path.normalize(relativePath))
  if (!safePath.startsWith(process.cwd())) {
    throw new Error(`Invalid path: ${relativePath}`)
  }

  return fs.readFileSync(safePath)
}

export function getLocalImageAsDataUrl(relativePath: string): string {
  const ext = path.extname(relativePath).toLowerCase()
  const mime: ImageMimeType = MIME_MAP[ext] ?? 'image/png'
  const buffer = fs.readFileSync(path.join(process.cwd(), relativePath))
  return `data:${mime};base64,${buffer.toString('base64')}`
}
