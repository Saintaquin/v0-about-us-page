"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr"
    setLanguage(newLanguage)
  }

  const handleContactClick = () => {
    if (pathname === "/a-propos-de-nous") {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/a-propos-de-nous")
      setTimeout(() => {
        const contactSection = document.getElementById("contact")
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
    setIsMobileMenuOpen(false)
  }

  const navigation = [
    { name: t("nav.about"), href: "/a-propos-de-nous" },
    { name: t("nav.team"), href: "/notre-equipe" },
    { name: t("nav.certifications"), href: "/certifications" },
    { name: t("nav.formations"), href: "/formations-supfinance" },
  ]

  const shouldHaveBackground = isScrolled || pathname === "/a-propos-de-nous" || pathname === "/"

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        shouldHaveBackground ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <Link
  href="/a-propos-de-nous"
  onClick={(e) => {
    if (location.pathname === "/a-propos-de-nous") {
      e.preventDefault()
      scrollTo({ top: 0, behavior: "smooth" })
    }
  }}
>
  <Image
    src="/supfinance-new-logo.png"
    alt="SupFinance Formations"
    width={200}
    height={50}
    className="h-12 w-auto cursor-pointer"
    priority
  />
</Link>

            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t("nav.contact")}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 border-primary/20 hover:border-primary hover:bg-primary/5 bg-transparent"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleContactClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {t("nav.contact")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center space-x-2 border-primary/20 hover:border-primary hover:bg-primary/5 bg-transparent"
                >
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">{language.toUpperCase()}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
