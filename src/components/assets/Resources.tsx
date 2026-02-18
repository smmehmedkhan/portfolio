import Link from 'next/link'
import { Heading } from '../ui/heading'

export default function Resources() {
  return (
    <div className="wrapper gap-5 order-3 md:order-3 2xl:order-3">
      <Heading variant="title" size="lg">
        Resources
      </Heading>

      <ul className="flex-box gap-2">
        <li>
          <Link href="/about" className="nav-links nav-link-dark">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-links nav-link-dark">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/projects" className="nav-links nav-link-dark">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/" className="nav-links nav-link-dark">
            Privacy
          </Link>
        </li>
      </ul>
    </div>
  )
}
