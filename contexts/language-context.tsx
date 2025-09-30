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
      "Organisme de formation spécialisé dans les préparations aux certifications reconnues dans le monde de la finance",
    "hero.cta.explore": "Découvrir nos formations",
    "hero.cta.learnMore": "En savoir plus",
    "hero.metrics.certifications": "Certifications",
    "hero.metrics.students": "Étudiants formés",
    "hero.metrics.success": "Taux de réussite",

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

    // Stats
    "stats.title": "SupFinance en chiffres",
    "stats.subtitle": "Notre expertise reconnue dans la formation financière",
    "stats.certifications.label": "Certifications proposées",
    "stats.certifications.description": "CFA, DCG, DSCG, FRM, AMF, CAMS et plus",
    "stats.students.label": "Étudiants formés",
    "stats.students.description": "Professionnels et étudiants accompagnés",
    "stats.success.label": "Taux de réussite",
    "stats.success.description": "Aux examens de certification",
    "stats.experience.label": "Années d'expérience",
    "stats.experience.description": "Dans la formation financière",

    // Team
    "team.title": "Notre équipe",
    "team.subtitle": "Notre équipe est composée de professionnels hautement qualifiés.",
    "team.cta.title": "Rejoignez notre communauté d'apprenants",
    "team.cta.text": "Bénéficiez de l'expertise de nos formateurs pour développer vos compétences...",
    "team.cta.button": "Découvrir nos formations",

    // Team Members (FR)
    "team.member.foued.name": "Foued Ayari, PhD",
    "team.member.foued.title": "Président Fondateur de SupFinance",
    "team.member.foued.subtitle": "",
    "team.member.foued.description":
      "Président et fondateur de SupFinance, Foued Ayari, PhD a à son actif plus de 25 ans d'expérience sur plusieurs continents dont 12 ans à New York, 1 an à Londres, plusieurs missions au Moyen-Orient et en Asie et le reste à Paris. Il a été analyste crédit et managing consultant pour plusieurs banques et institutions (Merrill Lynch, NYSBD, Fidelity, Lehman Brothers, Société Générale, Euromoney Trading, 7City, Intuition...). Dans le domaine de l'enseignement et la formation, Foued a enseigné dans plusieurs universités américaines (City University of New York où il a par ailleurs eu son Doctorat, Wagner College et Pace University) et plusieurs écoles de commerce françaises dont principalement l'INSEEC MSc et INSEEC Bachelor Paris où il dirige aussi le Pôle Finance.",
    "team.member.foued.specialty.0": "Leadership",
    "team.member.foued.specialty.1": "Finance Internationale",
    "team.member.foued.specialty.2": "Enseignement",

    "team.member.babi.name": "Babi Kulasingham",
    "team.member.babi.title": "Directeur du Programme CFA",
    "team.member.babi.subtitle": "VP Equity Research at Tradition Securities and Futures",
    "team.member.babi.description":
      "Fort de son expérience en Equity Research comme Vice Président chez Tradition Securities & Futures et TP ICAP, Babi a pu se forger des compétences multiples et une expertise dans le monde de l'analyse financière, des M&As et des levées de fonds. Chez SupFinance, Babi est en charge du Programme de préparation au CFA.",
    "team.member.babi.specialty.0": "CFA",
    "team.member.babi.specialty.1": "Equity Research",
    "team.member.babi.specialty.2": "M&A",

    "team.member.jeanjacques.name": "Jean-Jacques Jault",
    "team.member.jeanjacques.title": "Directeur du Programme DCG-DSCG",
    "team.member.jeanjacques.subtitle": "Directeur Financier",
    "team.member.jeanjacques.description":
      "Jean-Jacques a plus de 23 ans d'expérience en tant que DAF dans plusieurs groupes et plus de 15 ans d'expérience dans l'enseignement, la formation intra et la préparation aux certifications DCG et DSCG. Il est notamment co-auteur du livre DCG7 Management et chez SupFinance Jean-Jacques est en charge de la préparation au DCG et DSCG ainsi que d'autres certifications courtes propres à FI dans le domaine du Contrôle de Gestion, du management et des systèmes d'information.",
    "team.member.jeanjacques.specialty.0": "DCG",
    "team.member.jeanjacques.specialty.1": "DSCG",
    "team.member.jeanjacques.specialty.2": "Contrôle de Gestion",

    "team.member.aymen.name": "Aymen Essafini",
    "team.member.aymen.title": "Directeur des certifications Data Science et Python for Finance",
    "team.member.aymen.subtitle": "Structurer BNP",
    "team.member.aymen.description":
      "Doublement diplômé de l'université Paris-Dauphine en mathématiques appliquées à la Finance et du DEA Elkaroui de l'École Polytechnique, Aymen a développé une connaissance pointue des produits financiers. Riche de ses expériences acquises sur différents desks de trading et de structuration au sein de BFI et d'asset manager de grandes renommées, Aymen est un spécialiste des modèles quantitatifs de valorisation des produits exotiques et structurés, de leurs stratégies de couverture et de l'automatisation de leur exécution.",
    "team.member.aymen.specialty.0": "Data Science",
    "team.member.aymen.specialty.1": "Python",
    "team.member.aymen.specialty.2": "Finance Quantitative",

    "team.member.ian.name": "Ian Corns",
    "team.member.ian.title": "Directeur Associé",
    "team.member.ian.subtitle": "Conseil & Externalisation de la formation",
    "team.member.ian.description":
      "Ian CORNS, Directeur associé, pilote l'activité d'externalisation de la formation et certaines propositions de conseil. Ian est par ailleurs CEO de SFDS et à ce titre consultant, professeur, conférencier en stratégie, finance, développement commercial, chaîne d'approvisionnement et logistique. Il représente des entreprises et des centres de P&L pour des sociétés américaines et internationales depuis plus de vingt ans dans la région EMEA. Il a une expertise en Stratégie, Finance, Business Development & Supply Chain Management, en externalisation des ventes et génération de revenus de ventes (pour les start-ups et les sociétés en pré-IPO).",
    "team.member.ian.specialty.0": "Conseil",
    "team.member.ian.specialty.1": "Stratégie",
    "team.member.ian.specialty.2": "Supply Chain",

    "team.member.georges.name": "Georges Boré",
    "team.member.georges.title": "Directeur Certification Expérience Client-AGILE",
    "team.member.georges.subtitle": "Managing Director",
    "team.member.georges.description":
      "Georges a passé près de 20 ans chez HSBC en tant que Head of Sales et Managing Director en France, en Égypte et au Royaume Uni. Georges est un expert dans le management d'équipes pluridisciplinaires et multiculturelles en mode agile et dans la transformation et l'optimisation de l'expérience client.",
    "team.member.georges.specialty.0": "Expérience Client",
    "team.member.georges.specialty.1": "AGILE",
    "team.member.georges.specialty.2": "Management",

    // Certifications Page
    "certs.title": "Nos préparations aux Certifications Professionnelles",
    "certs.subtitle": "Découvrez notre vaste gamme de préparations aux certifications les plus reconnues en Finance et en Data, en présentiel et en distanciel. Nos programmes sont gérés par des professionnels titulaires de ces certifications.",
    "certs.badge.popular": "Populaire",
    "certs.button.learnMore": "En savoir plus",
    "certs.cta.title": "Intéressé par nos formations ?",
    "certs.cta.text": "Si vous êtes intéressés par l'une de nos certifications, n'hésitez pas à nous contacter pour plus d'informations sur les modalités et les prochaines sessions.",

    // Formations Page
    "formations.badge": "Formations Certifiantes",
    "formations.title": "Nos formations certifiantes SupFinance",
    "formations.subtitle": "Découvrez nos formations certifiantes SupFinance en présentiel et en distanciel, basées sur les pratiques professionnelles et bâties par des professionnels. Pour toutes informations détaillées merci de nous contacter.",
    "formations.featured": "Formation Phare",
    "formations.button.learnMore": "En savoir plus",
    "formations.cta.title": "Prêt à développer vos compétences ?",
    "formations.cta.text": "Contactez-nous pour obtenir des informations détaillées sur nos formations et construire ensemble votre parcours professionnel.",
    "formations.cta.download": "Télécharger la brochure",

    // Formations list (FR)
    "formations.list.1.title": "Formations Data Science et IA en Finance",
    "formations.list.1.description": "Maîtrisez les outils d'intelligence artificielle appliqués à la finance moderne.",
    "formations.list.1.category": "Data Science",
    "formations.list.1.level": "Avancé",
    "formations.list.1.duration": "Formation complète",
    "formations.list.1.price": "Sur devis",

    "formations.list.2.title": "Formation DAF Digital",
    "formations.list.2.description": "Transformez votre approche de la direction financière avec les outils digitaux.",
    "formations.list.2.category": "Management",
    "formations.list.2.level": "Expert",
    "formations.list.2.duration": "Formation intensive",
    "formations.list.2.price": "Sur devis",

    "formations.list.3.title": "Certifications Python for Finance",
    "formations.list.3.description": "3 certifications de 3 niveaux (Basics/Intermediate/Advanced), 36 heures de formations pour chaque certification.",
    "formations.list.3.category": "Programmation",
    "formations.list.3.level": "Tous niveaux",
    "formations.list.3.duration": "36h par niveau",
    "formations.list.3.price": "Sur devis",

    "formations.list.4.title": "Formation Corporate Valuation for M&A",
    "formations.list.4.description": "Apprenez les méthodes d'évaluation d'entreprise pour les opérations de fusion-acquisition.",
    "formations.list.4.category": "Évaluation",
    "formations.list.4.level": "Avancé",
    "formations.list.4.duration": "Formation spécialisée",
    "formations.list.4.price": "Sur devis",

    "formations.list.5.title": "Formations Financial Modeling",
    "formations.list.5.description": "Construisez des modèles financiers robustes et professionnels.",
    "formations.list.5.category": "Modélisation",
    "formations.list.5.level": "Intermédiaire",
    "formations.list.5.duration": "Formation pratique",
    "formations.list.5.price": "Sur devis",

    "formations.list.6.title": "Formations Bureautique",
    "formations.list.6.description": "Maîtrisez Excel, Word, PowerPoint, Outlook, Access et autres outils bureautiques.",
    "formations.list.6.category": "Bureautique",
    "formations.list.6.level": "Tous niveaux",
    "formations.list.6.duration": "Modules flexibles",
    "formations.list.6.price": "Sur devis",

    // Certifications (FR)
    "certs.list.cfa.title": "Préparation à la Certification CFA (Chartered Financial Analyst)",
    "certs.list.cfa.subtitle": "Level 1, 2 et 3 du CFA Institute",
    "certs.list.cfa.description":
      "Formation hybride (présentiel et distanciel) pour préparer les trois niveaux de la certification CFA, la référence mondiale en analyse financière.",

    "certs.list.frm.title": "Préparation à la Certification FRM (Financial Risk Manager)",
    "certs.list.frm.subtitle": "de GARP",
    "certs.list.frm.description": "Préparation complète à la certification de référence en gestion des risques financiers.",

    "certs.list.cams.title": "Préparation à la Certification CAMS",
    "certs.list.cams.subtitle": "Lutte contre le blanchiment",
    "certs.list.cams.description": "Formation spécialisée dans la lutte contre le blanchiment d'argent et le financement du terrorisme.",

    "certs.list.powerbi.title": "Préparation à la Certification Power-BI",
    "certs.list.powerbi.subtitle": "Microsoft Power BI Data Analyst",
    "certs.list.powerbi.description":
      "Formation complète pour maîtriser Power BI et préparer la certification Microsoft PL-300 en analyse de données et visualisation.",

    "certs.list.esg.title": "Préparation à la Certification Sustainable Investing",
    "certs.list.esg.subtitle": "CFA Institute Certificate in ESG Investing",
    "certs.list.esg.description":
      "Formation spécialisée dans l'investissement durable et responsable, couvrant les critères ESG et l'intégration des facteurs environnementaux, sociaux et de gouvernance.",

    "certs.list.amf.title": "Préparation à la Certification AMF",
    "certs.list.amf.subtitle": "Autorité des Marchés Financiers",
    "certs.list.amf.description":
      "Formation pour obtenir la certification AMF obligatoire pour exercer dans le conseil en investissement financier et la gestion de portefeuille en France.",

    "certs.list.dcg.title": "Préparation à la DCG et DSCG",
    "certs.list.dcg.subtitle": "Diplômes de Comptabilité et de Gestion",
    "certs.list.dcg.description": "Préparation aux diplômes d'État en comptabilité et gestion d'entreprise.",

    "certs.list.cfe.title": "Préparation à la Certification CFE (Certified Fraud Examiner)",
    "certs.list.cfe.subtitle": "Examinateur de Fraude Certifié",
    "certs.list.cfe.description": "Formation spécialisée dans la détection et la prévention de la fraude financière.",
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
    "hero.cta.explore": "Explore our programs",
    "hero.cta.learnMore": "Learn more",
    "hero.metrics.certifications": "Certifications",
    "hero.metrics.students": "Students trained",
    "hero.metrics.success": "Success rate",

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

    // Stats
    "stats.title": "SupFinance in numbers",
    "stats.subtitle": "Our recognized expertise in financial training",
    "stats.certifications.label": "Certifications offered",
    "stats.certifications.description": "CFA, DCG, DSCG, FRM, AMF, CAMS and more",
    "stats.students.label": "Students trained",
    "stats.students.description": "Professionals and students supported",
    "stats.success.label": "Success rate",
    "stats.success.description": "In certification exams",
    "stats.experience.label": "Years of experience",
    "stats.experience.description": "In financial training",

    // Team
    "team.title": "Our Team",
    "team.subtitle": "Our team is made up of highly qualified professionals.",
    "team.cta.title": "Join our learner community",
    "team.cta.text": "Benefit from our trainers' expertise to develop your skills...",
    "team.cta.button": "Discover our training",

    // Team Members (EN)
    "team.member.foued.name": "Foued Ayari, PhD",
    "team.member.foued.title": "Founder and President of SupFinance",
    "team.member.foued.subtitle": "",
    "team.member.foued.description":
      "Founder and president of SupFinance, Foued Ayari, PhD has over 25 years of experience across several continents, including 12 years in New York, 1 year in London, multiple assignments in the Middle East and Asia, and the rest in Paris. He served as a credit analyst and managing consultant for several banks and institutions (Merrill Lynch, NYSBD, Fidelity, Lehman Brothers, Société Générale, Euromoney Trading, 7City, Intuition...). In teaching and training, Foued has taught at several American universities (City University of New York where he earned his PhD, Wagner College and Pace University) and at several French business schools, mainly INSEEC MSc and INSEEC Bachelor Paris where he also heads the Finance Department.",
    "team.member.foued.specialty.0": "Leadership",
    "team.member.foued.specialty.1": "International Finance",
    "team.member.foued.specialty.2": "Teaching",

    "team.member.babi.name": "Babi Kulasingham",
    "team.member.babi.title": "CFA Program Director",
    "team.member.babi.subtitle": "VP Equity Research at Tradition Securities and Futures",
    "team.member.babi.description":
      "With experience in Equity Research as Vice President at Tradition Securities & Futures and TP ICAP, Babi has built multiple skills and expertise in financial analysis, M&As and fundraising. At SupFinance, Babi leads the CFA preparation program.",
    "team.member.babi.specialty.0": "CFA",
    "team.member.babi.specialty.1": "Equity Research",
    "team.member.babi.specialty.2": "M&A",

    "team.member.jeanjacques.name": "Jean-Jacques Jault",
    "team.member.jeanjacques.title": "DCG-DSCG Program Director",
    "team.member.jeanjacques.subtitle": "Chief Financial Officer",
    "team.member.jeanjacques.description":
      "Jean-Jacques has more than 23 years of experience as a CFO in several groups and over 15 years of experience in teaching, in-house training and preparation for the DCG and DSCG certifications. He is co-author of the book DCG7 Management and at SupFinance he is in charge of DCG and DSCG preparation as well as other short certifications specific to FI in Management Control, management and information systems.",
    "team.member.jeanjacques.specialty.0": "DCG",
    "team.member.jeanjacques.specialty.1": "DSCG",
    "team.member.jeanjacques.specialty.2": "Management Control",

    "team.member.aymen.name": "Aymen Essafini",
    "team.member.aymen.title": "Director of Data Science and Python for Finance Certifications",
    "team.member.aymen.subtitle": "BNP Structurer",
    "team.member.aymen.description":
      "With dual degrees from Université Paris-Dauphine in Applied Mathematics to Finance and the El Karoui DEA from École Polytechnique, Aymen has developed in-depth knowledge of financial products. With experience gained on various trading and structuring desks within major investment banks and asset managers, Aymen specializes in quantitative models for valuing exotic and structured products, their hedging strategies, and automation of their execution.",
    "team.member.aymen.specialty.0": "Data Science",
    "team.member.aymen.specialty.1": "Python",
    "team.member.aymen.specialty.2": "Quantitative Finance",

    "team.member.ian.name": "Ian Corns",
    "team.member.ian.title": "Associate Director",
    "team.member.ian.subtitle": "Consulting & Training Outsourcing",
    "team.member.ian.description":
      "Associate Director, leading training outsourcing and selected consulting offerings. Ian is also CEO of SFDS and, in this capacity, a consultant, professor, and speaker in strategy, finance, business development, supply chain and logistics. He has represented companies and P&L centers for American and international organizations for over twenty years in the EMEA region. He has expertise in Strategy, Finance, Business Development & Supply Chain Management, in sales outsourcing and revenue generation (for start-ups and pre-IPO companies).",
    "team.member.ian.specialty.0": "Consulting",
    "team.member.ian.specialty.1": "Strategy",
    "team.member.ian.specialty.2": "Supply Chain",

    "team.member.georges.name": "Georges Boré",
    "team.member.georges.title": "Customer Experience-AGILE Certification Director",
    "team.member.georges.subtitle": "Managing Director",
    "team.member.georges.description":
      "Georges spent nearly 20 years at HSBC as Head of Sales and Managing Director in France, Egypt and the United Kingdom. He is an expert in managing multidisciplinary and multicultural teams in agile mode, as well as in transforming and optimizing customer experience.",
    "team.member.georges.specialty.0": "Customer Experience",
    "team.member.georges.specialty.1": "AGILE",
    "team.member.georges.specialty.2": "Management",

    // Certifications Page
    "certs.title": "Our preparations for Professional Certifications",
    "certs.subtitle": "Discover our wide range of preparations for the most recognized certifications in Finance and Data, in person and remotely. Our programs are run by professionals holding these certifications.",
    "certs.badge.popular": "Popular",
    "certs.button.learnMore": "Learn more",
    "certs.cta.title": "Interested in our training?",
    "certs.cta.text": "If you are interested in one of our certifications, contact us for more information on the procedures and upcoming sessions.",

    // Formations Page
    "formations.badge": "Certifying Training",
    "formations.title": "Our certifying programs at SupFinance",
    "formations.subtitle": "Discover our certifying training programs offered on-site and online, based on professional practices and designed by experts. For detailed information, please contact us.",
    "formations.featured": "Featured Program",
    "formations.button.learnMore": "Learn more",
    "formations.cta.title": "Ready to grow your skills?",
    "formations.cta.text": "Contact us to get detailed information about our programs and build your professional path together.",
    "formations.cta.download": "Download the brochure",

    // Formations list (EN)
    "formations.list.1.title": "Data Science and AI in Finance Programs",
    "formations.list.1.description": "Master AI tools applied to modern finance.",
    "formations.list.1.category": "Data Science",
    "formations.list.1.level": "Advanced",
    "formations.list.1.duration": "Comprehensive program",
    "formations.list.1.price": "On request",

    "formations.list.2.title": "Digital CFO Training",
    "formations.list.2.description": "Transform your finance leadership with digital tools.",
    "formations.list.2.category": "Management",
    "formations.list.2.level": "Expert",
    "formations.list.2.duration": "Intensive program",
    "formations.list.2.price": "On request",

    "formations.list.3.title": "Python for Finance Certifications",
    "formations.list.3.description": "3 certifications across 3 levels (Basics/Intermediate/Advanced), 36 hours per certification.",
    "formations.list.3.category": "Programming",
    "formations.list.3.level": "All levels",
    "formations.list.3.duration": "36h per level",
    "formations.list.3.price": "On request",

    "formations.list.4.title": "Corporate Valuation for M&A",
    "formations.list.4.description": "Learn business valuation methods for M&A operations.",
    "formations.list.4.category": "Valuation",
    "formations.list.4.level": "Advanced",
    "formations.list.4.duration": "Specialized program",
    "formations.list.4.price": "On request",

    "formations.list.5.title": "Financial Modeling Programs",
    "formations.list.5.description": "Build robust and professional financial models.",
    "formations.list.5.category": "Modeling",
    "formations.list.5.level": "Intermediate",
    "formations.list.5.duration": "Practical program",
    "formations.list.5.price": "On request",

    "formations.list.6.title": "Office Productivity Training",
    "formations.list.6.description": "Master Excel, Word, PowerPoint, Outlook, Access and more.",
    "formations.list.6.category": "Office",
    "formations.list.6.level": "All levels",
    "formations.list.6.duration": "Flexible modules",
    "formations.list.6.price": "On request",

    // Certifications (EN)
    "certs.list.cfa.title": "Preparation for the CFA (Chartered Financial Analyst) Certification",
    "certs.list.cfa.subtitle": "CFA Institute Levels 1, 2 and 3",
    "certs.list.cfa.description":
      "Hybrid training (in-person and remote) to prepare for all three levels of the CFA certification, the global benchmark in financial analysis.",

    "certs.list.frm.title": "Preparation for the FRM (Financial Risk Manager) Certification",
    "certs.list.frm.subtitle": "from GARP",
    "certs.list.frm.description": "Comprehensive preparation for the leading certification in financial risk management.",

    "certs.list.cams.title": "Preparation for the CAMS Certification",
    "certs.list.cams.subtitle": "Anti-Money Laundering",
    "certs.list.cams.description": "Specialized training in anti-money laundering and counter-terrorism financing.",

    "certs.list.powerbi.title": "Preparation for the Power BI Certification",
    "certs.list.powerbi.subtitle": "Microsoft Power BI Data Analyst",
    "certs.list.powerbi.description":
      "Complete training to master Power BI and prepare for the Microsoft PL-300 certification in data analysis and visualization.",

    "certs.list.esg.title": "Preparation for the Sustainable Investing Certification",
    "certs.list.esg.subtitle": "CFA Institute Certificate in ESG Investing",
    "certs.list.esg.description":
      "Specialized training in sustainable and responsible investing, covering ESG criteria and integrating environmental, social and governance factors.",

    "certs.list.amf.title": "Preparation for the AMF Certification",
    "certs.list.amf.subtitle": "Autorité des Marchés Financiers",
    "certs.list.amf.description":
      "Training to obtain the mandatory AMF certification for working in financial investment advisory and portfolio management in France.",

    "certs.list.dcg.title": "Preparation for the DCG and DSCG",
    "certs.list.dcg.subtitle": "Accounting and Management Diplomas",
    "certs.list.dcg.description": "Preparation for state diplomas in accounting and business management.",

    "certs.list.cfe.title": "Preparation for the CFE (Certified Fraud Examiner) Certification",
    "certs.list.cfe.subtitle": "Certified Fraud Examiner",
    "certs.list.cfe.description": "Specialized training in detecting and preventing financial fraud.",
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
