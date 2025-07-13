"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ProfileCard } from "@/components/profile-card";
import { TechStack } from "@/components/tech-stack";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative mx-auto max-w-5xl font-spaceGrotesk">
      <div className="flex items-center justify-center max-sm:flex-col sm:flex-row bg-transparent">
        <BentoGrid className="grid-cols-1 sm:grid-cols-8 sm:grid-rows-5 p-5 max-sm:p-4 sm:h-[770px] relative w-full max-sm:gap-3 max-sm:min-h-screen">
          
          {/* Profile Card */}
          <BentoCard
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10 max-sm:h-max dark:p-1 p-0.5 !border-dark-3/70 dark:!border-0 dark:bg-white/30"
            background={<ProfileCard />}
          />

          {/* Tech Stack Card */}
          <BentoCard
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-5 z-[8] max-sm:h-max relative !border-dark-3 dark:!border-0 [box-shadow:0_0px_60px_-25px_#ffffff1f_inset] dark:[box-shadow:0px_0px_40px_5px_#c6c6c635_inset] dark:p-1 p-0.5 dark:bg-white/30"
            background={<TechStack />}
          />

          {/* Quote Card */}
          <BentoCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="sm:col-start-7 sm:col-end-9 sm:row-start-1 sm:row-end-3 max-sm:h-max relative dark:p-1 p-0.5 dark:bg-white/30"
            background={
              <div className="flex flex-col h-full overflow-hidden relative z-10 p-5 items-start justify-start gap-4 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD]">
                <div className="text-xs dark:text-black/70 text-zinc-400/80">
                  13/07/2025, 14:16:39
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-sm dark:text-dark-1 text-center font-mono">
                    "How do I centre<br />a div again??"
                  </p>
                </div>
              </div>
            }
          />

          {/* Daily Tools Card */}
          <BentoCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="sm:col-start-3 sm:col-end-5 sm:row-start-3 sm:row-end-5 max-sm:h-max relative dark:p-1 p-0.5 dark:bg-white/30"
            background={
              <div className="flex flex-col h-full overflow-hidden relative z-10 p-5 items-start justify-start gap-4 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD]">
                <h2 className="text-2xl font-bold dark:text-dark-1">DAILY</h2>
                <p className="text-sm dark:text-dark-1">Tools & Links</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="w-8 h-8 bg-dark-3 dark:bg-dark-5 rounded border"></div>
                  <div className="w-8 h-8 bg-dark-3 dark:bg-dark-5 rounded border"></div>
                  <div className="w-8 h-8 bg-dark-3 dark:bg-dark-5 rounded border"></div>
                  <div className="w-8 h-8 bg-dark-3 dark:bg-dark-5 rounded border"></div>
                </div>
              </div>
            }
          />

          {/* Links Card */}
          <BentoCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="sm:col-start-5 sm:col-end-9 sm:row-start-3 sm:row-end-5 max-sm:h-max relative dark:p-1 p-0.5 dark:bg-white/30"
            background={
              <div className="flex flex-col h-full overflow-hidden relative z-10 p-5 items-start justify-start gap-4 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD]">
                <h2 className="text-2xl font-bold dark:text-dark-1">LINKS</h2>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="https://github.com/BL4nk19" className="dark:text-dark-1 hover:underline">GitHub</a>
                  <a href="https://linkedin.com/in/josh-vilensky" className="dark:text-dark-1 hover:underline">LinkedIn</a>
                  <a href="mailto:hello@joshvilensky.com" className="dark:text-dark-1 hover:underline">Email</a>
                </div>
              </div>
            }
          />

          {/* Projects Footer */}
          <BentoCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="sm:col-start-1 sm:col-end-9 sm:row-start-5 sm:row-end-6 max-sm:h-max relative dark:p-1 p-0.5 dark:bg-white/30"
            background={
              <div className="flex items-center justify-between h-full overflow-hidden relative z-10 p-5 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD]">
                <h2 className="text-xl font-bold dark:text-dark-1">PROJECTS</h2>
                <p className="text-sm dark:text-dark-1">Coming soon...</p>
              </div>
            }
          />

        </BentoGrid>
      </div>
    </main>
  );
}