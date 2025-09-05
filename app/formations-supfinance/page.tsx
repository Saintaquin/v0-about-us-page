import Header from "@/components/header"
import Footer from "@/components/footer"
import FormationsSection from "@/components/formations-section"

export default function FormationsSupFinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <FormationsSection />
      </main>
      <Footer />
    </div>
  )
}
