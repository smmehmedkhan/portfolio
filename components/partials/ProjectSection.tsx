import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function ProjectSection() {
  return (
    <motion.section>
      <h1 className="text-2xl font-bold text-violet-500 text-center my-16">
        Top Projects
      </h1>
      <div className="w-full flex flex-col items-center justify-center gap-16">
        <div className="w-full flex items-center justify-center gap-4">
          <div className="w-1/2 flex flex-col items-center border-2 border-border p-4 rounded-lg">
            <Image src="/icons/file.svg" alt="file" width={400} height={400} />
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center px-5 gap-2 text-center">
            <h1 className="text-xl font-bold text-purple-500">
              Lorem, ipsum dolor.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias illo placeat hic voluptas alias porro rem doloremque
              fugit rerum eaque reiciendis consequatur praesentium doloribus,
              maxime itaque saepe delectus temporibus nihil.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-4 flex-row-reverse">
          <div className="w-1/2 flex flex-col items-center border-2 border-border p-4 rounded-lg">
            <Image src="/icons/file.svg" alt="file" width={400} height={400} />
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center px-5 gap-2 text-center">
            <h1 className="text-xl font-bold text-purple-500">
              Lorem, ipsum dolor.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias illo placeat hic voluptas alias porro rem doloremque
              fugit rerum eaque reiciendis consequatur praesentium doloribus,
              maxime itaque saepe delectus temporibus nihil.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-4">
          <div className="w-1/2 flex flex-col items-center border-2 border-border p-4 rounded-lg">
            <Image src="/icons/file.svg" alt="file" width={400} height={400} />
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center px-5 gap-2 text-center">
            <h1 className="text-xl font-bold text-purple-500">
              Lorem, ipsum dolor.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias illo placeat hic voluptas alias porro rem doloremque
              fugit rerum eaque reiciendis consequatur praesentium doloribus,
              maxime itaque saepe delectus temporibus nihil.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center justify-center gap-4">
          <div className="w-1/2 flex flex-col items-center border-2 border-border p-4 rounded-lg">
            <Image src="/icons/file.svg" alt="file" width={400} height={400} />
          </div>
          <div className="w-1/2 h-auto flex flex-col items-center px-5 gap-2 text-center">
            <h1 className="text-xl font-bold text-purple-500">
              Lorem, ipsum dolor.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias illo placeat hic voluptas alias porro rem doloremque
              fugit rerum eaque reiciendis consequatur praesentium doloribus,
              maxime itaque saepe delectus temporibus nihil.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
