import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const teamMembers = [
  {
    name: "Foued Ayari, PhD",
    title: "Président Fondateur de SupFinance",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-04%20at%2019.57.41%20%283%29-Y3RfhlaCiQEkj6cSb7WEFn3afHaQOv.jpeg",
    description:
      "Président et fondateur de SupFinance, Foued Ayari, PhD a à son actif plus de 25 ans d'expérience sur plusieurs continents dont 12 ans à New York, 1 an à Londres, plusieurs missions au Moyen-Orient et en Asie et le reste à Paris. Il a été analyste crédit et managing consultant pour plusieurs banques et institutions (Merrill Lynch, NYSBD, Fidelity, Lehman Brothers, Société Générale, Euromoney Trading, 7City, Intuition...). Dans le domaine de l'enseignement et la formation, Foued a enseigné dans plusieurs universités américaines (City University of New York où il a par ailleurs eu son Doctorat, Wagner College et Pace University) et plusieurs écoles de commerce françaises dont principalement l'INSEEC MSc et INSEEC Bachelor Paris où il dirige aussi le Pôle Finance.",
    specialties: ["Leadership", "Finance Internationale", "Enseignement"],
  },
  {
    name: "Babi Kulasingham",
    title: "Directeur du Programme CFA",
    subtitle: "VP Equity Research at Tradition Securities and Futures",
    image: "/babi-kulasingham-original.jpg",
    description:
      "Fort de son expérience en Equity Research comme Vice Président chez Tradition Securities & Futures et TP ICAP, Babi a pu se forger des compétences multiples et une expertise dans le monde de l'analyse financière, des M&As et des levées de fonds. Chez SupFinance, Babi est en charge du Programme de préparation au CFA.",
    specialties: ["CFA", "Equity Research", "M&A"],
  },
  {
    name: "Jean-Jacques Jault",
    title: "Directeur du Programme DCG-DSCG",
    subtitle: "Directeur Financier",
    image: "/jean-jacques-jault-original.jpg",
    description:
      "Jean-Jacques a plus de 23 ans d'expérience en tant que DAF dans plusieurs groupes et plus de 15 ans d'expérience dans l'enseignement, la formation intra et la préparation aux certifications DCG et DSCG. Il est notamment co-auteur du livre DCG7 Management et chez SupFinance Jean-Jacques est en charge de la préparation au DCG et DSCG ainsi que d'autres certifications courtes propres à FI dans le domaine du Contrôle de Gestion, du management et des systèmes d'information.",
    specialties: ["DCG", "DSCG", "Contrôle de Gestion"],
  },
  {
    name: "Aymen Essafini",
    title: "Directeur des certifications Data Science et Python for Finance",
    subtitle: "Structurer BNP",
    image: "/aymen-essafini-new.jpg",
    description:
      "Doublement diplômé de l'université Paris-Dauphine en mathématiques appliquées à la Finance et du DEA Elkaroui de l'École Polytechnique, Aymen a développé une connaissance pointue des produits financiers. Riche de ses expériences acquises sur différents desks de trading et de structuration au sein de BFI et d'asset manager de grandes renommées, Aymen est un spécialiste des modèles quantitatifs de valorisation des produits exotiques et structurés, de leurs stratégies de couverture et de l'automatisation de leur exécution.",
    specialties: ["Data Science", "Python", "Finance Quantitative"],
  },
  {
    name: "Ian Corns",
    title: "Directeur Associé",
    subtitle: "Conseil & Externalisation de la formation",
    image: "/ian-corns-original.jpg",
    description:
      "Ian CORNS, Directeur associé, pilote l'activité d'externalisation de la formation et certaines propositions de conseil. Ian est par ailleurs CEO de SFDS et à ce titre consultant, professeur, conférencier en stratégie, finance, développement commercial, chaîne d'approvisionnement et logistique. Il représente des entreprises et des centres de P&L pour des sociétés américaines et internationales depuis plus de vingt ans dans la région EMEA. Il a une expertise en Stratégie, Finance, Business Development & Supply Chain Management, en externalisation des ventes et génération de revenus de ventes (pour les start-ups et les sociétés en pré-IPO).",
    specialties: ["Conseil", "Stratégie", "Supply Chain"],
  },
  {
    name: "Georges Boré",
    title: "Directeur Certification Expérience Client-AGILE",
    subtitle: "Managing Director",
    image: "/georges-bore-original.jpg",
    description:
      "Georges a passé près de 20 ans chez HSBC en tant que Head of Sales et Managing Director en France, en Égypte et au Royaume Uni. Georges est un expert dans le management d'équipes pluridisciplinaires et multiculturelles en mode agile et dans la transformation et l'optimisation de l'expérience client.",
    specialties: ["Expérience Client", "AGILE", "Management"],
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Notre équipe</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-pretty">
            Notre équipe (non exhaustive ici) est composée de professionnels hautement qualifiés et motivés, qui sont
            tous experts dans leur domaine. Forts de nombreuses années d'expérience dans leur secteur et dans la
            formation, ils possèdent l'expertise et la pédagogie nécessaires à votre construction en terme de
            compétences professionnelles et opérationnelles.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white""
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3 flex justify-center items-center p-6">
  <img
    src={member.image || "/placeholder.svg"}
    alt={member.name}
    className="w-40 h-70 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
  />
</div>


                  {/* Content */}
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-lg font-semibold text-cyan-600 mb-1">{member.title}</p>
                      {member.subtitle && <p className="text-sm text-gray-500 italic">{member.subtitle}</p>}
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200 hover:from-cyan-200 hover:to-blue-200 transition-colors duration-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">{member.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rejoignez notre communauté d'apprenants</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bénéficiez de l'expertise de nos formateurs pour développer vos compétences et atteindre vos objectifs
              professionnels dans le domaine de la finance.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
             <Link href="/a-propos-de-nous#contact"> Découvrir nos formations </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
