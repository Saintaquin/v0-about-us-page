"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const teamMembers = (
  t: (k: string) => string,
): Array<{
  name: string
  title: string
  subtitle?: string
  image: string
  description: string
  specialties: string[]
}> => [
  {
    name: t("team.member.foued.name"),
    title: t("team.member.foued.title"),
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-04%20at%2019.57.41%20%283%29-Y3RfhlaCiQEkj6cSb7WEFn3afHaQOv.jpeg",
    description: t("team.member.foued.description"),
    specialties: [
      t("team.member.foued.specialty.0"),
      t("team.member.foued.specialty.1"),
      t("team.member.foued.specialty.2"),
    ],
  },
  {
    name: t("team.member.babi.name"),
    title: t("team.member.babi.title"),
    subtitle: t("team.member.babi.subtitle"),
    image: "/babi-kulasingham-original.jpg",
    description: t("team.member.babi.description"),
    specialties: [
      t("team.member.babi.specialty.0"),
      t("team.member.babi.specialty.1"),
      t("team.member.babi.specialty.2"),
    ],
  },
  {
    name: t("team.member.jeanjacques.name"),
    title: t("team.member.jeanjacques.title"),
    subtitle: t("team.member.jeanjacques.subtitle"),
    image: "/jean-jacques-jault-original.jpg",
    description: t("team.member.jeanjacques.description"),
    specialties: [
      t("team.member.jeanjacques.specialty.0"),
      t("team.member.jeanjacques.specialty.1"),
      t("team.member.jeanjacques.specialty.2"),
    ],
  },
  {
    name: t("team.member.aymen.name"),
    title: t("team.member.aymen.title"),
    subtitle: t("team.member.aymen.subtitle"),
    image: "/aymen-essafini-new.jpg",
    description: t("team.member.aymen.description"),
    specialties: [
      t("team.member.aymen.specialty.0"),
      t("team.member.aymen.specialty.1"),
      t("team.member.aymen.specialty.2"),
    ],
  },
  {
    name: t("team.member.ian.name"),
    title: t("team.member.ian.title"),
    subtitle: t("team.member.ian.subtitle"),
    image: "/ian-corns-original.jpg",
    description: t("team.member.ian.description"),
    specialties: [
      t("team.member.ian.specialty.0"),
      t("team.member.ian.specialty.1"),
      t("team.member.ian.specialty.2"),
    ],
  },
  {
    name: t("team.member.georges.name"),
    title: t("team.member.georges.title"),
    subtitle: t("team.member.georges.subtitle"),
    image: "/georges-bore-original.jpg",
    description: t("team.member.georges.description"),
    specialties: [
      t("team.member.georges.specialty.0"),
      t("team.member.georges.specialty.1"),
      t("team.member.georges.specialty.2"),
    ],
  },
]

export default function TeamSection() {
  const { t } = useLanguage()
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo SupFinance centré */}
          <div className="flex justify-center mb-10">
            <img
              src="/sf-seal-logo.png"
              alt="SupFinance - logo"
              width={140}
              height={140}
              className="opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("team.title")}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("team.subtitle")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers(t).map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 rounded-xl overflow-hidden 
                         bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Image ronde */}
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-45 rounded-full object-cover border-4 border-gray-700 shadow-lg 
                               group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold text-cyan-400 mb-1">{member.title}</p>
                    {member.subtitle && <p className="text-sm text-gray-300 italic mb-3">{member.subtitle}</p>}

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 shadow-md 
                                     hover:from-cyan-500 hover:to-blue-500 transition-colors duration-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-200 leading-relaxed text-sm">{member.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("team.cta.title")}</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("team.cta.text")}
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold 
                               hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link href="/a-propos-de-nous#contact">{t("team.cta.button")}</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
