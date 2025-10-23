"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Shield, TrendingUp, Calculator, Search, AlertTriangle, BarChart3, Leaf, Building, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"



const certifications = (t: (k: string) => string) => [
  {
    title: t("certs.list.cfa.title"),
    subtitle: t("certs.list.cfa.subtitle"),
    description: t("certs.list.cfa.description"),
    icon: TrendingUp,
    color: "bg-cyan-500",
    logo: "/logos/cfa-logo.png",
    featured: true,
  },
  {
    title: t("certs.list.frm.title"),
    subtitle: t("certs.list.frm.subtitle"),
    description: t("certs.list.frm.description"),
    icon: Shield,
    color: "bg-blue-500",
    logo: "/logos/garp-frm-logo.png",
  },
  {
    title: t("certs.list.cams.title"),
    subtitle: t("certs.list.cams.subtitle"),
    description: t("certs.list.cams.description"),
    icon: Search,
    color: "bg-blue-500",
    logo: "/logos/cams-logo.png",
  },
  {
    title: t("certs.list.powerbi.title"),
    subtitle: t("certs.list.powerbi.subtitle"),
    description: t("certs.list.powerbi.description"),
    icon: BarChart3,
    color: "bg-blue-500",
    logo: "/logos/power-bi-logo.jpg",
  },
  {
    title: t("certs.list.esg.title"),
    subtitle: t("certs.list.esg.subtitle"),
    description: t("certs.list.esg.description"),
    icon: Leaf,
    color: "bg-green-500",
    logo: "/logos/sustainable-investing-logo.jpg",
  },
  {
    title: t("certs.list.amf.title"),
    subtitle: t("certs.list.amf.subtitle"),
    description: t("certs.list.amf.description"),
    icon: Building,
    color: "bg-blue-500",
    logo: "/logos/amf-logo.jpg",
  },
  {
    title: t("certs.list.dcg.title"),
    subtitle: t("certs.list.dcg.subtitle"),
    description: t("certs.list.dcg.description"),
    icon: Calculator,
    color: "bg-blue-500",
    logo: "/logos/dcg-dscg-logo.png",
  },
  {
    title: t("certs.list.cfe.title"),
    subtitle: t("certs.list.cfe.subtitle"),
    description: t("certs.list.cfe.description"),
    icon: AlertTriangle,
    color: "bg-blue-500",
    logo: "/logos/cfe-logo.png",
  },
]


export default function CertificationsSection() {
  const { t } = useLanguage()
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance">
            {t("certs.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("certs.subtitle")}</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications(t).map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  cert.featured ? "ring-2 ring-cyan-500/20 shadow-lg" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative w-16 h-16 bg-white rounded-xl p-2 shadow-sm border">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.title} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    {cert.featured && (
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-700 border-cyan-200">
                        {t("certs.badge.popular")}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-cyan-600 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {cert.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                  {/* Removed price and features for CFA certification */}
                  {cert.price && (
                    <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                      <div className="text-2xl font-bold text-cyan-700 mb-2">{cert.price}</div>
                      {cert.features && (
                        <div className="space-y-1">
                          {cert.features.map((feature, idx) => (
                            <div key={idx} className="text-sm text-cyan-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                    <Link href="/a-propos-de-nous#contact"> {t("certs.button.learnMore")} </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-200/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t("certs.cta.title")}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("certs.cta.text")}</p>
            <Link href="/a-propos-de-nous#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8"
              >
                {t("certs.button.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
