import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "group relative rounded-xl border border-[#2a2e45]/50",
      "bg-gradient-to-br from-[#140047]/80 via-[#1a0066]/80 to-[#200080]/80",
      "backdrop-blur-[8px]",
      "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
      "transition-all duration-300",
      "hover:shadow-[0_8px_30px_rgb(0,0,0,0.24)]",
      "hover:border-[#4f2da3]/50",
      "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-transparent after:via-[#9575ff]/5 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100",
      className
    )}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      "relative z-10",
      className
    )}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-white",
      "relative z-10",
      className
    )}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground/80",
      "relative z-10",
      className
    )}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.2 }}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
  <motion.div 
    ref={ref} 
    className={cn(
      "p-6 pt-0",
      "relative z-10",
      className
    )}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.3 }}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0",
      "relative z-10",
      className
    )}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: 0.4 }}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
