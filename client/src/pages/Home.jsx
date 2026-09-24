import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import ArchitectureSection from '../components/ArchitectureSection'
import NaturePillars from '../components/NaturePillars'
import ProcessSection from '../components/ProcessSection'
import MaterialsSection from '../components/MaterialsSection'
import ProjectsSection from '../components/ProjectsSection'
import WhyHoduSection from '../components/WhyHoduSection'
import NatureFeatureSection from '../components/NatureFeatureSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import EnquireModal from '../components/EnquireModal'

export default function Home() {
  const [enquireOpen, setEnquireOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenEnquire = () => setEnquireOpen(true)
  const handleCloseEnquire = () => setEnquireOpen(false)

  const handleSelectProject = (project) => {
    setSelectedProject(project)
    setEnquireOpen(true)
  }

  return (
    <div className="hodu-page">
      {/* 06. Header */}
      <Header onOpenEnquire={handleOpenEnquire} />

      <main>
        {/* 07. Hero Section */}
        <Hero onOpenEnquire={handleOpenEnquire} />

        {/* 08. Introduction Section */}
        <IntroSection />

        {/* 09. Architecture + Nature Section */}
        <ArchitectureSection />

        {/* Biophilic Nature Pillars */}
        <NaturePillars />

        {/* 10. How We Build Section */}
        <ProcessSection />

        {/* 11. Materials & Craft Section */}
        <MaterialsSection />

        {/* 12. Villas / Projects Section */}
        <ProjectsSection onSelectProject={handleSelectProject} />

        {/* 13. Why HODU Section */}
        <WhyHoduSection />

        {/* 14. Nature Feature Section */}
        <NatureFeatureSection />

        {/* 15. Final CTA Section */}
        <CTASection onOpenEnquire={handleOpenEnquire} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Enquire Modal */}
      <EnquireModal isOpen={enquireOpen} onClose={handleCloseEnquire} />
    </div>
  )
}
