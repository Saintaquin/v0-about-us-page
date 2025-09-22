import Header from "@/components/header"
import Footer from "@/components/footer"
import CertificationsSection from "@/components/certifications-section"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  )
}
