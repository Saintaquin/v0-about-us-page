"use client"

import React from "react"
import { useLanguage } from "@/contexts/language-context"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const { t } = useLanguage()
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
              <CardTitle className="text-2xl">{t("contact.form.send")} ✅</CardTitle>
              <CardDescription>{t("contact.subtitle")}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t("contact.info.title")}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t("contact.info.email")}</h4>
                    <p className="text-slate-700">contact@supfinance.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{t("contact.info.phone")}</h4>
                    <p className="text-slate-700">+33 6 68 50 35 90</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-6 text-white">

              <Button
                variant="secondary"
                size="sm"
                className="transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
                >
                
                {t("nav.contactUs")}
                
              </Button>

            </div>
          </div>

          {/* Contact Form (Formspree) */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900">{t("contact.form.title")}</CardTitle>
              <CardDescription>
                {t("contact.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} method="POST" className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <Input id="name" name="name" type="text" required placeholder={t("contact.form.name")} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder={t("contact.form.email")} />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contact.info.phone")}
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+33 1 23 45 67 89" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contact.form.subject")} *
                    </label>
                    <Input id="subject" name="subject" type="text" required placeholder={t("contact.form.subject")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <Textarea id="message" name="message" required rows={5} placeholder={t("contact.form.message")} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Honeypot anti-spam (champ caché) */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Optionnel : page de redirection après succès (gérée côté Formspree) */}
                {/* <input type="hidden" name="_redirect" value="https://ton-domaine.com/merci" /> */}

                <div aria-live="polite" className="text-sm text-slate-600">
                  {state.submitting && "..."}
                  {state.errors && state.errors.length > 0 && (
                    <span className="text-red-600"> | </span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-70"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {state.submitting ? "..." : t("contact.form.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


