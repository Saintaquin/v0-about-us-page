"use client"

import type React from "react"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <>{children}</>
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  )
}
