import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Lightbulb, Trophy, Settings } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    title: "Compétences",
    description:
      "Dans un secteur en constante évolution, les compétences en finance et en data doivent sans cesse s'adapter. Face aux avancées technologiques, à l'innovation et aux exigences réglementaires, combler ce gap de compétences est devenu essentiel.",
  },
  {
    icon: Lightbulb,
    title: "Savoir-Faire et Faire-Savoir",
    description:
      "Le savoir-faire est indispensable, mais ne suffit plus dans le domaine de la formation. Le faire-savoir, à travers une stratégie pédagogique personnalisée et adaptée, devient essentiel pour garantir l'efficacité et l'impact des apprentissages.",
  },
  {
    icon: Trophy,
    title: "Compétitivité",
    description:
      "De plus en plus d'étudiants complètent leur cursus par des formations et certifications complémentaires afin de renforcer leur CV et d'augmenter leurs chances de décrocher un stage, une alternance ou un emploi à la hauteur de leurs ambitions.",
  },
  {
    icon: Settings,
    title: "À la carte",
    description:
      "First Institute innove avec une offre à la carte basée sur la méthode du pooling, qui mutualise les ressources pour réduire les coûts et proposer une alternative économique au coaching individuel.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Nos constats</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-700 dark:text-slate-200">
            <p>
              Chez <strong className="text-primary">SupFinance</strong>, l'excellence{" "}
              <strong className="text-primary">pédagogique</strong> et{" "}
              <strong className="text-primary">professionnelle</strong> vont de pair.
            </p>
            <p>
              Dans un monde où les compétences évoluent rapidement, tant en termes de spécialisation que de niveau
              d'expertise, SupFinance vous accompagne dans le développement de votre carrière.
            </p>
            <p>
              Nous proposons des formations et certifications en <strong className="text-primary">finance</strong> et en{" "}
              <strong className="text-primary">data</strong>, conçues pour répondre aux exigences du marché.
              Préparez-vous efficacement aux certifications les plus reconnues telles que le{" "}
              <strong className="text-primary">CFA</strong>, <strong className="text-primary">AMF</strong>,{" "}
              <strong className="text-primary">ACAMS</strong>, <strong className="text-primary">CIA</strong>,{" "}
              <strong className="text-primary">Data Science</strong>,{" "}
              <strong className="text-primary">Cybersécurité</strong>, <strong className="text-primary">DCG</strong>, et
              bien d'autres.
            </p>
            <p className="text-primary font-semibold text-xl bg-primary/5 p-4 rounded-lg border border-primary/20">
              Notre mission : vous aider à réussir votre <strong>transition professionnelle</strong>, à renforcer vos{" "}
              <strong>compétences</strong> et à atteindre vos <strong>ambitions de carrière</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <Card
                key={insight.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors text-slate-900 dark:text-white">
                      {insight.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                    {insight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
