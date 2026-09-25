import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import ExpertiseSection from '../components/ExpertiseSection'
import DesignPhilosophy from '../components/DesignPhilosophy'
import ProcessSection from '../components/ProcessSection'
import MaterialsSection from '../components/MaterialsSection'
import ProjectsSection from '../components/ProjectsSection'
import QualityTrustSection from '../components/QualityTrustSection'
import NatureMomentSection from '../components/NatureMomentSection'
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
      {/* Header Navigation */}
      <Header onOpenEnquire={handleOpenEnquire} />

      <main>
        {/* HERO SECTION */}
        <Hero onOpenEnquire={handleOpenEnquire} />

        {/* SECTION 01 — BUILT WITH EXPERIENCE / EXPERTISE */}
        <ExpertiseSection />

        {/* SECTION 02 — DESIGN PHILOSOPHY */}
        <DesignPhilosophy />

        {/* SECTION 03 — HOW WE BUILD */}
        <MaterialsSection />

        {/* SECTION 04 — THE HODU APPROACH */}
        <IntroSection />

        {/* SECTION 05 — OUR PROCESS */}
        <ProcessSection />

        {/* SECTION 06 — VILLAS */}
        <ProjectsSection onSelectProject={handleSelectProject} />

        {/* SECTION 08 — QUALITY / TRUST */}
        <QualityTrustSection />

        {/* SECTION 09 — FINAL NATURE MOMENT */}
        <NatureMomentSection onOpenEnquire={handleOpenEnquire} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* ENQUIRE MODAL */}
      <EnquireModal isOpen={enquireOpen} onClose={handleCloseEnquire} selectedProject={selectedProject} />
    </div>
  )
}
