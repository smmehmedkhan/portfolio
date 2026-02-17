import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex-box hover:opacity-90 transition-opacity duration-300 ease-in">
      <Link
        href="/"
        className="uppercase font-special font-black tracking-wide text-xl text-primary"
        aria-label="Mehmed Khan - Home">
        MK
      </Link>
    </div>
  )
}
