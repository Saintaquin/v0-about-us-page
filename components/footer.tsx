import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SupFinance</span>
            </div>
            <p className="text-background/95 mb-6 max-w-md">
              Organisme de formation spécialisé dans les préparations aux certifications les plus reconnues dans le
              monde de la finance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/95">contact@supfinance.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/95">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/95">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-background/90">CFA Institute</span>
              </li>
              <li>
                <span className="text-background/90">DCG / DSCG</span>
              </li>
              <li>
                <span className="text-background/90">FRM (GARP)</span>
              </li>
              <li>
                <span className="text-background/90">Certification AMF</span>
              </li>
              <li>
                <span className="text-background/90">CAMS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/80">© 2024 SupFinance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
