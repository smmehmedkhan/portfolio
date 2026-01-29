import { Paragraph } from '../ui/paragraph'

export default function Copyrights() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full py-2 text-center">
      <Paragraph variant="muted" size="sm">
        © {currentYear} Mehmed Khan. All rights reserved.
      </Paragraph>
    </div>
  )
}
