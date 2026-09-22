import { useCallback, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Contact from './pages/Contact'
import Home from './pages/Home'

export default function App() {
  const [ready, setReady] = useState(false)
  const done = useCallback(() => setReady(true), [])

  return (
    <BrowserRouter>
      {!ready && <Preloader onDone={done} />}
      <div className={`lux-shell ${ready ? 'is-ready' : ''}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home ready={ready} />} />
          <Route path="/contact" element={<Contact ready={ready} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
