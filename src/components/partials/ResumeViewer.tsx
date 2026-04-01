'use client'

import { Download } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const RESUME_PATH = '/resume.pdf'

export default function ResumeViewer() {
  const [tapped, setTapped] = useState(false)

  return (
    <button
      type="button"
      className="resume-viewer group"
      onClick={() => setTapped(prev => !prev)}
      aria-label="Toggle resume preview">
      <iframe
        src={RESUME_PATH}
        title="Resume"
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
          <a href={RESUME_PATH} download="Mehmed_Khan_Resume.pdf">
            <Download />
            Download
          </a>
        </Button>
      </div>
    </button>
  )
}
