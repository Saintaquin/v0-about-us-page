import { ArrowRight, Award, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/modern-finance-office-building-glass-architecture.png"
          alt="Modern finance building"
          fill
          className="object-cover object-center opacity-25 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/15 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/8 via-transparent to-primary/8 animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-primary/15 to-primary/15 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/20 rounded-full animate-float blur-sm"></div>
      </div>

      <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/3"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-primary to-blue-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
              SupFinance
            </span>
            <br />
            <span className="text-white drop-shadow-lg">L'excellence en Finance</span>
          </h1>

          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto text-pretty drop-shadow-lg">
            Organisme de formation spécialisé dans les préparations aux certifications les plus reconnues dans le monde
            de la finance. Formations en présentiel et distanciel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#formations" className="group">
                Découvrir nos formations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Link href="#about">En savoir plus</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Award className="h-8 w-8 text-primary drop-shadow-lg" />
              </div>
              <div className="text-3xl font-bold text-white drop-shadow-lg">15+</div>
              <div className="text-sm text-white drop-shadow-md">Certifications</div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Users className="h-8 w-8 text-primary drop-shadow-lg" />
              </div>
              <div className="text-3xl font-bold text-white drop-shadow-lg">1000+</div>
              <div className="text-sm text-white drop-shadow-md">Étudiants formés</div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg group-hover:scale-110 transition-all duration-300">
                <BookOpen className="h-8 w-8 text-primary drop-shadow-lg" />
              </div>
              <div className="text-3xl font-bold text-white drop-shadow-lg">95%</div>
              <div className="text-sm text-white drop-shadow-md">Taux de réussite</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
