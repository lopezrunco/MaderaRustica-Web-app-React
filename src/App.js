// External
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// General styles
import './App.css'

// Pages
import Nosotros from './pages/Nosotros'
import Catalogo from './pages/Catalogo'
import Servicios from './pages/Servicios'
import Testimonios from './pages/Testimonios'
import Novedades from './pages/Novedades'
import Contacto from './pages/Contacto'

// Components
import BackgroundShape from './components/BackgroundShape'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">

        <BackgroundShape />
        <Nav />

        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/novedades">
            <Novedades />
          </Route>
          <Route path="/testimonios">
            <Testimonios />
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/catalogo">
            <Catalogo />
          </Route>
          <Route path="/">
            <Nosotros />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  )
}

export default App
