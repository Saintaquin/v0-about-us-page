import Header from "@/components/header"
import Footer from "@/components/footer"
import TeamSection from "@/components/team-section"

export default function NotreEquipePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
