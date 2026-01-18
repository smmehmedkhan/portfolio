import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <motion.section
      className="container py-24"
      initial={{ opacity: 0, transform: 'translateX(-100%)' }}
      whileInView={{ opacity: 1, transform: 'translateX(0)' }}
      transition={{ type: 'spring', duration: 1.5 }}>
      <h2 className="text-2xl font-bold text-center text-violet-500 mb-12 md:mb-16">
        What my clients say?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 w-full">
        <div className="min-h-[200px] px-4 py-6 border-2 border-red-500 rounded-lg bg-red-500/5 flex flex-col gap-5">
          <p>
            <span className="text-2xl font-black text-red-600 mx-1.5">"</span>
            <span>
              Working with Mehmed was an absolute pleasure. He delivered a
              stunning frontend that exceeded our expectations, and his
              attention to detail in both design and code quality is
              exceptional. The application he built is not only beautiful but
              also performs flawlessly.
            </span>
            <span className="text-2xl font-black text-red-600 mx-1.5">"</span>
          </p>
          <div className="w-full h-fit flex gap-3">
            <Image
              src="/images/user-avatar.webp"
              alt="Client testimonial"
              width={40}
              height={40}
              className="bg-accent border border-red-500 size-12 rounded-full bg-contain bg-center"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-slate-300">
                Sarah Johnson
              </h4>
              <h5 className="text-lg font-semibold text-slate-500">
                Product Manager, Tech Startup
              </h5>
            </div>
          </div>
        </div>
        <div className="min-h-[200px] px-4 py-6 border-2 border-yellow-500 rounded-lg bg-yellow-500/5 flex flex-col gap-5">
          <p>
            <span className="text-2xl font-black text-yellow-600 mx-1.5">
              "
            </span>
            <span>
              Mehmed's expertise in full-stack development is impressive. He
              built a scalable API that handles our growing user base perfectly,
              and his React components are clean, reusable, and well-documented.
              Highly recommend for any web development project.
            </span>
            <span className="text-2xl font-black text-yellow-600 mx-1.5">
              "
            </span>
          </p>
          <div className="w-full h-fit flex gap-3">
            <Image
              src="/images/user-avatar.webp"
              alt="Client testimonial"
              width={40}
              height={40}
              className="bg-accent border border-yellow-500 size-12 rounded-full bg-contain bg-center"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-slate-300">Michael Chen</h4>
              <h5 className="text-lg font-semibold text-slate-500">
                CTO, Digital Agency
              </h5>
            </div>
          </div>
        </div>
        <div className="min-h-[200px] px-4 py-6 border-2 border-blue-500 rounded-lg bg-blue-500/5 flex flex-col gap-5">
          <p>
            <span className="text-2xl font-black text-blue-600 mx-1.5">"</span>
            <span>
              The Next.js application Mehmed developed for us is
              production-ready and optimized for performance. His knowledge of
              modern web technologies and best practices made the entire
              development process smooth and efficient. A true professional.
            </span>
            <span className="text-2xl font-black text-blue-600 mx-1.5">"</span>
          </p>
          <div className="w-full h-fit flex gap-3">
            <Image
              src="/images/user-avatar.webp"
              alt="Client testimonial"
              width={40}
              height={40}
              className="bg-accent border border-blue-500 size-12 rounded-full bg-contain bg-center"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-slate-300">
                David Martinez
              </h4>
              <h5 className="text-lg font-semibold text-slate-500">
                Founder, E-Commerce Platform
              </h5>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
