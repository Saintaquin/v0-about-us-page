"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    "nav.about": "À propos de nous",
    "nav.team": "Notre Equipe",
    "nav.certifications": "Certifications",
    "nav.formations": "Formations SupFinance",
    "nav.contact": "Contact",
    "nav.contactUs": "Nous contacter",

    // Hero Section
    "hero.title": "SupFinance",
    "hero.subtitle": "L'excellence en Finance",
    "hero.description":
      "Organisme de formation spécialisé dans les préparations aux certifications les plus reconnues dans le monde de la finance",

    // Services Section
    "services.title": "Nos Services",
    "services.subtitle":
      "Découvrez notre gamme complète de formations et services adaptés à vos besoins professionnels",
    "services.certifications.title": "Certifications",
    "services.certifications.description":
      "SUPFINANCE propose des formations courtes et ciblées pour préparer les certifications les plus reconnues du secteur, renforçant ainsi l'employabilité et l'expertise des étudiants et professionnels. Parmi nos préparations : Certification AMF, CFA (CFA Institute), DCG et DSCG, Finance Quantitative, CAMS, Power BI, Cybersécurité, SWIFT, Python, Trading, CIA, ESG, et bien d'autres.",
    "services.interIntra.title": "Formations Intra",
    "services.interIntra.description":
      "Boostez les compétences de vos équipes avec nos formations intra-entreprise conduites par nos experts formateurs dans tous les domaines de la finance (expert comptable, DAF, avocat d'affaires, gérant de portefeuille, risk manager, structureur, responsable conformité, expert LAB, expert en ESG reporting…). Conçues exclusivement pour vos collaborateurs, elles se déroulent dans vos locaux, dans un lieu de votre choix, dans nos espaces ou en distanciel.",
    "services.outsourcing.title": "Externalisation de la formation",
    "services.outsourcing.description":
      "Nous prenons en charge l'ensemble de vos activités de formation, avec l'appui d'un corps de formateurs expérimentés. Notre équipe accompagne votre entreprise dans l'acquisition et le renforcement des compétences de vos collaborateurs, en parfaite adéquation avec vos objectifs métiers.",
    "services.exams.title": "Préparations aux concours et tests d'aptitudes",
    "services.exams.description":
      "SUPFINANCE vous accompagne dans la préparation aux principaux concours et tests d'aptitude, tels que le TAGE MAGE, le GMAT ou le TOEIC, pour maximiser vos chances de réussite.",
    "services.certifying.title": "Formations",
    "services.certifying.description":
      "Boostez votre carrière et développez vos compétences, où que vous soyez, grâce à nos formations 100 % en distanciel, flexibles et certifiantes.",
    "services.conferences.title": "Conférences",
    "services.conferences.description":
      "SupFinance organise des conférences dans le monde entier sur tous les domaines de la finance. Elle rassemble les principaux acteurs du marché dans des domaines financiers spécifiques, tels que les prêts, le financement d'acquisitions, le financement de projets, les levées de fonds, le financement du commerce extérieur, les produits dérivés, la dette à haut rendement, l'investissement, la finance durable, le financement structuré, le trade finance, et le Private Equity.",
    "services.english.title": "Anglais Financier & Comptable",
    "services.english.description":
      "Des formations en anglais financier et comptable, disponibles en cours individuels ou en sessions de groupe, adaptées à tous les niveaux.",

    // Insights Section
    "insights.title": "Nos Constats",
    "insights.intro1": "Chez SupFinance, l'excellence pédagogique et professionnelle vont de pair.",
    "insights.intro2":
      "Dans un monde où les compétences évoluent rapidement, tant en termes de spécialisation que de niveau d'expertise, SupFinance vous accompagne dans le développement de votre carrière.",
    "insights.intro3":
      "Nous proposons des formations et certifications en finance et en data, conçues pour répondre aux exigences du marché.",
    "insights.mission":
      "Notre mission : vous aider à réussir votre transition professionnelle, à renforcer vos compétences et à atteindre vos ambitions de carrière.",
    "insights.skills.title": "Compétences",
    "insights.skills.description":
      "Dans un secteur en constante évolution, les compétences en finance et en data doivent sans cesse s'adapter. Face aux avancées technologiques, à l'innovation et aux exigences réglementaires, combler ce gap de compétences est devenu essentiel pour les professionnels comme pour les étudiants.",
    "insights.knowHow.title": "Savoir-Faire et Faire-Savoir",
    "insights.knowHow.description":
      "Le savoir-faire est indispensable, mais ne suffit plus dans le domaine de la formation. Le faire-savoir, à travers une stratégie pédagogique personnalisée et adaptée, devient essentiel pour garantir l'efficacité et l'impact des apprentissages.",
    "insights.competitiveness.title": "Compétitivité",
    "insights.competitiveness.description":
      "De plus en plus d'étudiants complètent leur cursus par des formations et certifications complémentaires afin de renforcer leur CV et d'augmenter leurs chances de décrocher un stage, une alternance ou un emploi à la hauteur de leurs ambitions.",
    "insights.alacarte.title": "À la carte",
    "insights.alacarte.description":
      "First Institute innove avec une offre à la carte basée sur la méthode du pooling, qui mutualise les ressources pour réduire les coûts et proposer une alternative économique au coaching individuel.",

    // Contact Form
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Prêt à commencer votre parcours de formation ? Contactez-nous dès aujourd'hui.",
    "contact.info.title": "Informations de contact",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Adresse email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",

    // Footer
    "footer.description":
      "Organisme de formation spécialisé dans les préparations aux certifications les plus reconnues dans le monde de la finance.",
    "footer.navigation": "Navigation",
    "footer.certifications": "Certifications",
    "footer.copyright": "Tous droits réservés.",
  },
  en: {
    // Header
    "nav.about": "About Us",
    "nav.team": "Our Team",
    "nav.certifications": "Certifications",
    "nav.formations": "SupFinance Training",
    "nav.contact": "Contact",
    "nav.contactUs": "Contact Us",

    // Hero Section
    "hero.title": "SupFinance",
    "hero.subtitle": "Excellence in Finance",
    "hero.description":
      "Training organization specialized in preparing for the most recognized certifications in the world of finance",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Discover our complete range of training and services adapted to your professional needs",
    "services.certifications.title": "Certifications",
    "services.certifications.description":
      "SUPFINANCE offers short and targeted training courses to prepare for the most recognized certifications in the sector, thus strengthening the employability and expertise of students and professionals. Among our preparations: AMF Certification, CFA (CFA Institute), DCG and DSCG, Quantitative Finance, CAMS, Power BI, Cybersecurity, SWIFT, Python, Trading, CIA, ESG, and many others.",
    "services.interIntra.title": "Intra-company Training",
    "services.interIntra.description":
      "Boost your teams' skills with our intra-company training conducted by our expert trainers in all areas of finance (chartered accountant, CFO, business lawyer, portfolio manager, risk manager, structurer, compliance officer, LAB expert, ESG reporting expert…). Designed exclusively for your employees, they take place in your premises, in a location of your choice, in our spaces or remotely.",
    "services.outsourcing.title": "Training Outsourcing",
    "services.outsourcing.description":
      "We take charge of all your training activities, with the support of a team of experienced trainers. Our team supports your company in acquiring and strengthening the skills of your employees, in perfect alignment with your business objectives.",
    "services.exams.title": "Competition and Aptitude Test Preparation",
    "services.exams.description":
      "SUPFINANCE accompanies you in preparing for the main competitions and aptitude tests, such as TAGE MAGE, GMAT or TOEIC, to maximize your chances of success.",
    "services.certifying.title": "Training",
    "services.certifying.description":
      "Boost your career and develop your skills, wherever you are, thanks to our 100% remote, flexible and certifying training courses.",
    "services.conferences.title": "Conferences",
    "services.conferences.description":
      "SupFinance organizes conferences worldwide on all areas of finance. It brings together key market players in specific financial domains, such as loans, acquisition financing, project financing, fundraising, foreign trade financing, derivatives, high-yield debt, investment, sustainable finance, structured financing, trade finance, and Private Equity.",
    "services.english.title": "Financial & Accounting English",
    "services.english.description":
      "Financial and accounting English training, available in individual courses or group sessions, adapted to all levels.",

    // Insights Section
    "insights.title": "Our Findings",
    "insights.intro1": "At SupFinance, pedagogical and professional excellence go hand in hand.",
    "insights.intro2":
      "In a world where skills evolve rapidly, both in terms of specialization and level of expertise, SupFinance supports you in developing your career.",
    "insights.intro3":
      "We offer training and certifications in finance and data, designed to meet market requirements.",
    "insights.mission":
      "Our mission: to help you succeed in your professional transition, strengthen your skills and achieve your career ambitions.",
    "insights.skills.title": "Skills",
    "insights.skills.description":
      "In a constantly evolving sector, finance and data skills must constantly adapt. Faced with technological advances, innovation and regulatory requirements, bridging this skills gap has become essential for professionals as well as students.",
    "insights.knowHow.title": "Know-How and Know-How-to-Share",
    "insights.knowHow.description":
      "Know-how is essential, but is no longer sufficient in the field of training. Know-how-to-share, through a personalized and adapted pedagogical strategy, becomes essential to guarantee the effectiveness and impact of learning.",
    "insights.competitiveness.title": "Competitiveness",
    "insights.competitiveness.description":
      "More and more students are completing their studies with additional training and certifications in order to strengthen their CV and increase their chances of landing an internship, work-study program or job that matches their ambitions.",
    "insights.alacarte.title": "À la carte",
    "insights.alacarte.description":
      "First Institute innovates with an à la carte offer based on the pooling method, which pools resources to reduce costs and offer an economical alternative to individual coaching.",

    // Contact Form
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to start your training journey? Contact us today.",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Full name",
    "contact.form.email": "Email address",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",

    // Footer
    "footer.description":
      "Training organization specialized in preparing for the most recognized certifications in the world of finance.",
    "footer.navigation": "Navigation",
    "footer.certifications": "Certifications",
    "footer.copyright": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
