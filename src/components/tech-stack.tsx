"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Framer", icon: "🎬" },
  { name: "Figma", icon: "🎯" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "📝" },
  { name: "Vercel", icon: "🚀" },
];

export function TechStack() {
  return (
    <div className="flex flex-col h-full overflow-hidden relative z-10 p-6 items-start justify-start gap-6 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD]">
      <div>
        <h2 className="text-2xl font-bold dark:text-dark-1 mb-2">TECH STACK</h2>
        <p className="text-sm dark:text-dark-1 opacity-80">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2 p-2 rounded-lg bg-dark-3 dark:bg-dark-5 hover:bg-dark-4 dark:hover:bg-dark-6 transition-colors"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-xs dark:text-dark-1 font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto">
        <p className="text-xs dark:text-dark-1 opacity-60">
          Always learning new technologies
        </p>
      </div>
    </div>
  );
}