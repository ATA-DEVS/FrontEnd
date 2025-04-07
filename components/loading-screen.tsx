"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingScreenProps {
  className?: string
}

export function LoadingScreen({ className }: LoadingScreenProps) {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Disappear animation
  const containerVariants = {
    visible: { opacity: 1 },
    hidden: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut" 
      }
    }
  }

  // Pulse animation for the glow effect
  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  }

  // Rotation animation for the loader
  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        ease: "linear", 
        repeat: Infinity
      }
    }
  }

  // Additional particles that float around the loader
  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: Math.random()
      }
    }
  }

  if (!showLoader) return null

  return (
      <motion.div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md",
        className
      )}
      initial="visible"
      animate={showLoader ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow effect */}
        <motion.div
          className="absolute w-40 h-40 bg-[#9575ff]/20 rounded-full blur-2xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Loader image with rotation */}
        <motion.div
          className="relative z-10"
          variants={rotateVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/images/loader.png"
            alt="Loading"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#9575ff] rounded-full"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1px)"
              }}
              variants={particleVariants}
              initial="initial"
              animate="animate"
              transition={{
                delay: i * 0.2,
                duration: 2 + Math.random() * 2
              }}
            />
          ))}
        </div>
        
          <motion.div
          className="mt-6 text-white font-medium"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 }
          }}
        >
          <motion.span
            className="inline-block"
            animate={{
              opacity: [1, 0.5, 1],
              transition: {
                duration: 1.5,
              repeat: Infinity,
                repeatType: "mirror"
              }
            }}
          >
            Loading...
          </motion.span>
        </motion.div>
      </div>
      </motion.div>
  )
}

