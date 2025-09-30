import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const buildStats = (t: (k: string) => string) => [
  {
    icon: Award,
    value: "15+",
    label: t("stats.certifications.label"),
    description: t("stats.certifications.description"),
  },
  {
    icon: Users,
    value: "1000+",
    label: t("stats.students.label"),
    description: t("stats.students.description"),
  },
  {
    icon: BookOpen,
    value: "95%",
    label: t("stats.success.label"),
    description: t("stats.success.description"),
  },
  {
    icon: TrendingUp,
    value: "10+",
    label: t("stats.experience.label"),
    description: t("stats.experience.description"),
  },
]

export default function Stats() {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("stats.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("stats.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {buildStats(t).map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
