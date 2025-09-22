import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientLayout from "./client-layout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
