'use client'

import { Download } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const RESUME_PATH = '/docs/resume.pdf'
const RESUME_EMBED_SRC = `${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`

export default function ResumeViewer() {
  const [tapped, setTapped] = useState(false)

  return (
    // biome-ignore lint/a11y/useSemanticElements: embed didn't work inside a button
    <div
      role="button"
      tabIndex={0}
      className="resume-viewer group"
      onClick={() => setTapped(prev => !prev)}
      onKeyDown={e => e.key === 'Enter' && setTapped(prev => !prev)}
      aria-label="Toggle resume preview">
      <embed
        src={RESUME_EMBED_SRC}
        type="application/pdf"
        className={`resume-doc transition-[filter] duration-300 group-hover:blur-sm ${
          tapped ? 'blur-sm' : ''
        }`}
        aria-label="Resume document preview"
      />
      <div
        className={`resume-overlay transition-opacity duration-300 group-hover:opacity-100 ${
          tapped ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!tapped}>
        <Button
          asChild
          size="lg"
          className="resume-download-btn"
          onClick={e => e.stopPropagation()}>
          <Link href={RESUME_PATH} download="Mehmed_Khan_Resume.pdf">
            <Download />
            Download
          </Link>
        </Button>
      </div>
    </div>
  )
}
