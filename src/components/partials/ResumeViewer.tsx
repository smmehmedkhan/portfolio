'use client'

import { Download } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const RESUME_PATH = '/docs/resume.pdf'
const RESUME_EMBED_SRC = `${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`

export default function ResumeViewer() {
  const [tapped, setTapped] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleFocus = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="resume-viewer-wrapper group">
      {/* biome-ignore lint/a11y/useSemanticElements: embed didn't work inside a button */}
      <div
        role="button"
        tabIndex={0}
        className="resume-viewer"
        onClick={() => setTapped(prev => !prev)}
        onKeyDown={e => e.key === 'Enter' && setTapped(prev => !prev)}
        onBlur={() => {
          timeoutRef.current = setTimeout(() => setTapped(false), 100)
        }}
        aria-label="Toggle resume preview">
        <iframe
          src={RESUME_EMBED_SRC}
          title="Resume document preview"
          className={`resume-doc transition-[filter] duration-300 group-hover:blur-sm ${
            tapped ? 'blur-sm' : ''
          }`}
          aria-label="Resume document preview"
          loading="lazy"
        />
        <div
          className="resume-overlay group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <div
        className={`resume-overlay-actions transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto ${
          tapped
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}>
        <Button size="lg" className="resume-download-btn" asChild>
          <Link
            href={RESUME_PATH}
            download="Mehmed_Khan_Resume.pdf"
            tabIndex={tapped ? 0 : -1}
            onFocus={handleFocus}>
            <Download />
            Download
          </Link>
        </Button>
      </div>
    </div>
  )
}
