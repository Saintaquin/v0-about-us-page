"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Shield, TrendingUp, Calculator, Search, AlertTriangle, BarChart3, Leaf, Building, Link as LinkIcon } from "lucide-react"
import Link from "next/link"



const certifications = [
  {
    title: "Préparation à la Certification CFA (Chartered Financial Analyst)",
    subtitle: "Level 1, 2 et 3 du CFA Institute",
    description:
      "Formation hybride (présentiel et distanciel) pour préparer les trois niveaux de la certification CFA, la référence mondiale en analyse financière.",
    icon: TrendingUp,
    color: "bg-cyan-500",
    logo: "/logos/cfa-logo.png",
    featured: true,
  },
  {
    title: "Préparation à la Certification FRM (Financial Risk Manager)",
    subtitle: "de GARP",
    description: "Préparation complète à la certification de référence en gestion des risques financiers.",
    icon: Shield,
    color: "bg-blue-500",
    logo: "/logos/garp-frm-logo.png",
  },
  {
    title: "Préparation à la Certification CAMS",
    subtitle: "Lutte contre le blanchiment",
    description: "Formation spécialisée dans la lutte contre le blanchiment d'argent et le financement du terrorisme.",
    icon: Search,
    color: "bg-blue-500",
    logo: "/logos/cams-logo.png",
  },
  {
    title: "Préparation à la Certification Power-BI",
    subtitle: "Microsoft Power BI Data Analyst",
    description:
      "Formation complète pour maîtriser Power BI et préparer la certification Microsoft PL-300 en analyse de données et visualisation.",
    icon: BarChart3,
    color: "bg-blue-500",
    logo: "/logos/power-bi-logo.jpg",
  },
  {
    title: "Préparation à la Certification Sustainable Investing",
    subtitle: "CFA Institute Certificate in ESG Investing",
    description:
      "Formation spécialisée dans l'investissement durable et responsable, couvrant les critères ESG et l'intégration des facteurs environnementaux, sociaux et de gouvernance.",
    icon: Leaf,
    color: "bg-green-500",
    logo: "/logos/sustainable-investing-logo.jpg",
  },
  {
    title: "Préparation à la Certification AMF",
    subtitle: "Autorité des Marchés Financiers",
    description:
      "Formation pour obtenir la certification AMF obligatoire pour exercer dans le conseil en investissement financier et la gestion de portefeuille en France.",
    icon: Building,
    color: "bg-blue-500",
    logo: "/logos/amf-logo.jpg",
  },
  {
    title: "Préparation à la DCG et DSCG",
    subtitle: "Diplômes de Comptabilité et de Gestion",
    description: "Préparation aux diplômes d'État en comptabilité et gestion d'entreprise.",
    icon: Calculator,
    color: "bg-blue-500",
    logo: "/logos/dcg-dscg-logo.png",
  },
  {
    title: "Préparation à la Certification CFE (Certified Fraud Examiner)",
    subtitle: "Examinateur de Fraude Certifié",
    description: "Formation spécialisée dans la détection et la prévention de la fraude financière.",
    icon: AlertTriangle,
    color: "bg-blue-500",
    logo: "/logos/cfe-logo.png",
  },
]


export default function CertificationsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance">
            Nos préparations aux{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Certifications Professionnelles
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Découvrez notre vaste gamme de préparations aux certifications les plus reconnues en Finance et en Data, en
            présentiel et en distanciel. Nos programmes sont gérés par des professionnels titulaires de ces
            certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
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
                        Populaire
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
                    <Link href="/a-propos-de-nous#contact"> En savoir plus </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-200/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Intéressé par nos formations ?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Si vous êtes intéressés par l'une de nos certifications, n'hésitez pas à nous contacter pour plus
              d'informations sur les modalités et les prochaines sessions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8"
              
            >
              <Link href="/a-propos-de-nous#contact">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
