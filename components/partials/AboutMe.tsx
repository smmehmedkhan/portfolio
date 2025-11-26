import Image from 'next/image'
/**
 * AboutMe component displaying short summary of about page
 *
 * @description About me component dispay a short summary of about page,
 * with additional images and a CTA button to navigate about page.
 *
 * @returns JSX element with about section and a CTA button
 *
 * @example
 * ```tsx
 * <AboutMe />
 * ```
 */
export default function AboutMe() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center text-violet-500 my-16">
        About Me
      </h1>
      <div className="w-full flex items-center justify-center gap-6">
        <div className="w-1/2   flex flex-col items-center p-2">
          <Image
            src="/cool-guy-avatar.svg"
            alt="file"
            width={400}
            height={400}
          />
        </div>
        <div className="w-1/2 h-[400] flex flex-col items-center justify-center bg-accent p-8 rounded-md">
          <div className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            similique provident voluptates repellat officiis fugit soluta illum
            eligendi dolorem quasi!
          </div>
          <div className="text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            delectus. Repellat ratione numquam vel inventore veritatis quos
            ipsum cupiditate, mollitia debitis aut aspernatur tempore
            praesentium.
          </div>
          <div className="text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            dignissimos placeat eligendi, accusamus voluptatum atque?
          </div>
        </div>
      </div>
    </section>
  )
}
