// External
import { Routes, Route } from 'react-router-dom'

// General styles
import './App.scss'

// Pages
import Nosotros from './pages/Nosotros'
import Catalogo from './pages/Catalogo'
import Servicios from './pages/Servicios'
import Testimonios from './pages/Testimonios'
import Novedades from './pages/Novedades'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

// Components
import BackgroundShape from './components/BackgroundShape'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <BackgroundShape />
      <Nav />

      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/" element={<Nosotros />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
