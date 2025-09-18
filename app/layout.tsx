import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "SupFinance - L'excellence en Finance",
  description:
    "Organisme de formation spécialisé dans les préparations aux certifications les plus reconnues dans le monde de la finance : CFA, DCG, DSCG, FRM, et bien d'autres.",
  keywords:
    "formation finance, certification CFA, DCG, DSCG, FRM, formation financière, préparation concours",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
