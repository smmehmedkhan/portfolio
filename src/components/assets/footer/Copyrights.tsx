import { Paragraph } from '@/components/ui/paragraph'

export default function Copyrights() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="copyrights">
      <Paragraph variant="muted" size="sm">
        © {currentYear} Mehmed Khan. All rights reserved.
      </Paragraph>
    </div>
  )
}
