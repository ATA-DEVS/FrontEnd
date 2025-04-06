"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedButton } from "@/components/animated-button"
import { SignInModal } from "@/components/auth/sign-in-modal"
import { SignUpModal } from "@/components/auth/sign-up-modal"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const routes = [
  {
    href: "/",
    label: "Home",
    active: (pathname: string) => pathname === "/",
  },
  {
    href: "/ad-spaces",
    label: "Ad Marketplace",
    active: (pathname: string) => pathname === "/ad-spaces" || pathname.startsWith("/ad-spaces/"),
  },
  {
    href: "/influencers",
    label: "Influencers",
    active: (pathname: string) => pathname === "/influencers" || pathname.startsWith("/influencers/"),
  },
  {
    href: "/affiliates",
    label: "Affiliates",
    active: (pathname: string) => pathname === "/affiliates" || pathname.startsWith("/affiliates/"),
  },
  // {
  //   href: "/pricing",
  //   label: "Pricing",
  //   active: (pathname: string) => pathname === "/pricing",
  // },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [colorIndex, setColorIndex] = React.useState(0)
  const [isSignInOpen, setIsSignInOpen] = React.useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false)

  // Logo colors for the border
  const logoColors = [
    "#6B54FA", // Purple
    "#FA6565", // Pink/Red
    "#F9CA56", // Yellow/Gold
    "#53E2D2"  // Teal
  ]

  // Color rotation effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % logoColors.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
          "mt-4" // Add margin top for floating effect
        )}
      >
        <div className={cn(
          "container mx-auto",
          "bg-[#32147f]/20 backdrop-blur-[8px]", // Reduced initial opacity for glass effect
          "rounded-full", // Rounded corners
          "shadow-lg shadow-[#140047]/20", // Floating effect shadow
          "border border-[#4f2da3]/20", // Subtle border
          "px-6 py-4", // Padding
          "transition-all duration-300",
          isScrolled && "shadow-xl bg-[#140047]/80 border-[#4f2da3]/40" // 80% opacity when scrolled
        )}>
          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-4">
                <div 
                  className="relative flex items-center justify-center"
                  style={{ 
                    border: `2px solid ${logoColors[colorIndex]}`,
                    transition: "border-color 0.5s ease-in-out",
                    borderRadius: "50%",
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image 
                    src="/images/Picture1.png" 
                    alt="Logo" 
                    width={36} 
                    height={36}
                    className="overflow-hidden" 
                    priority
                    style={{ 
                      borderRadius: "50%",
                      objectFit: "contain"
                    }}
                  />
                </div>
                <div className="flex flex-col text-xs font-bold text-white space-y-0.5">
                  <span>All</span>
                  <span>Things</span>
                  <span>Advertising</span>
                </div>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  {routes.map((route) => (
                    <NavigationMenuItem key={route.href}>
                      <Link href={route.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-sm font-medium transition-colors bg-transparent hover:bg-[#2a2e45]/50",
                            route.active(pathname) ? "text-[#9575ff]" : "text-white hover:text-[#9575ff]",
                          )}
                        >
                          {route.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-medium transition-colors bg-transparent hover:bg-[#2a2e45]/50",
                        pathname === "/about" || pathname === "/contact" || pathname === "/help" || pathname === "/faq"
                          ? "text-[#9575ff]"
                          : "text-white hover:text-[#9575ff]",
                      )}
                    >
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-[#0f1424] border border-[#2a2e45]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/about"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2a2e45] hover:text-white focus:bg-[#2a2e45] focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none text-white">About</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                Learn about our mission and team
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/contact"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2a2e45] hover:text-white focus:bg-[#2a2e45] focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none text-white">Contact</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                Get in touch with our team
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/help"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2a2e45] hover:text-white focus:bg-[#2a2e45] focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none text-white">Help Center</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                Find answers to common questions
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/faq"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#2a2e45] hover:text-white focus:bg-[#2a2e45] focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none text-white">FAQ</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                Frequently asked questions
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-2">
              <AnimatedButton
                variant="ghost-primary"
                className="relative overflow-hidden text-white hover:text-[#9575ff]"
                hoverScale={1.02}
                glowOnHover={true}
                shimmer={true}
                onClick={() => setIsSignInOpen(true)}
              >
                Sign In
              </AnimatedButton>
              <AnimatedButton
                variant="primary-gradient"
                className="relative overflow-hidden bg-[#9575ff] hover:bg-[#8a63ff] text-white"
                hoverScale={1.02}
                glowOnHover={true}
                sweep={true}
                onClick={() => setIsSignUpOpen(true)}
              >
                Get Started
              </AnimatedButton>
              <ModeToggle className="hidden" />
            </div>
          </div>
        </div>
      </header>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSignUp={() => {
          setIsSignInOpen(false)
          setIsSignUpOpen(true)
        }}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </>
  )
}

