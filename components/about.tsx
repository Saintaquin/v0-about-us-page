import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Lightbulb, Trophy, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const insights = (t: (k: string) => string) => [
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

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t("insights.title")}</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-700 dark:text-slate-200">
            <p>{t("insights.intro1")}</p>
            <p>{t("insights.intro2")}</p>
            <p>{t("insights.intro3")}</p>
            <p className="text-primary font-semibold text-xl bg-primary/5 p-4 rounded-lg border border-primary/20">
              {t("insights.mission")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights(t).map((insight, index) => {
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
