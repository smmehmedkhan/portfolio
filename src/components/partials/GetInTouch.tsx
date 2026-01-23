import Link from 'next/link'
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { siteHeadings } from '@/data/siteHeadings'
import { Heading } from '../ui/heading'

export default function GetInTouch() {
  return (
    <section className="container flex-box gap-10">
      <div className="wrapper">
        <Heading variant={'primary-heading'} size={'3xl'}>
          {siteHeadings.getInTouch.title}
        </Heading>
      </div>

      {/* Social Links */}
      <div className="flex-inline gap-2.5">
        <Button variant="link" asChild>
          <Link href="#">
            <FaGithub className="size-10" />
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">
            <FaDiscord className="size-10" />
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">
            <FaLinkedin className="size-10" />
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">
            <FaFacebook className="size-10" />
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">
            <FaInstagram className="size-10" />
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="#">
            <FaSquareXTwitter className="size-10" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
