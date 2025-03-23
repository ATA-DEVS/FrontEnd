"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  speed: number
}

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Generate particles
  useEffect(() => {
    if (!containerRef.current) return

    const { width, height } = containerRef.current.getBoundingClientRect()
    setDimensions({ width, height })

    const isDark = theme === "dark"
    const particleColors = [
      isDark ? "rgba(93, 63, 211, 0.4)" : "rgba(20, 0, 71, 0.2)",
      isDark ? "rgba(120, 87, 255, 0.3)" : "rgba(40, 10, 100, 0.15)",
      isDark ? "rgba(150, 120, 255, 0.25)" : "rgba(60, 20, 130, 0.1)",
      isDark ? "rgba(180, 160, 255, 0.2)" : "rgba(80, 30, 160, 0.05)",
    ]

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 2,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.2 + 0.1,
    }))

    setParticles(newParticles)
  }, [theme])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top } = containerRef.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      setMousePosition({ x, y })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          animate={{
            x: [particle.x, particle.x + (Math.random() * 40 - 20), particle.x + (Math.random() * 40 - 20), particle.x],
            y: [particle.y, particle.y + (Math.random() * 40 - 20), particle.y + (Math.random() * 40 - 20), particle.y],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Mouse follower gradient */}
      <motion.div
        className="absolute rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl"
        style={{
          width: 300,
          height: 300,
          x: useTransform(cursorXSpring, (x) => x - 150),
          y: useTransform(cursorYSpring, (y) => y - 150),
        }}
      />

      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-[url('/images/mesh-gradient.png')] bg-cover opacity-10 mix-blend-overlay" />
    </div>
  )
}

