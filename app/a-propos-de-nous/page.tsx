"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Lightbulb, Trophy, Settings, Users, BookOpen, Award, Presentation } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const insightsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: BookOpen,
      title: t("services.certifying.title"),
      description: t("services.certifying.description"),
      image: "/formations.png",
      href: "/formations-supfinance",
    },
    {
      icon: Award,
      title: t("services.certifications.title"),
      description: t("services.certifications.description"),
      image: "/certifications.png",
      href: "/certifications",
    },
    {
      icon: Users,
      title: t("services.interIntra.title"),
      description: t("services.interIntra.description"),
      image: "/formations-intra.jpg",
      href: "/a-propos-de-nous#contact",
    },
    {
      icon: Presentation,
      title: t("services.conferences.title"),
      description: t("services.conferences.description"),
      image: "/conferences.jpg",
      href: "/a-propos-de-nous#contact",
    },
  ]

  const insights = [
    {
      icon: TrendingUp,
      title: t("insights.skills.title"),
      description: t("insights.skills.description"),
    },
    {
      icon: Lightbulb,
      title: t("insights.knowHow.title"),
      description: t("insights.knowHow.description"),
    },
    {
      icon: Trophy,
      title: t("insights.competitiveness.title"),
      description: t("insights.competitiveness.description"),
    },
    {
      icon: Settings,
      title: t("insights.alacarte.title"),
      description: t("insights.alacarte.description"),
    },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = heroRef.current
      if (parallax) {
        const speed = scrolled * 0.5
        parallax.style.transform = `translateY(${speed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-600" />
        <div className="absolute inset-0 bg-[url('/modern-finance-office-building-glass-architecture.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
              {t("hero.title")}
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full" />
            <p className="text-2xl md:text-4xl font-light mb-12 text-white drop-shadow-lg">{t("hero.subtitle")}</p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white drop-shadow-md">
              {t("hero.description")}
            </p>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce delay-500" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              {t("services.title")
                .split(" ")
                .map((word, index) =>
                  index === 1 ? (
                    <span key={index} className="text-primary">
                      {word}
                    </span>
                  ) : (
                    word + " "
                  ),
                )}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={service.title} href={service.href}>
                  <Card
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 border-0 bg-white/80 backdrop-blur-sm overflow-hidden cursor-pointer h-full"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 underline decoration-primary decoration-2 underline-offset-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section
        ref={insightsRef}
        className="py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              {t("insights.title")
                .split(" ")
                .map((word, index) =>
                  index === 1 ? (
                    <span key={index} className="text-primary">
                      {word}
                    </span>
                  ) : (
                    word + " "
                  ),
                )}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full" />
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>{t("insights.intro1")}</p>
              <p>{t("insights.intro2")}</p>
              <p>{t("insights.intro3")}</p>
              <p className="text-primary font-semibold text-xl">{t("insights.mission")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => {
              const Icon = insight.icon
              return (
                <Card
                  key={insight.title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 translate-y-8 bg-white/90 backdrop-blur-sm border-0 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {insight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>

      <Footer />

      <style jsx global>{`
        .animate-on-scroll {
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(8, 145, 178, 0.3); }
          50% { box-shadow: 0 0 40px rgba(8, 145, 178, 0.6); }
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
