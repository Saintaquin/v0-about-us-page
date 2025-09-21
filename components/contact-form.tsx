"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  // Remplace par un env var si tu veux: process.env.NEXT_PUBLIC_FORMSPREE_ID
  const formId = "xanpwndb" // depuis ton PDF/Formspree :contentReference[oaicite:1]{index=1}
  const [state, handleSubmit] = useForm(formId)

  if (state.succeeded) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CheckCircle2 className="mx-auto mb-2 h-10 w-10 text-green-600" />
              <CardTitle className="text-2xl">Message envoyé ✅</CardTitle>
              <CardDescription>Merci ! Nous revenons vers vous au plus vite.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vous avez des questions sur nos formations ? Notre équipe d&apos;experts est là pour vous accompagner
            dans votre projet professionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-700">contact@supfinance.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Téléphone</h4>
                    <p className="text-slate-700">+33 6 68 50 35 90</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-2">Formations sur mesure</h4>
              <p className="text-primary-foreground/90 mb-4">
                Besoin d&apos;une formation adaptée à votre entreprise ? Contactez-nous pour un devis personnalisé.
              </p>
              <Button variant="secondary" size="sm">
                Demander un devis
              </Button>
            </div>
          </div>

          {/* Contact Form (Formspree) */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">Envoyez-nous un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nom complet *
                    </label>
                    <Input id="name" name="name" type="text" required placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="votre@email.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Téléphone
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+33 1 23 45 67 89" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Sujet *
                    </label>
                    <Input id="subject" name="subject" type="text" required placeholder="Objet de votre demande" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Décrivez votre projet..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Honeypot anti-spam (champ caché) */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Optionnel : page de redirection après succès (gérée côté Formspree) */}
                {/* <input type="hidden" name="_redirect" value="https://ton-domaine.com/merci" /> */}

                <div aria-live="polite" className="text-sm text-slate-600">
                  {state.submitting && "Envoi en cours..."}
                  {state.errors && state.errors.length > 0 && (
                    <span className="text-red-600"> | Merci de vérifier les champs en rouge.</span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-70"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {state.submitting ? "Envoi..." : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


