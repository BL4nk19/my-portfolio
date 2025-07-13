"use client"

const TechStackCard = () => {
  const techStack = {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", "Express.js", "Prisma ORM"],
    tools: ["Docker", "Vercel", "Git"],
    learning: ["Rust", "Go"]
  }

  const TechBadge = ({ tech }: { tech: string }) => (
    <div className="p-px text-xs dark:text-black font-normal border dark:border-dark-5/60 border-zinc-800 line-clamp-1 overflow-hidden w-max rounded-lg size-max hover:border-white/50 dark:hover:border-dark-4/50 transition-all hover:text-white bg-neutral-800/30 dark:bg-transparent backdrop-blur-xl backdrop-saturate-200">
      <p className="px-2 rounded-md border dark:border-dark-2/65 border-zinc-800 mx-auto">
        {tech}
      </p>
    </div>
  )

  return (
    <div className="flex w-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 relative dark:bg-white/30">
      <div className="w-full h-full">
        <div className="flex flex-col h-full overflow-hidden justify-start w-full group dark:text-dark-4 pb-2.5 border border-dark-4 dark:border-0 rounded-xl dark:bg-[#FDFDFD] bg-zinc-800/10">
          <div className="h-max">
            <div className="flex pt-2.5">
              <p className="text-4xl px-2.5 font-bold text-white dark:text-dark-4">{"{"}</p>
              <p className="text-4xl group-hover:px-2 transition-all duration-200 font-bold text-white dark:text-dark-4">{"}"}</p>
            </div>
            <h1 className="text-5xl font-extrabold py-2 px-2.5 relative w-full text-white dark:text-dark-4">
              TECH <br /> STACK
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white dark:bg-dark-4 rounded-full transition-all duration-500 group-hover:w-[80%] group-hover:mx-auto"></span>
            </h1>
          </div>

          <div className="relative mt-2 w-full grid grid-cols-1 text-zinc-200/80 overflow-y-auto p-2 gap-5">
            <div className="flex flex-col transition-all duration-500 rounded-lg gap-1 p-1 text-md">
              <p className="text-white dark:text-dark-1 text-sm">Frontend:</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.frontend.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            <div className="flex flex-col transition-all duration-500 rounded-lg gap-1 p-1 text-md">
              <p className="text-white dark:text-dark-1 text-sm">Backend:</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.backend.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            <div className="flex flex-col transition-all duration-500 rounded-lg gap-1 p-1 text-md">
              <p className="text-white dark:text-dark-1 text-sm">Tools:</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.tools.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>

            <div className="flex flex-col transition-all duration-500 rounded-lg gap-1 p-1 text-md">
              <p className="text-white dark:text-dark-1 text-sm">Learning:</p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.learning.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackCard
