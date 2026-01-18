import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex-box">
      <Link
        href="/"
        className="uppercase font-special font-black tracking-wide text-xl text-primary"
        aria-label="Mehmed Khan - Home">
        MK
      </Link>
    </div>
  )
}
