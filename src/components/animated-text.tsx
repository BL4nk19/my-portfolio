"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  duration?: number
}

const AnimatedText = ({ texts, duration = 2000 }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      )
    }, duration)

    return () => clearInterval(interval)
  }, [texts.length, duration])

  return (
    <div className="w-full text-lg leading-none text-center relative font-sans font-bold max-w-screen-md mx-auto">
      {texts.map((text, index) => (
        <span
          key={text}
          className={`${
            index === currentIndex ? "absolute" : ""
          } w-full inline-block inset-x-0 top-0 m-auto transition-opacity duration-500`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            filter: "none"
          }}
        >
          {text}
        </span>
      ))}
    </div>
  )
}

export default AnimatedText