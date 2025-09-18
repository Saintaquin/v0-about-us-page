import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, TrendingUp, Calculator, FileSpreadsheet, Users } from "lucide-react"
import Image from "next/image"

const formations = [
  {
    id: 1,
    title: "Formations Data Science et IA en Finance",
    description: "Maîtrisez les outils d'intelligence artificielle appliqués à la finance moderne.",
    icon: TrendingUp,
    image: "/data-science-artificial-intelligence-finance-chart.png",
    category: "Data Science",
    level: "Avancé",
    duration: "Formation complète",
    price: "Sur devis",
  },
  {
    id: 2,
    title: "Formation DAF Digital",
    description: "Transformez votre approche de la direction financière avec les outils digitaux.",
    icon: Calculator,
    image: "/digital-finance-director-dashboard-analytics.png",
    category: "Management",
    level: "Expert",
    duration: "Formation intensive",
    price: "Sur devis",
  },
  {
    id: 3,
    title: "Certifications Python for Finance",
    description:
      "3 certifications de 3 niveaux (Basics/Intermediate/Advanced), 36 heures de formations pour chaque certification.",
    icon: Code,
    image: "/python-programming-finance-code-development.png",
    category: "Programmation",
    level: "Tous niveaux",
    duration: "36h par niveau",
    price: "Sur devis",
    featured: true,
  },
  {
    id: 4,
    title: "Formation Corporate Valuation for M&A",
    description: "Apprenez les méthodes d'évaluation d'entreprise pour les opérations de fusion-acquisition.",
    icon: TrendingUp,
    image: "/corporate-valuation-merger-acquisition-business-an.png",
    category: "Évaluation",
    level: "Avancé",
    duration: "Formation spécialisée",
    price: "Sur devis",
  },
  {
    id: 5,
    title: "Formations Financial Modeling",
    description: "Construisez des modèles financiers robustes et professionnels.",
    icon: Calculator,
    image: "/financial-modeling-excel-spreadsheet-analysis.png",
    category: "Modélisation",
    level: "Intermédiaire",
    duration: "Formation pratique",
    price: "Sur devis",
  },
  {
    id: 6,
    title: "Formations Bureautique",
    description: "Maîtrisez Excel, Word, PowerPoint, Outlook, Access et autres outils bureautiques.",
    icon: FileSpreadsheet,
    image: "/office-suite-excel-word-powerpoint-business-tools.png",
    category: "Bureautique",
    level: "Tous niveaux",
    duration: "Modules flexibles",
    price: "Sur devis",
  },
]

export default function FormationsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-cyan-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Formations Certifiantes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Nos formations certifiantes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">SupFinance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Découvrez nos formations certifiantes SupFinance en présentiel et en distanciel, basées sur les pratiques
            professionnelles et bâties par des professionnels. Pour toutes informations détaillées merci de nous
            contacter.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {formations.map((formation) => {
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
                      Formation Phare
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
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Prêt à développer vos compétences ?</h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto text-pretty">
            Contactez-nous pour obtenir des informations détaillées sur nos formations et construire ensemble votre
            parcours professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 font-semibold bg-transparent"
            >
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
