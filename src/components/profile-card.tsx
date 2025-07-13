"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import AnimatedText from "@/components/animated-text";

const ProfileCard = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col overflow-hidden size-full relative z-10 p-5 items-start justify-start gap-8 max-sm:h-[275px] max-sm:gap-4 dark:text-dark-4 text-white border border-dark-3 dark:border-0 rounded-xl dark:bg-[#FDFDFD] bg-dark-1">
      <div className="w-full flex justify-between items-start">
        <div className="flex gap-3">
          <div className="size-16 rounded-3xl bg-gray-400"></div>
          <div>
            <p className="font-bold text-lg">Your Name.</p>
            <p className="text-md font-mono dark:text-black/70 text-zinc-400/80">@yourusername</p>
          </div>
        </div>
        <button onClick={toggleTheme} className="h-9 w-9 rounded-full bg-transparent">
          <p className={`w-[1.2rem] transition-all duration-100 text-white dark:text-zinc-500 font-bold ${theme === "light" ? "scale-100" : "scale-0"}`}>夜</p>
          <p className={`absolute w-[1.2rem] transition-all duration-100 text-zinc-500 dark:text-black font-bold ${theme === "dark" ? "scale-100" : "scale-0"}`}>朝</p>
        </button>
      </div>

      <div className="flex flex-col gap-1 overflow-hidden">
        <div className="font-bold w-full flex items-center justify-start gap-1">
          <p className="inline text-lg">I build </p>
          <div className="min-w-[5.5rem]">
            <AnimatedText texts={["WebApps", "Backends", "APIs"]} />
          </div>
          <p>.</p>
        </div>
        <div className="w-full">
          <p className="text-sm">Hello, I&apos;m Your Name! A developer based in South Africa.</p>
        </div>
      </div>

      <div className="absolute bottom-5 right-5">
        <div className="font-mono flex justify-end items-center gap-1 text-sm text-zinc-400 dark:text-black/70">
          <div className="size-1.5 rounded-full bg-green"></div>
          <p className="text-xs">Available for work</p>
        </div>
        <div className="flex items-center justify-center">
          <time className="text-[10px] font-light text-zinc-500 font-mono">
            {currentTime.toLocaleString('en-ZA')}
          </time>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 max-sm:hidden">
        <p className="text-xs font-mono dark:text-black/70 text-zinc-400/70">
          &quot;How do I centre <br /> a div again??&quot;
        </p>
      </div>
    </div>
  )
}

export default ProfileCard