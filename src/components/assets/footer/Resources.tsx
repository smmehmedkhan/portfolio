import Link from 'next/link'
import { Heading } from '@/components/ui/heading'

export default function Resources() {
  return (
    <div className="wrapper gap-5">
      <Heading variant="title" size="lg">
        Resources
      </Heading>

      <ul className="resources">
        <li>
          <Link href="/about" className="rs-link">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="rs-link">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/projects" className="rs-link">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/" className="rs-link">
            Privacy
          </Link>
        </li>
      </ul>
    </div>
  )
}
