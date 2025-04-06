"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function LoadingScreen() {
  const [mounted, setMounted] = React.useState(false)
  const [colorIndex, setColorIndex] = React.useState(0)

  // Logo colors for the border - matching the navbar
  const logoColors = [
    "#6B54FA", // Purple
    "#FA6565", // Pink/Red
    "#F9CA56", // Yellow/Gold
    "#53E2D2"  // Teal
  ]

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % logoColors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#140047]">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity
          }}
          style={{ 
            border: `2px solid ${logoColors[colorIndex]}`,
            transition: "border-color 0.5s ease-in-out",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image 
            src="/images/Picture1.png" 
            alt="Logo" 
            width={64} 
            height={64}
            className="overflow-hidden rounded-full"
            priority
            style={{ 
              objectFit: "contain"
            }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex flex-col items-center text-xs font-bold text-white space-y-0.5"
      >
        {/* <span>All</span>
        <span>Things</span>
        <span>Advertising</span> */}
      </motion.div>
    </div>
  )
}

