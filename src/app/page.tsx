"use client"

import { motion } from "framer-motion"
import ProfileCard from "@/components/profile-card";
import TechStackCard from "@/components/tech-stack-card";
import ProjectCard from "@/components/project-card";
import ToolsCard from "@/components/tools-card";
import SocialCard from "@/components/social-card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative mx-auto max-w-5xl font-spaceGrotesk">
      <div className="flex items-center justify-center max-sm:flex-col sm:flex-row bg-transparent">
        {/* Bento Grid Container */}
        <div className="grid-cols-1 sm:grid-cols-8 sm:grid-rows-5 p-5 max-sm:p-4 sm:h-[770px] relative w-full max-sm:gap-3 max-sm:min-h-screen grid">
          
          {/* Profile Card - Center */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:col-start-3 sm:col-end-7 sm:row-start-1 sm:row-end-3 z-10 max-sm:h-max dark:p-1 p-0.5 !border-dark-3/70 dark:!border-0 dark:bg-white/30 rounded-xl border border-dark-3 dark:border-0"
          >
            <ProfileCard />
          </motion.div>

          {/* Tech Stack Card - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-5 z-[8] max-sm:h-max border border-dark-3 dark:border-0 rounded-xl dark:p-1 p-0.5 dark:bg-white/30"
          >
            <TechStackCard />
          </motion.div>

          {/* Tools Card - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="sm:col-start-3 sm:col-end-7 sm:row-start-3 sm:row-end-6 z-[9] max-sm:h-max border-none dark:bg-transparent"
          >
            <ToolsCard />
          </motion.div>

          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="sm:col-start-7 sm:col-end-9 sm:row-start-1 sm:row-end-4 z-[7] max-sm:h-max border border-dark-3 dark:border-0 rounded-xl dark:p-1 p-0.5 dark:bg-white/30"
          >
            <ProjectCard />
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="sm:col-start-7 sm:col-end-9 sm:row-start-4 sm:row-end-6 z-[6] max-sm:h-max border border-dark-3 dark:border-0 rounded-xl dark:p-1 p-0.5 dark:bg-white/30"
          >
            <SocialCard />
          </motion.div>
        </div>

        {/* Mobile Footer */}
        <div className="sm:hidden w-full">
          <div className="border-t flex items-center justify-end w-[80%] mx-auto border-[#fdfdfd]/10 dark:border-dark-3/20 px-3 py-2 pb-3 sm:hidden">
            <p className="text-white dark:text-dark-3 font-bold">
              peace out.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
