'use client'

import Image from 'next/image'
import { Button } from '../ui/button'

/**
 * Hero banner component displaying the main introduction section
 *
 * @description Main landing section featuring personal introduction,
 * professional title, description, and call-to-action button with avatar image
 *
 * @returns JSX element containing the hero section
 *
 * @example
 * ```tsx
 * <HeroBanner />
 * ```
 */
export default function HeroBanner() {
  /**
   * Handles navigation to contact page
   * @description Redirects user to the contact page when CTA button is clicked
   */
  function handleClick(): void {
    window.location.href = '/contact'
  }

  return (
    <header className="h-[calc(100dvh-60px)]">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold text-gray-500 mb-2">
          Hi👋, I'm Mehmed.
        </h2>
        <h1 className="text-6xl font-black">
          I'm a Web Developer | Full-Stack Engineer | UI/UX Designer
        </h1>
        <p className="text-xl text-gray-500 my-10">
          <span className="font-bold text-2xl mr-2">"</span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          nihil repellat nemo necessitatibus eos animi molestiae similique
          dolorem modi quae, ea distinctio, rem aspernatur quo temporibus
          quaerat praesentium dolores!
          <span className="font-bold text-2xl ml-2">"</span>
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="w-fit bg-red-500 hover:bg-red-600 cursor-pointer shadow-2xl shadow-red-500 hover:-translate-y-1 transition-all duration-300"
          onClick={handleClick}>
          Contact Me
        </Button>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <Image
          src="/images/user-avatar.webp"
          alt="User avatar"
          width={320}
          height={480}
          className="h-auto"
        />
      </div>
    </header>
  )
}
