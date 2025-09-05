import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Building, Target, Award, Globe } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Préparations aux certifications",
    description: "Formations courtes et ciblées pour préparer les certifications les plus reconnues du secteur.",
    features: [
      "Certification AMF",
      "CFA (CFA Institute)",
      "DCG et DSCG",
      "Finance Quantitative",
      "CAMS",
      "Power BI",
      "Cybersécurité",
      "SWIFT",
      "Python",
      "Trading",
      "CIA",
      "ESG",
    ],
    color: "primary",
  },
  {
    icon: Users,
    title: "Formations Inter et Intra",
    description: "Séminaires et conférences publiques autour de thématiques clés de l'actualité financière.",
    features: [
      "Séminaires publics",
      "Conférences",
      "Actualité financière",
      "Économie",
      "Technologie",
      "Data & IA",
      "Formations sur mesure",
      "Intra-entreprise",
    ],
    color: "accent",
  },
  {
    icon: Building,
    title: "Externalisation de la formation",
    description: "Prise en charge complète de vos activités de formation avec des formateurs expérimentés.",
    features: [
      "Formateurs expérimentés",
      "Acquisition de compétences",
      "Renforcement des compétences",
      "Objectifs métiers",
      "Accompagnement personnalisé",
    ],
    color: "primary",
  },
  {
    icon: Target,
    title: "Préparations aux concours",
    description: "Accompagnement pour les principaux concours et tests d'aptitude.",
    features: ["TAGE MAGE", "GMAT", "TOEIC", "Tests d'aptitude", "Maximisation des chances"],
    color: "accent",
  },
  {
    icon: Award,
    title: "Formations Certifiantes",
    description: "Développez vos compétences avec nos formations 100% en distanciel, flexibles et certifiantes.",
    features: ["100% distanciel", "Formations flexibles", "Certifications reconnues", "Développement de carrière"],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Anglais Financier & Comptable",
    description: "Formations en anglais financier et comptable adaptées à tous les niveaux.",
    features: ["Cours individuels", "Sessions de groupe", "Tous niveaux", "Anglais spécialisé"],
    color: "accent",
  },
]

export default function Services() {
  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Formations SupFinance</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto text-pretty">
            <strong>SupFinance</strong> est un organisme de formation spécialisé dans les préparations aux
            certifications les plus reconnues dans le monde de la finance, proposées en <strong>présentiel</strong> et
            en <strong>distanciel</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${
                      service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${service.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
