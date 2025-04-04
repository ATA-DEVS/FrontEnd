"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      forcedTheme="dark"
      disableTransitionOnChange={false}
      storageKey="all-things-ads-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

