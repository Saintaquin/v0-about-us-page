"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, TrendingUp, Calculator, FileSpreadsheet, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const formations = (t: (k: string) => string) => [
  {
    id: 1,
    title: t("formations.list.1.title"),
    description: t("formations.list.1.description"),
    icon: TrendingUp,
    image: "/data-science-artificial-intelligence-finance-chart.png",
    category: t("formations.list.1.category"),
    level: t("formations.list.1.level"),
    duration: t("formations.list.1.duration"),
    price: t("formations.list.1.price"),
  },
  {
    id: 2,
    title: t("formations.list.2.title"),
    description: t("formations.list.2.description"),
    icon: Calculator,
    image: "/digital-finance-director-dashboard-analytics.png",
    category: t("formations.list.2.category"),
    level: t("formations.list.2.level"),
    duration: t("formations.list.2.duration"),
    price: t("formations.list.2.price"),
  },
  {
    id: 3,
    title: t("formations.list.3.title"),
    description: t("formations.list.3.description"),
    icon: Code,
    image: "/python-programming-finance-code-development.png",
    category: t("formations.list.3.category"),
    level: t("formations.list.3.level"),
    duration: t("formations.list.3.duration"),
    price: t("formations.list.3.price"),
    featured: true,
  },
  {
    id: 4,
    title: t("formations.list.4.title"),
    description: t("formations.list.4.description"),
    icon: TrendingUp,
    image: "/corporate-valuation-merger-acquisition-business-an.png",
    category: t("formations.list.4.category"),
    level: t("formations.list.4.level"),
    duration: t("formations.list.4.duration"),
    price: t("formations.list.4.price"),
  },
  {
    id: 5,
    title: t("formations.list.5.title"),
    description: t("formations.list.5.description"),
    icon: Calculator,
    image: "/financial-modeling-excel-spreadsheet-analysis.png",
    category: t("formations.list.5.category"),
    level: t("formations.list.5.level"),
    duration: t("formations.list.5.duration"),
    price: t("formations.list.5.price"),
  },
  {
    id: 6,
    title: t("formations.list.6.title"),
    description: t("formations.list.6.description"),
    icon: FileSpreadsheet,
    image: "/office-suite-excel-word-powerpoint-business-tools.png",
    category: t("formations.list.6.category"),
    level: t("formations.list.6.level"),
    duration: t("formations.list.6.duration"),
    price: t("formations.list.6.price"),
  },
]

export default function FormationsSection() {
  const { t } = useLanguage()
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-cyan-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            {t("formations.badge")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("formations.title")} {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">SupFinance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("formations.subtitle")}</p>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formations(t).map((formation) => {
            const IconComponent = formation.icon
            return (
              <Card
                key={formation.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${
                  formation.featured ? "ring-2 ring-cyan-500 ring-offset-2" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {formation.featured && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                      {t("formations.featured")}
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {formation.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {formation.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors duration-200 text-balance">
                    {formation.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 text-pretty">{formation.description}</CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {formation.duration}
                    </span>
                    <span className="font-semibold text-foreground">{formation.price}</span>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                    size="sm"
                  >
                  <Link href="/a-propos-de-nous#contact"> {t("formations.button.learnMore")} </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("formations.cta.title")}</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto text-pretty">{t("formations.cta.text")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 font-semibold bg-transparent"
            >
              <Link href="/a-propos-de-nous#contact"> {t("formations.cta.download")} </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
