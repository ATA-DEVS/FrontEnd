"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBorderCardProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export function AnimatedBorderCard({
  className,
  children,
  ...props
}: AnimatedBorderCardProps) {
  return (
    <div className="relative group">
      {/* Animated background gradient */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-gradient-xy"
        animate={{
          background: [
            "linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247), rgb(236, 72, 153))",
            "linear-gradient(to right, rgb(236, 72, 153), rgb(99, 102, 241), rgb(168, 85, 247))",
            "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(99, 102, 241))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Card content */}
      <motion.div
        className={cn(
          "relative",
          "rounded-xl",
          "bg-gradient-to-br from-[#140047]/95 via-[#1a0066]/95 to-[#200080]/95",
          "backdrop-blur-xl",
          "p-6",
          "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
          "border border-white/10",
          "group-hover:border-white/20",
          "transition-all duration-300",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ 
          scale: 1.005,
          transition: { duration: 0.2 }
        }}
        {...props}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 translate-x-[-50%] translate-y-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_50%)] group-hover:animate-shine pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

// Add this to your globals.css
/*
@keyframes shine {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes gradient-xy {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-shine {
  animation: shine 8s linear infinite;
}

.animate-gradient-xy {
  animation: gradient-xy 15s ease infinite;
  background-size: 400% 400%;
}
*/ 