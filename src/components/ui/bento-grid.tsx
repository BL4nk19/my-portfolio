"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

interface BentoCardProps {
  className?: string;
  background: ReactNode;
  children?: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {children}
    </div>
  );
}

export function BentoCard({ 
  className, 
  background, 
  children,
  initial,
  animate,
  transition
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-background p-2",
        className
      )}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 -z-10">
        {background}
      </div>
    </motion.div>
  );
}