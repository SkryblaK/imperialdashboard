import { Geist_Mono, Inter } from "next/font/google"
import SmoothScroll from "@/components/smoothScroll";
import { AuthProvider } from "@/components/context/AuthProvider"
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  'use client'
  return (
    <div
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <SmoothScroll>
          <AuthProvider>
            {children}
          </AuthProvider>
      </SmoothScroll>
    </div>
  )
}
