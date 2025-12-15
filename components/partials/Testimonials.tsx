import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, transform: 'translateX(-100%)' }}
      whileInView={{ opacity: 1, transform: 'translateX(0)' }}
      transition={{ type: 'spring', duration: 1.5 }}>
      <h1 className="text-2xl font-bold text-center text-violet-500 my-16">
        What my clients say?
      </h1>
      <div className="flex items-center justify-center gap-5 w-full">
        <div className="w-1/3 min-h-[200] px-4 py-6 border-2 border-red-500 rounded-lg bg-red-500/5 flex flex-col gap-5">
          <p>
            <span className="text-2xl font-black text-red-600 mx-1.5">"</span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              officia vitae voluptatem quo aliquam labore mollitia cum, nam
              quisquam nulla provident eum architecto aut voluptates iure
              dolores.
            </span>
            <span className="text-2xl font-black text-red-600 mx-1.5">"</span>
          </p>
          <div className="w-full h-fit flex gap-3">
            <Image
              src="/images/user-avatar.webp"
              alt="User"
              width={40}
              height={40}
              className="bg-accent border border-red-500 size-12 rounded-full bg-contain bg-center"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-slate-300">John smith</h4>
              <h5 className="text-lg font-semibold text-slate-500">
                Microsoft corporation (c)
              </h5>
            </div>
          </div>
        </div>
        <div className="w-1/3 min-h-[200] px-4 py-6 border-2 border-yellow-500 rounded-lg bg-yellow-500/5 flex flex-col gap-5">
          <p>
            <span className="text-2xl font-black text-yellow-600 mx-1.5">
              "
            </span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              officia vitae voluptatem quo aliquam labore mollitia cum, nam
              quisquam nulla provident eum architecto aut voluptates iure
              dolores. Vitae, at reiciendis.
            </span>
            <span className="text-2xl font-black text-yellow-600 mx-1.5">
              "
            </span>
          </p>
          <div className="w-full h-fit flex gap-3">
            <Image
              src="/images/user-avatar.webp"
              alt="User"
              width={40}
              height={40}
              className="bg-accent border border-yellow-500 size-12 rounded-full bg-contain bg-center"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-slate-300">John smith</h4>
              <h5 className="text-lg font-semibold text-slate-500">
                Microsoft corporation (c)
              </h5>
            </div>
          </div>
        </div>
        <div className="w-1/3 min-h-[200] px-4 py-6 border-2 border-blue-500 rounded-lg bg-blue-500/5 flex flex-col gap-5">
          <p>
            <span className="text-2xl font-black text-blue-600 mx-1.5">"</span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              officia vitae voluptatem quo aliquam labore mollitia cum, nam
              quisquam nulla provident eum architecto aut voluptates iure
              dolores. Vitae, at reiciendis.
            </span>
            <span className="text-2xl font-black text-blue-600 mx-1.5">"</span>
          </p>
          <div className="w-full h-fit flex gap-3">
            <Image
              src="/images/user-avatar.webp"
              alt="User"
              width={40}
              height={40}
              className="bg-accent border border-blue-500 size-12 rounded-full bg-contain bg-center"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-slate-300">John smith</h4>
              <h5 className="text-lg font-semibold text-slate-500">
                Microsoft corporation (c)
              </h5>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
