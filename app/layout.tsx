import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "SupFinance - L'excellence en Finance",
  description:
    "Organisme de formation spécialisé dans les préparations aux certifications les plus reconnues dans le monde de la finance : CFA, DCG, DSCG, FRM, et bien d'autres.",
  keywords: "formation finance, certification CFA, DCG, DSCG, FRM, formation financière, préparation concours",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
