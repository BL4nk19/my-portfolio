"use client"

import Link from "next/link"

const ProjectCard = () => {
  return (
    <Link
      href="#projects"
      className="flex w-full h-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 hover:scale-105 transition-all duration-300 relative dark:bg-white/30 group"
    >
      <div className="w-full h-full">
        <div className="flex flex-col h-full overflow-hidden justify-between w-full dark:text-dark-4 p-4 border border-dark-4 dark:border-0 rounded-xl dark:bg-[#FDFDFD] bg-zinc-800/10">
          <div className="flex justify-start">
            <svg className="w-8 h-8 text-white dark:text-dark-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11 13.73-4 6.93" />
            </svg>
          </div>

          <h2 className="sm:text-[1.9rem] max-sm:text-6xl overflow-hidden lg:text-[2.2rem] leading-7 lg:leading-10 font-bold w-full text-wrap text-white dark:text-dark-4 z-20">
            PROJECT<br />SSS
          </h2>

          <div className="flex flex-col absolute bottom-4 right-4 text-xl leading-snug">
            <p className="text-white dark:text-black font-extrabold">工</p>
            <p className="text-white dark:text-black font-extrabold">芸</p>
          </div>

          <div className="pointer-events-none h-0 absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white dark:text-dark-4 opacity-80">View My Projects →</p>
          </div>
          
          <div className="pointer-events-none h-0 absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10 dark:group-hover:bg-white/10 rounded-xl"></div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
