"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="flex flex-col h-full overflow-hidden relative z-10 p-6 items-start justify-start gap-6 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD]">
      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-dark-3 dark:border-dark-5 bg-dark-3 dark:bg-dark-5 flex items-center justify-center">
          <span className="text-2xl font-bold dark:text-dark-1">JV</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-dark-1">Josh Vilensky</h1>
          <p className="text-sm dark:text-dark-1 opacity-80">Product Designer & Design Engineer</p>
        </div>
      </div>

      {/* Bio */}
      <div className="flex-1">
        <p className="text-sm dark:text-dark-1 leading-relaxed">
          Passionate about creating intuitive user experiences and bridging the gap between design and engineering. 
          Currently transitioning from Product Design to Design Engineering, focusing on building beautiful, 
          functional interfaces that users love.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        <motion.a
          href="https://github.com/BL4nk19"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-dark-3 dark:bg-dark-5 hover:bg-dark-4 dark:hover:bg-dark-6 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-4 h-4 dark:text-dark-1" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/josh-vilensky"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-dark-3 dark:bg-dark-5 hover:bg-dark-4 dark:hover:bg-dark-6 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-4 h-4 dark:text-dark-1" />
        </motion.a>
        <motion.a
          href="mailto:hello@joshvilensky.com"
          className="p-2 rounded-lg bg-dark-3 dark:bg-dark-5 hover:bg-dark-4 dark:hover:bg-dark-6 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-4 h-4 dark:text-dark-1" />
        </motion.a>
      </div>
    </div>
  );
}