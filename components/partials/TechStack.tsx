import { skills } from '@/constants/skillsList'

export default function TechStack() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center text-violet-500 my-16">
        Tech Stack
      </h1>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex gap-5">
          <div className="w-1/3 bg-accent py-8 px-4 rounded-md border-2 border-cyan-500 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-cyan-500">
              Programming Languages
            </h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {skills.lang.map(l => (
                <li
                  key={l}
                  className="bg-cyan-500/50 w-full text-center p-2 rounded-md text-white">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 bg-accent py-8 px-4 rounded-md border-2 border-cyan-500 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-cyan-500">Frontend</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {skills.frontend.map(skill => (
                <li
                  key={skill}
                  className="bg-cyan-500/50 w-full text-center p-2 rounded-md text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 bg-accent py-8 px-4 rounded-md border-2 border-cyan-500 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-cyan-500">Backend</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {skills.backend.map(skill => (
                <li
                  key={skill}
                  className="bg-cyan-500/50 w-full text-center p-2 rounded-md text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-1/3 bg-accent py-8 px-4 rounded-md border-2 border-cyan-500 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-cyan-500">Database</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {skills.db.map(skill => (
                <li
                  key={skill}
                  className="bg-cyan-500/50 w-full text-center p-2 rounded-md text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 bg-accent py-8 px-4 rounded-md border-2 border-cyan-500 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-cyan-500">Advanced</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {skills.advanced.map(skill => (
                <li
                  key={skill}
                  className="bg-cyan-500/50 w-full text-center p-2 rounded-md text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 bg-accent py-8 px-4 rounded-md border-2 border-cyan-500 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-cyan-500">Tools</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {skills.tools.map(skill => (
                <li
                  key={skill}
                  className="bg-cyan-500/50 w-full text-center p-2 rounded-md text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
