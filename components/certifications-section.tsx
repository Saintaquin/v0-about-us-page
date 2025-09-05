"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Shield,
  TrendingUp,
  Users,
  Lock,
  Eye,
  Calculator,
  Search,
  CreditCard,
  AlertTriangle,
  Building,
} from "lucide-react"

const certifications = [
  {
    title: "Certification CFA (Chartered Financial Analyst)",
    subtitle: "Level 1, 2 et 3 du CFA Institute",
    description:
      "Formation hybride (présentiel et distanciel) pour préparer les trois niveaux de la certification CFA, la référence mondiale en analyse financière.",
    price: "1 500€ par niveau",
    features: ["Payable en plusieurs fois", "Inscription toute l'année", "Formation hybride"],
    icon: TrendingUp,
    color: "bg-cyan-500",
    logo: "/logos/cfa-logo.png",
    featured: true,
  },
  {
    title: "Certification FRM (Financial Risk Manager)",
    subtitle: "de GARP",
    description: "Préparation complète à la certification de référence en gestion des risques financiers.",
    icon: Shield,
    color: "bg-blue-500",
    logo: "/logos/garp-frm-logo.png",
  },
  {
    title: "Certification CAMS",
    subtitle: "Lutte contre le blanchiment",
    description: "Formation spécialisée dans la lutte contre le blanchiment d'argent et le financement du terrorisme.",
    icon: Search,
    color: "bg-blue-500",
    logo: "/logos/cams-logo.png",
  },
  {
    title: "Certification Audit IT (ISACA-CISA)",
    subtitle: "Certified Information Systems Auditor",
    description: "Certification reconnue mondialement pour les professionnels de l'audit des systèmes d'information.",
    icon: Eye,
    color: "bg-blue-500",
    logo: "/logos/isaca-cisa-logo.png",
  },
  {
    title: "Certification en Cybersécurité (ISC2-CISSP)",
    subtitle: "Certified Information Systems Security Professional",
    description: "La certification de référence pour les professionnels de la sécurité informatique.",
    icon: Lock,
    color: "bg-blue-500",
    logo: "/logos/isc2-cissp-logo.png",
  },
  {
    title: "Certification Privacy (IAPP-CIPP/E)",
    subtitle: "Certified Information Privacy Professional",
    description: "Expertise en protection des données personnelles et conformité RGPD.",
    icon: Shield,
    color: "bg-blue-500",
    logo: "/logos/iapp-cipp-logo.png",
  },
  {
    title: "DCG et DSCG",
    subtitle: "Diplômes de Comptabilité et de Gestion",
    description: "Préparation aux diplômes d'État en comptabilité et gestion d'entreprise.",
    icon: Calculator,
    color: "bg-blue-500",
    logo: "/logos/dcg-dscg-logo.png",
  },
  {
    title: "Certification ESG Investing",
    subtitle: "Investissement Responsable",
    description: "Formation aux critères environnementaux, sociaux et de gouvernance dans l'investissement.",
    icon: GraduationCap,
    color: "bg-blue-500",
    logo: "/logos/esg-investing-logo.png",
  },
  {
    title: "Certification CIA (Certified Internal Auditor)",
    subtitle: "Auditeur Interne Certifié",
    description: "La certification de référence mondiale pour les professionnels de l'audit interne.",
    icon: Users,
    color: "bg-blue-500",
    logo: "/logos/cia-logo.png",
  },
  {
    title: "Certification SWIFT-CSP",
    subtitle: "Certified Assessor",
    description: "Certification pour les évaluateurs des contrôles de sécurité SWIFT.",
    icon: Building,
    color: "bg-blue-500",
    logo: "/logos/swift-csp-logo.png",
  },
  {
    title: "Certification QSA PCIDSS",
    subtitle: "Qualified Security Assessor",
    description:
      "Certification pour l'évaluation de la conformité aux standards de sécurité des données de cartes de paiement.",
    icon: CreditCard,
    color: "bg-blue-500",
    logo: "/logos/pci-qsa-logo.png",
  },
  {
    title: "Certification CFE (Certified Fraud Examiner)",
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
                    En savoir plus
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
              asChild
            >
              <Link href="#contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
