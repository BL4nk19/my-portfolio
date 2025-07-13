"use client"

import Link from "next/link"

const SocialCard = () => {
  const socials = [
    { name: "GitHub", username: "@yourusername", url: "https://github.com/yourusername" },
    { name: "LinkedIn", username: "@yourname", url: "https://linkedin.com/in/yourname" },
    { name: "X (Twitter)", username: "@yourusername", url: "https://x.com/yourusername" }
  ]

  return (
    <div className="flex w-full h-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 relative dark:bg-white/30">
      <div className="w-full h-full">
        <div className="flex flex-col h-full overflow-hidden justify-start w-full dark:text-dark-4 p-4 border border-dark-4 dark:border-0 rounded-xl dark:bg-[#FDFDFD] bg-zinc-800/10">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white dark:text-dark-4">Connect</h3>
            <p className="text-xs text-zinc-400 dark:text-dark-4/70">Let&apos;s build something together</p>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-dark-4/10 transition-all duration-200 group"
              >
                <div className="text-white dark:text-dark-4 group-hover:scale-110 transition-transform duration-200">
                  <div className="w-5 h-5 bg-white dark:bg-dark-4 rounded"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white dark:text-dark-4">{social.name}</p>
                  <p className="text-xs text-zinc-400 dark:text-dark-4/70">{social.username}</p>
                </div>
                <svg className="w-4 h-4 text-zinc-400 dark:text-dark-4/70 group-hover:text-white dark:group-hover:text-dark-4 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-700 dark:border-dark-4/20">
            <p className="text-xs text-zinc-500 dark:text-dark-4/50 text-center">Available for freelance work</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialCard
