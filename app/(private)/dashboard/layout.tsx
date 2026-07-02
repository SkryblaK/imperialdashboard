import { Geist_Mono, Inter } from "next/font/google"
import SmoothScroll from "@/components/smoothScroll";
import { AuthProvider } from "@/components/context/AuthProvider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    absolute: 'Dashboard'
  },
  description: 'Dashboard Application for Imperial Media Solution clients',
  creator: 'Thindhimba George',
  keywords: ['dashboard', 'clients','imperial media solutions', 'media solutions', 'graphic', 'videography', 'photography', 'print media', 'design', 'livestream', 'Namibia', 'Windhoek', 'Oshakati', 'Ongwediva', 'Ondangwa', 'Swakopmund', 'Opuwo', 'Ruacana', 'Rundu', 'Tsumeb', 'Walvis Bay', 'near me'],  
}

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
