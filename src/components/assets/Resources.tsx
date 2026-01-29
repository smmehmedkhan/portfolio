import Link from 'next/link'
import { Heading } from '../ui/heading'

export default function Resources() {
  return (
    <div className="wrapper gap-5">
      <Heading variant="tertiary-heading" size="lg">
        Resources
      </Heading>

      <ul className="flex-box gap-2">
        <li>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="hover:text-accent">
            Privacy
          </Link>
        </li>
      </ul>
    </div>
  )
}
