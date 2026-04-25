import { Paragraph } from '@/components/ui/paragraph'

export default function Copyrights() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-auto w-full">
      <hr className="w-full border-border" />
      <div className="copyrights">
        <Paragraph variant="muted" size="sm">
          © {currentYear} Mehmed Khan. All rights reserved.
        </Paragraph>
      </div>
    </div>
  )
}
