import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/smoothScroll";
import type { Metadata } from "next";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    template: '%s | Imperial Media',
    default: 'Imperial Media Solutions'
  },
  description: 'Welcome to our digital space. We are a Media Agency that loves to turn ideas into reality. Take a look at our collection and get to know our creative journey!',
  creator: 'Thindhimba George',
  keywords: ['imperial media solutions', 'media solutions', 'graphic', 'videography', 'photography', 'print media', 'design', 'livestream', 'Namibia', 'Windhoek', 'Oshakati', 'Ongwediva', 'Ondangwa', 'Swakopmund', 'Opuwo', 'Ruacana', 'Rundu', 'Tsumeb', 'Walvis Bay', 'near me'],  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  'use client'
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
      data-scroll-behavior="smooth"
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
